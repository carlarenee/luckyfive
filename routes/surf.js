const surfRouter          = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchReport }    = require('../services/report');
const { getBreak,
        saveBreak,
        deleteBreak }     = require('../models/favorites');

// get, post, delete functions modeled after Rafa's lab
surfRouter.get('/', authenticate, (req, res) => {
  res.render('surf/index', {
    user: res.user,
    breaks: res.breaks || [],
    report: res.report || [],
    //removed: res.removed || []
  });
});

surfRouter.post('/search', authenticate, getBreak, searchReport, (req,res) => {
  res.render('surf/search', {
    user: res.user,
    breaks: res.breaks || [],
    report: res.report.data || [],
  });
  // res.json(res.breaks)
});

surfRouter.post('/save', authenticate, saveBreak, searchReport, (req,res) => {
  res.render('surf/search', {
    user: res.user,
    saved: res.saved || [],
    report: res.report.data || [],
  });
  // res.json(res.breaks)
});

surfRouter.get('/save',  (req,res) => {
  res.render('surf/results', {
    user: res.user,
    saved: res.saved || [],
  });
});

// surfRouter.delete('/breaks/:id', deleteBreak, (req, res) => {
//   res.redirect('/surf');
// });

// surfRouter.get('/breaks', saveBreak, getBreak, (req, res) => {
//   res.redirect('/surf', {
//     saved: res.saved || [],
//     breaks: res.breaks || []
//   });
// });

module.exports = surfRouter;
