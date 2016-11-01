// getBreak, saveBreak and deleteBreak were modeled directly after the exapmle from the user_auth_itunes provided in class.

const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');

function getBreak(req, res, next) {
  getDB().then((db) => {
    db.collection('breaks')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if(toArrErr) return next(toArrErr);
        res.breaks = data;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

//Issue with saveBreak function, I'm able to save results to the db but not get them back to the page 
function saveBreak(req, res, next) {
  const insertObj = {};
  
  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj[key] = req.body[key];
    console.log(key, req.body[key])
  }

  // Adding userId to insertObj
  insertObj.userId = req.session.userId;

  getDB().then((db) => {
    db.collection('breaks')
      .insert(insertObj, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        console.log(res.saved);
        db.close();
        next();
      });
      return false;
  });
  return false;
}

// function deleteBreak(req, res, next) {
//   getDB().then((db) => {
//     db.collection('breaks')
//       .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
//         if (removeErr) return next(removeErr);
//         res.removed = result;
//         db.close();
//         next();
//       });
//       return false;
//   });
//   return false;
// }

module.exports = { getBreak, saveBreak };
  // , deleteBreak };

