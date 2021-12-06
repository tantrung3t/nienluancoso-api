
module.exports = function(router){
    var bookController = require('../controllers/book.controller');

    router.get('/home/list', bookController.list);

    router.get('/home/detail/:id', bookController.detail);

    router.get('/home/khoahoc', bookController.khoahoc);
    router.get('/home/quansu', bookController.quansu);
    router.get('/home/thethao', bookController.thethao);
    router.get('/home/giaitri', bookController.giaitri);
    router.get('/home/congnghe', bookController.congnghe);



    router.get('/home/quansu/trongnuoc', bookController.quansutrongnuoc);
    router.get('/home/quansu/quocte', bookController.quansuquocte);

    router.get('/tintuc/:id', bookController.getByMa);



};