var express = require('express');
var router = express.Router();

var version = '1.0.2';

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json({status: 'success', version: version});
});

router.post('/', function (req, res, next) {
    if(req.param('version') !== "") {
        version = req.param('version');
        res.status(200).json({status: 'success', version: version});
    } else {
        res.status(200).json({status: 'error', error: 'Empty version parameter not allowed!', version: version});
    }
});

module.exports = router;