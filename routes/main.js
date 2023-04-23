__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/valor', (req, res) => {
res.sendFile(__path + '/views/valor.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'RestApi',
            namaowner: 'Teddy',
            instagram: 'https://instagram/teddy_modz_oficial',
            youtube : 'https://youtube.com/@the_teddy_modz'
        }
    }
    res.json(config)
})

module.exports = router
