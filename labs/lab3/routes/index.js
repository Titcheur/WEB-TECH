const url = require('url')
const qs = require('querystring')
const fs = require('fs')
const express = require('express')
const { get } = require('http')
const db = require('db.js')

const userRouter = express.Router()

const header = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>Explaination</title>' +
'    </head>' + 
'    <body>';

const footer = '</body>' +
'</html>';

const content = header + 
'       <h1>Hello stranger!</h1>' +
'       <p>If you want to dislpay you name, enter /hello?name= followed by your name!';


userRouter
    .get('/', (req, res) => { 
        res.send('Hello stranger!');
    })  
    .get('/hello/:name', (req, res) => {
        const params = req.params;
            if(params['name'] === 'Benjamin') {
                res.send('Nom : ' + params['name']);
            }
            else if(params['name'] === 'Titouan') {
                res.send('Nom:' + params['name']  );
            }
            else {
                res.send('Hello ' + params['name']);
            }
       
    })
    .get('/hello', (req, res) => {
        res.send('Hello Anonymous!');
    })
    .get('/about', (req, res) => {
        // write the content of .content/about.json to the response
        fs.readFile('./content/about.json', 'utf8', (err, data) => {
            if (err) {
                res.send('Error reading file');
            } else {
                res.send(JSON.parse(data));
            }
        });
    })


    .get('/articles',(req, res)=>{

      

    })


   

module.exports = userRouter