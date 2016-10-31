const fetch       = require('node-fetch');
const api_key     = process.env.KEY;
const API_URL     = 'http://api.worldweatheronline.com/premium/v1/marine.ashx?'

function searchReport(req, res, next) {
  fetch(`${API_URL}key=${api_key}&q=miami&tide=yes&num_of_days=5&format=json`)
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