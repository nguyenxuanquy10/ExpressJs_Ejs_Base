const express = require('express')
const eventController = require("../controllers/event.controller");
const router = express.Router();


router
    .route("/events")
    .get(eventController.getEvents);
router
    .route("/event")
    .get(eventController.getEvent)
    .post(eventController.createEvent)
    .put(eventController.createEvent)
    .delete(eventController.deleteEvent)
module.exports = router;