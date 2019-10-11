var express = require('express');
var router = express.Router();

var profiles = require('../db/profiles');


/* GET users listing. */
router.get('/', function(req, res, next) {
    var id = req.param('id');
    console.log(id);

    if(id != null) {
        if(id >= 1 && id <= 10) {
            id -= 1;
            res.status(200).json({status: 'success', profile: profiles.profileList[id],});
        } else {
            res.status(404).json({status: 'error', message: 'Profile id needs to be between 1 & 10.'})
        }
    } else {
        res.status(404).json({status: 'error', message: 'No argument(s) given.'})
    }
});

router.get('/random', function (req, res, next) {
    res.status(200).json({status: 'success', profile: profiles.profileList[randomInt(0,9)],});
});

router.post('/', function (req, res, next) {
    res.status(200).json({status: 'error', message: 'Feature not yet implemented.'});
});

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

module.exports = router;