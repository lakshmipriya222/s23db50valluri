var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();
/* GET costumes */
router.get('/', vehicle_controlers.vehicle_view_all_Page );
/* GET detail costume page */
router.get('/detail', vehicle_controlers.vehicle_view_one_Page);

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
    
/* GET create costume page */
router.get('/create', secured,vehicle_controlers.vehicle_create_Page)

/* GET create update page */
router.get('/update', secured,vehicle_controlers.vehicle_update_Page);
/* GET delete costume page */
router.get('/delete', secured,vehicle_controlers.vehicle_delete_Page);

module.exports = router;

