const router = require('express').Router();
const eventController = require('../controllers/event/eventController.js');
const cartController = require('../controllers/cart/cartController.js');
const orderController = require('../controllers/order/orderController.js');
const productController = require('../controllers/product/productController.js');

router.get('/', (req, res) => {
  res.json({
    status: 'API is Live',
    message: 'Welcome to Influencer Streaming Portal APIs!',
  });
});

router.route('/createEvent').post(eventController.createEvent);
router.route('/getEvents').get(eventController.getAllEvents);
router.route('/getEvents/Timeframe/:from/:to').get(eventController.getMeetingsInTimeFrame);
router.route('/getEvents/status/:status').get(eventController.getEventsByStatus);
router.route('/getEvents/EventId/:eventId').get(eventController.getEventByEventID);
router.route('/getEvents/InfluencerId/:influencerId').get(eventController.getEventsByInfluencerID);
router.route('/updateEvent/:eventId').patch(eventController.updateEventByEventID);
router.route('/deleteEvent/:eventId').delete(eventController.deleteEventByEventID);
router.route('/events/participants/count/:eventId').get(eventController.getParticipantsCountByEventID);
router.route('/events/participants/update/:eventId').patch(eventController.updateParticipantsByEventID);

//for cart by Aditya

router.route('/addToCart').post(cartController.addToCart);
router.route('/remomveItem').post(cartController.remomveItem);
router.route('/showCart/:userID').get(cartController.showCart);
router.route('/updateItem').post(cartController.updateItem);

//for order History after payment  by Aditya

router.route('/addOrder').post(orderController.addOrder);
router.route('/showOrder/:userID').get(orderController.showOrder);

//for product by Aditya

router.route('/getAllProducts').get(productController.getAllProducts);
router.route('/getProduct/:id').get(productController.getProdctByid);

module.exports = router;
