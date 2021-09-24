const express = require('express');
const morgan = require('morgan')
const server = express();
const routes = require('./routes')

//Middlewares
server.use(morgan('dev'))
server.use(express.json()); 


//Routes
server.use('/camionero', routes.camioneroRoutes)
server.use('/paquetes', routes.paqueteRoutes)
server.use('/provincia', routes.provinciaRoutes)
server.use('/camion', routes.camionRoutes)
server.use('/entrega', routes.entregaRoutes)

//Static Folder


module.exports = server;