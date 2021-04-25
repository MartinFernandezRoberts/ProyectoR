const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
const connectDB = require('./config/db')

//cargar configuración
// cargar configuración
dotenv.config({ path: './server/config/config.env'})

connectDB()

const app = express()

//middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json());

//static
app.use(express.static(path.join(__dirname, './public')))

//rutas 
app.use('/', require('./routes/index'))

//Consola onlydev
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3000

app.listen(
    PORT,
    console.log(`Corriendo modo ${process.env.NODE_ENV}, en el puerto ${PORT}`)
)
