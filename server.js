const express = require('express')
const envrc = require('dotenvrc');
const octokit = require("@octokit/auth-app");


// const octokit = new Octokit({ auth: `personal-access-token123` });

const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/testing', (req, res) => {
  res.send('we got your testing request')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})