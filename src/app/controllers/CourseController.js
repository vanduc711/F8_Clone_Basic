const Course = require('/Users/VanDuc/F8_Clone_Basic/src/resources/models/Course')
const { mongooseToObject } = require('/Users/VanDuc/F8_Clone_Basic/src/util/mongoose')

class CourseController {


    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/maxresdefault.jpg`
        const course = new Course(formData) 
        course.save()   
            .then(() => res.redirect('/'))
            .catch(error => {

            })
            
    }


}

module.exports = new CourseController