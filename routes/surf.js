const surfRouter          = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchReport }    = require('../services/report');
const { getBreak,
        saveBreak,
        deleteBreak }     = require('../models/favorites');

// get, post, delete functions modeled after Rafa's lab
surfRouter.get('/', authenticate, getBreak, searchReport, (req, res) => {
  res.render('surf/index', {
    user: res.user,
    breaks: res.breaks || [],
    report: res.report || [],
    saved: res.saved || [],
    //removed: res.removed || []
  });
});

surfRouter.post('/search', authenticate, getBreak, searchReport, saveBreak, (req,res) => {
  res.render('surf/search', {
    user: res.user,
    breaks: res.breaks || [],
    report: res.report.data || [],
    saved: res.saved || []
  });
});

surfRouter.delete('/breaks/:id', deleteBreak, (req, res) => {
  res.redirect('/surf');
});

surfRouter.get('/breaks', saveBreak, (req, res) => {
  res.redirect('/surf', {
    saved: res.saved || []
  });
});

module.exports = surfRouter;
