
module.exports = function(router){
    var headerController = require('../controllers/duyettin.controller');

    router.put('/duyettin_xoa/', headerController.duyettin_xoa);
    router.put('/duyettin_duyet/:id', headerController.duyettin_duyet);
    router.get('/duyettin/list_status', headerController.list_tin);

    router.put('/duyetchude_xoa/', headerController.duyetchude_xoa);
    router.put('/duyetchude_duyet/:id', headerController.duyetchude_duyet);
    router.get('/duyetchude/list_status', headerController.list_chude);

    router.get('/chinhsuatin/:id', headerController.chinhsuatin_id);
    router.get('/suatin/:id', headerController.suatin);
    router.put('/chinhsuatin', headerController.chinhsuatin);
    router.get('/chudecuatoi/:id', headerController.chudecuatoi_id);
    

};