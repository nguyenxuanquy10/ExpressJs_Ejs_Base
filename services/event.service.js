const catchAsync = require('../utils/catchAsync');
const { eventModel } = require("./index")
const getEvents = catchAsync(async(req, res, next) => {
    return eventModel.find({});
})
const getEvent = catchAsync(async(req, res, next) => {
    return eventModel.findOne({ _id: req.body.id });
})
const createEvent = catchAsync(async(req, res, next) => {
    return eventModel.create(req.body)
})
const updateEvent = catchAsync(async(req, res, next) => {
    return eventModel.findByIdAndUpdate({ _id: id }, req.body);
})
const deleteEvent = catchAsync(async(req, res, next) => {
    return eventModel.deleteById({ _id: req.body.id });
})
module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}