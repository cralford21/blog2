var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.passport.user);
    res.render('index', { title: "Colin's Blog"});
});

module.exports = router;
