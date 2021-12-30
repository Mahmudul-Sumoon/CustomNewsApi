const express = require('express');
const { getNews } = require('../controllers/news_controller');
const router =  express.Router();

router.get("/", getNews);

module.exports = router;