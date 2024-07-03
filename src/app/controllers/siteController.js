class siteController {
    
    // [GET] /
    async index(req, res, next) {
        try {      
            res.render('home',{      
                products: [
                    {
                        name: "Coffee Beans - Espresso Arabica and Robusta Beans",
                        brand:"Lavazza",                   
                        price: "$47.00",
                        score: "4.3",
                        url: "./img/product/item-1.png",
                        isLike: false,
                    },
                    {
                        name: "Lavazza Coffee Blends - Try the Italian Espresso",
                        brand:"Lavazza", 
                        price: "$53.00",
                        score: "3.4",
                        url: "./img/product/item-2.png",
                        isLike: true,
                    },
                    {
                        name: "Lavazza - Caffè Espresso Black Tin - Ground coffee",
                        brand:"Lavazza", 
                        price: "$99.99",
                        score: "5.0",
                        url: "./img/product/item-3.png",
                        isLike: false,
                    },
                    {
                        name: "Qualità Oro Mountain Grown - Espresso Coffee Beans",
                        brand:"Lavazza", 
                        price: "$38.65",
                        score: "4.4",
                        url: "./img/product/item-4.png",
                        isLike: false,
                    },
                    {
                        name: "Coffee Beans - Espresso Arabica and Robusta Beans",
                        brand:"Lavazza",                   
                        price: "$77.00",
                        score: "4.3",
                        url: "./img/product/item-5.png",
                        isLike: false,
                    },
                    {
                        name: "Lavazza Coffee Blends - Try the Italian Espresso",
                        brand:"Lavazza", 
                        price: "$53.00",
                        score: "3.4",
                        url: "./img/product/item-2.png",
                        isLike: false,
                    },
                    {
                        name: "Lavazza - Caffè Espresso Black Tin - Ground coffee",
                        brand:"Lavazza", 
                        price: "$99.99",
                        score: "5.0",
                        url: "./img/product/item-7.webp",
                        isLike: false,
                    },
                    {
                        name: "Qualità Oro Mountain Grown - Espresso Coffee Beans",
                        brand:"Lavazza", 
                        price: "$88.65",
                        score: "4.4",
                        url: "./img/product/item-8.png",
                        isLike: true,
                    },
                  ],         
            })
        } catch (err) {
            next;
        }
    }
}

export default new siteController();