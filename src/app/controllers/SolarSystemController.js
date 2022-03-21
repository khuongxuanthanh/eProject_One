const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class SolarSystemController {
    // [GET] /solarSystem
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('solarSystem', { 
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /solarSystem/:slug
    show(req, res, next) {
        // res.send('SYSTEM DETAIL-'+ req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('solarsystem/show', { 
                    course: mongooseToObject(course) 
                });
            })
            .catch(next);
    }

    // [GET] /solarSystem/create
    create(req, res, next) {
        res.render('solarsystem/create');
    }
    
    // [GET] /solarSystem/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('solarsystem/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next);
    }

    // [DELETE] /solarSystem/delete
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
        // [PUT] /solarSystem/:id
    update(req, res, next) {
        // res.render('solarsystem/create');
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/solarSystem'))
            .catch(next)
    }

    // [POST] /solarSystem/store
    store(req, res, next) {
        // const formData = req.body;
        // formData.image = 

        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/solarSystem/'))
            .catch(error => {

            });
    }
}

module.exports = new SolarSystemController();
