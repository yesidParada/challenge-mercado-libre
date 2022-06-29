import express from "express";
import dotenv from 'dotenv';
import { Utilities } from './utils/utilities';
import { SearchController } from './controller/search.controller';
import { querySearch } from './interfaces/search.model';
import { ItemController } from './controller/item.controller';
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../router/App';
dotenv.config();

const { ENV, PORT} = process.env;
const server = express();

if (ENV === 'development') {
    console.log('development config');
}

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.get('/api/items', (req, res) => {
    const query: querySearch  = {
        q: `${req.query.q}`
    };
    const controller = new SearchController();
    controller.getData(query).then( (response) => {
        res.json(response);
    })
})

server.get('/api/item/:id', (req, res) => {

    const validate = new Utilities();
    validate.validateValue(req.params, 'id');
    const controller = new ItemController();
    controller.getData(req.params.id).then((response) => {
        res.json(response)
    } );
})

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

server.use('/', (req, res, next) => {
    console.log('hello')
    const test = React.createElement(App, {})
	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).send("Some error happened")
      }
      
      return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(test)}</div>`))
    })
})
