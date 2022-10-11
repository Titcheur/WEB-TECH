const userRouter = require('./handles.js');
const express = require('express');
//const server = http.createServer(handles.serverHandle);
const app = express()
const port = process.env.PORT || 3000
  
  app.get('/', (req, res) => res.send('Hello World!'))
  app.use('/articles', userRouter)

app.listen(port, () => {
    console.log('Server is running on port 3000');
});

