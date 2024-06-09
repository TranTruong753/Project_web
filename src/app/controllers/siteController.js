class siteController {
    
    // [GET] /
    async index(req, res, next) {
        try {      
            res.render('home',{               
            })
        } catch (err) {
            next;
        }
    }
}

export default new siteController();