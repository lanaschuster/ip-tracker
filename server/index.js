const express = require('express')
const ipLocation = require('./routes/ip-location.route')

const app = express()
app.use(ipLocation)
module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
