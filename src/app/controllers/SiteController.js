const Course = require('/Users/VanDuc/F8_Clone_Basic/src/resources/models/Course')
const { mutipleMongooseToObject } = require('/Users/VanDuc/F8_Clone_Basic/src/util/mongoose')

class SiteController {


    index(req, res, next) {
        
        Course.find({})
            .then(courses => {
                res.render('home', {
                courses : mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    search(req, res, next) {
        res.render('search')
    }


}

module.exports = new SiteController