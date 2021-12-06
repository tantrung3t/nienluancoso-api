
module.exports = function(router){
    var headerController = require('../controllers/header.controller');

    router.get('/header/khoahoc/list', headerController.list_khoahoc);
    router.get('/header/quansu/list', headerController.list_quansu);
    router.get('/header/thethao/list', headerController.list_thethao);
    router.get('/header/giaitri/list', headerController.list_giaitri);
    router.get('/header/congnghe/list', headerController.list_congnghe);

    router.post('/header/add', headerController.add_chude);
    router.post('/tintuc/add', headerController.add_tintuc);

    router.delete('/header/delete/:id', headerController.remove_chude)

    router.put('/header/update', headerController.update_chude);

    router.post('/login', headerController.login);
    router.post('/signin', headerController.signin);
    router.get('/taikhoan/list', headerController.taikhoan)
    router.put('/taikhoan/duyet', headerController.duyettaikhoan)


    router.put('/duyettin_xoa/:id', headerController.duyettin_xoa);
    router.put('/duyettin_duyet/:id', headerController.duyettin_duyet);
    router.get('/home/list_status', headerController.list_status);


};