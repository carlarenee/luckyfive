const fetch       = require('node-fetch');
const api_key     = process.env.KEY;
const API_URL     = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?';

function searchReport(req, res, next) {
  const q = 
  fetch(`${API_URL}key=${api_key}&q=${req.body.q}&num_of_days=1&format=json`)
  .then(r => r.json())
  .then((report) => {
    res.report = report;
    next();
  })
  .catch((err) => {
    res.err = err;
    next(err);
  })
}

module.exports = { searchReport };

//${req.body.cityName}
//${req.body.zipCode}
//48.83,2.39
//40.58,73.81
//40.5867,73.8115
//32.7157,117.1611
