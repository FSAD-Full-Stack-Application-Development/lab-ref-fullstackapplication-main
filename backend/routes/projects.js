var express = require('express');
var router = express.Router();

/* GET. */
router.get('/', function(req, res, next) {
    projects = [
        {id: 1, name: 'Water Mgmt'},
        {id: 2, name: 'CLeaning'}
    ]
    res.send(projects);
});

router.get('/testProject', function(req, res, next) {
    projects = [
        {id: 1, name: 'Water Mgmt'},
        {id: 2, name: 'CLeaning'}
    ]
    res.send(projects);
});

module.exports = router;
