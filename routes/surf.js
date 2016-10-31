const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchReport}     = require('../services/report');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

router.get('/', authenticate, getFavorites, searchReport, (req, res) => {
  res.render('surf/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || [],
    report: res.report.data || []
  });
  console.log(res.report.data.weather[0].hourly[0].weatherDesc);
});

router.post('/search', authenticate, getFavorites, searchReport, (req,res) => {
  res.render('surf/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || [],
    report: res.report || []
  });
});

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/surf');
});

router.post('/favorites', saveFavorite, (req, res) => {
  res.redirect('/surf');
});

module.exports = router;
