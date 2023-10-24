
class NewsController {


    index(req, res, next) {
        res.render('news')
    }

    show(req, res, next) {
        res.send('News Details')
    }


}

module.exports = new NewsController