/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

const moment = require('moment');
const Event = require('../../models/event');

const isEventExists = () => false;

exports.createEvent = async (req, res) => {
  const {
    influencerId, from, to, streamURL, platform, status, participants,
  } = req.body;

  console.log(influencerId + from + to + streamURL + platform + status + participants);


  if (!isEventExists()) {
    const event = new Event();

    event.influencerId = influencerId;
    event.from = moment().format(from);
    event.to = moment().format(to);
    event.streamURL = streamURL;
    event.platform = platform;
    event.status = status;
    event.participants = participants;
    await event.save();
    res.json({
      status: 'success',
      message: 'Event is created',
      eventInfo: event,
    });
  }
  res.json({
    status: 'Error',
    message: `Event isn't created`,
  });
};

exports.getAllEvents = (req, res) => {
  Event.find({}).exec((err, events) => {
    if (err) res.send(err);
    else {
      res.json({
        status: 'success',
        message: "Events Details retrieved successfully",
        data: events,
      });
    }
  });
};

exports.getMeetingsInTimeFrame = (req, res) => {
  res.json({
    status: 'Fail',
    message: 'Under Construction!',
  });
};

exports.getEventsByStatus = (req, res) => {
  Event.find({ status: req.params.status }).exec((err, events) => {
    if (err) res.send(err);
    else {
      res.json({
        status: 'success',
        message: "Events Details retrieved successfully",
        data: events,
      });
    }
  });
};

exports.getEventByEventID = (req, res) => {
  Event.find({ _id: req.params.eventId }).exec((err, events) => {
    if (err) res.send(err);
    else {
      res.json({
        status: 'success',
        message: "Events Details retrieved successfully",
        data: events,
      });
    }
  });
};

exports.getEventsByInfluencerID = (req, res) => {
  Event.find({ influencerId: req.params.influencerId }).exec((err, events) => {
    if (err) res.send(err);
    else {
      res.json({
        status: 'success',
        message: "Events Details retrieved successfully",
        data: events,
      });
    }
  });
};

exports.updateEventByEventID = (req, res) => {
  Event.findByIdAndUpdate({ _id: req.params.eventId },
    req.body,
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: 'success',
          message: "Events Details updated successfully",
          data: result,
        });
      }
    });
};

exports.deleteEventByEventID = (req, res) => {
  Event.findByIdAndDelete({ _id: req.params.eventId },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: 'success',
          message: "Events Details deleted successfully",
          data: result,
        });
      }
    });
};

exports.getParticipantsCountByEventID = (req, res) => {
  Event.find({ _id: req.params.eventId }).exec((err, event) => {
    const count = event[0].participants !== undefined ? event[0].participants.length : 0;
    if (err) res.send(err);
    else {
      res.json({
        status: 'success',
        message: "Event participants count retrieved successfully",
        data: count,
      });
    }
  });
};

exports.updateParticipantsByEventID = (req, res) => {
  Event.find({ _id: req.params.eventId }).exec((err, event) => {
    event[0].participants.push(req.body.participants);
    if (err) res.send(err);
    else {
      Event.findByIdAndUpdate({ _id: req.params.eventId },
        event[0],
        (err1, result) => {
          if (err1) {
            res.send(err1);
          } else {
            res.json({
              status: 'success',
              message: "Event Participant Details updated successfully",
              data: result,
            });
          }
        });
    }
  });
};
