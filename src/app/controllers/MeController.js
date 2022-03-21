const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/solarsystem
    storedSolarsystem(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-solarsystem', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
