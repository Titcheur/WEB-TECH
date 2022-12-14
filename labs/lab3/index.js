const articles = require('./routes/articles');
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
  
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/articles', articles)

app.listen(port, () => {
    console.log('Server is running on port 3000');
});

