import siteRouter from './site.js';// Đảm bảo đường dẫn chính xác


function route(app) {

    app.use('/', siteRouter);
  
}

// module.exports = route;
export default route;