var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vehicle_controller = require('../controllers/vehicle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/vehicle', vehicle_controller.vehicle_create_post);
// DELETE request to delete Costume.
router.delete('/vehicle/:id', vehicle_controller.vehicle_delete);
// PUT request to update Costume.
router.put('/vehicle/:id', vehicle_controller.vehicle_update_put);
// GET request for one Costume.
router.get('/vehicle/:id', vehicle_controller.vehicle_detail);
// GET request for list of all Costume items.
router.get('/vehicle', vehicle_controller.vehicle_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"vehicle", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
