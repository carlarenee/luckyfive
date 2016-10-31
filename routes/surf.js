const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchReport }     = require('../services/report');
const { getBreak,
        saveBreak,
        deleteBreak } = require('../models/favorites');

router.get('/', authenticate, getBreak, (req, res) => {
  res.render('surf/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || [],
    //report: res.report.data || []
  });
});

router.post('/search', authenticate, getBreak, searchReport, (req,res) => {
  res.render('surf/search', {
    user: res.user,
    results: res.results || [],
    breaks: res.breaks || [],
    report: res.report.data || []
  });
  //console.log(res.report.data.q);
});

// router.delete('/favorites/:id', deleteFavorites, (req, res) => {
//   res.redirect('/surf');
// });

router.post('/breaks', saveBreak, (req, res) => {
  res.redirect('/surf');
});

module.exports = router;
