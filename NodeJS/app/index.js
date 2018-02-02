// app/index.js

process.env.NODE_ENV='production'

const express = require('express')
const app = express()
const port = 8585
const host = "0.0.0.0"

const indexHandler = require('./IndexHandler')
const blogHandler = require('./BlogHandler')
const commondHandler = require('./CommonHandler')

/* Serve Static Files */
app.set('etag', false);
app.get('/', (request, response) => {
    const header = commondHandler.makeHeader();
	const indexContent = indexHandler.makeIndexContent();
    const footer = commondHandler.makeFooter();
    const page = header + indexContent + footer;

	response.send(page);
})

app.get('/ping', (request, response) => {
  response.send("pong")
})

app.get('/blog', (request, response) => {
    const header = commondHandler.makeHeader();
	const blogContent = blogHandler.makeBlogContent();
    const footer = commondHandler.makeFooter();
    const page = header + blogContent + footer;

	response.send(page);
})

app.get('/json', (request, response) => {
var jsonData = commondHandler.makeJSONfast();
 	response.json(jsonData);
   response.end()
})

app.use(express.static('public'))

app.listen(port, host, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${host}:${port}`)
})
