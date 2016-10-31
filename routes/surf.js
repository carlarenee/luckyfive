const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
//const { searchMusic }     = require('../services/itunes');
const { searchReport}     = require('../services/itunes');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

router.get('/', authenticate, getFavorites, searchReport, (req, res) => {
  res.render('music/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || [],
    report: res.report.data.weather || []
  });
  //console.log(res.report.data.weather);
});

router.post('/search', authenticate, getFavorites, searchReport, (req,res) => {
  res.render('music/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || [],
    report: res.report || []
  });
});

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/music');
});

router.post('/favorites', saveFavorite, (req, res) => {
  res.redirect('/music');
});

module.exports = router;
