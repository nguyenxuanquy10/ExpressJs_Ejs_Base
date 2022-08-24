const { eventService } = require('../services');
const getEvents = async(req, res, next) => {
    const events = await eventModel.find({});
    if (!events) {
        return res.status(404).json({ message: "Not found" })
    }
    return res.status(200).json({ events: events })
}
const getEvent = async(req, res, next) => {
    const event = await eventModel.findOne({ _id: req.body.id });
    if (!event) {
        return res.status(404).json({ message: "Not found" })
    }
    return res.status(200).json({ events: event })
}
const createEvent = async(req, res, next) => {
    const newEvent = await eventModel.create(req.body);
    if (!newEvent) {
        return res.status(404).json({ message: "Not found" })
    }
    return res.status(200).json({ events: newEvent })
}
const updateEvent = async(req, res, next) => {
    const updateEvent = await eventModel.findByIdAndUpdate({ _id: id }, req.body);
    if (!updateEvent) {
        return res.status(404).json({ message: "Not found" })
    }
    return res.status(200).json({ events: updateEvent })
}
const deleteEvent = async(req, res, next) => {
    const deleteEvent = await eventModel.deleteById({ _id: req.body.id });
    if (!deleteEvent) {
        return res.status(404).json({ message: "Not found" })
    }
    return res.status(200).json({ events: deleteEvent })
}
module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}