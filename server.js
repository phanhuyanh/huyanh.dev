const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const history = require('connect-history-api-fallback')
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))

// end point bắt đầu bằng _
app.get('/_test', (req, res) => {
  res.send('Endpoint')
})

// url không bắt đầu bằng _ là client
app.get(/^[^_].*/, history(), (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))