class NewsController
{
    //[GET] /news
    index(req,res)
    {
        res.render('home')
    }
    // show detail
    show(req,res)
    {
        res.send('News detail!')
    }
    show1(req,res)
    {
        res.send('Hoc nodejs!!!')
    }
}
module.exports = new NewsController;