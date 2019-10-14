const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controller/SessionController');
const SpotController = require('./controller/SpotController');
const DashboardController = require('./controller/DashboardController');
const BookingController = require('./controller/BookingController');
const ApprovalController = require('./controller/ApprovalController');
const RejectionController = require('./controller/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);
routes.post('/bookings/:booking_id/approval', ApprovalController.store);
routes.post('/bookings/:booking_id/rejection', RejectionController.store);

module.exports = routes;