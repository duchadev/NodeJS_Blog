const express = require('express');
const app = express();
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.use('/hoc-lap-trinh', newsController.show);
router.use('/hoc-nodejs', newsController.show1);

router.use('/', newsController.index);

module.exports = router;
