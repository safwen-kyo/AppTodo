const express= require('express');
const SearchController = require('../controllers/searchController');

const router = express.Router();

router.get('/search', SearchController.searchTasks);

module.exports=router;
