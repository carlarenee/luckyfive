const surfRouter          = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchReport }    = require('../services/report');
const { getBreak,
        saveBreak,
        deleteBreak }     = require('../models/favorites');

surfRouter.get('/', authenticate, getBreak, searchReport, (req, res) => {
  res.render('surf/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || [],
    report: res.report || [],
    saved: res.saved || []
  });
});


surfRouter.post('/search', authenticate, getBreak, searchReport, (req,res) => {
  res.render('surf/search', {
    user: res.user,
    results: res.results || [],
    breaks: res.breaks || [],
    report: res.report.data || [],
    saved: res.saved || []
  });
});


// surfRouter.delete('/breaks/:id', deleteBreak, (req, res) => {
//   res.redirect('/surf');
// });


surfRouter.post('/breaks', saveBreak, (req, res) => {
  res.redirect('/surf', {
    saved: res.saved || []
    });
  });

module.exports = surfRouter;
