const Bree = require('bree');
const jobs = require('./jobs/index');

const bree = new Bree({ jobs: jobs });

bree.start();
