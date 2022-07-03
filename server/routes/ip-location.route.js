const { Router } = require('express')
const axios = require('axios')

const router = Router()

router.get('/ip-location', function (req, res, next) {
  const address = req.query.address
  const url = `${process.env.IP_API_URL}country,city?apiKey=${process.env.IP_API_KEY}&ipAddress=${address}`

  axios
    .get(url)
    .then((result) => {
      return res.json({
        ipAddress: result.data.ip,
        location: `${result.data.location.country}, ${result.data.location.city}, ${result.data.location.region}`,
        timezone: result.data.location.timezone,
        isp: result.data.isp,
        lng: result.data.location.lng,
        lat: result.data.location.lat,
      })
    })
    .catch(() => {
      return res.json({
        message: 'Algo de errado aconteceu... Tente novamente mais tarde.',
      })
    })
})

module.exports = router
