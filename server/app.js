const path = require('path');
const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');
const cors = require('cors');

/////////mercadopago
const mercadopago = require('mercadopago');

// cargar configuración
dotenv.config({ path: './server/config/config.env' });

//passport config
require('./config/passport')(passport);

connectDB();

const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//static

app.use(express.static(path.join(__dirname, './public/')));

//sessions ARRIBADEPASSPORT
app.use(
  session({
    secret: 'lokesea',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

//TOKEN https://www.mercadopago.com/developers/panel
mercadopago.configurations.setAccessToken(process.env.MERCADO_TOKEN);

//cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//rutas
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/panel', require('./routes/panel'));

//rutas API
app.use('/api/agenda', require('./routes/api/agenda'));
app.use('/api/banners', require('./routes/api/banners'));
app.use('/api/casa', require('./routes/api/casa'));
app.use('/api/destacados', require('./routes/api/destacados'));
app.use('/api/ubicaciones', require('./routes/api/ubicaciones'));

//mercadopago
app.use('/pago', require('./routes/mercadopago/procPago'));

//kewea la consola onlydev mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`SERVER DE PANA EN MODO ${process.env.NODE_ENV}, PUERTO: ${PORT}`)
);

//Bree
const Bree = require('bree');
const jobs = require('./jobs/index');

const bree = new Bree({
  root: path.join(__dirname, 'jobs'),
  jobs: jobs,
});

bree.start();
