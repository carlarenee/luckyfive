const surfRouter              = require('express').Router();
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
    report: res.report || []
  });


surfRouter.post('/search', authenticate, getBreak, searchReport, (req,res) => {
  res.render('surf/search', {
    user: res.user,
    results: res.results || [],
    breaks: res.breaks || [],
    report: res.report.data || []
  });
  
});
});

// router.delete('/favorites/:id', deleteFavorites, (req, res) => {
//   res.redirect('/surf');
// });

surfRouter.post('/breaks', saveBreak, (req, res) => {
  res.redirect('/surf');
});

module.exports = surfRouter;


// <div id="savedBreak">
//           <h3>Saved Break</h3>
//             <div class="saved">
//                 <p>Location: <%= report.request[0].query %></p>
//                 <p>Weather: <%= report.weather[0].hourly[0].weatherDesc[0].value %></p>
//                 <p>High Temp: <%= report.weather[0].maxtempF %> *F</p>
//                 <p>Low Temp: <%= report.weather[0].mintempF %> *F</p>
//                 <p>Wave Height: <%= report.weather[0].hourly[0].swellHeight_ft %> Feet</p>
//                 <p>Swell Direction: <%= report.weather[0].hourly[0].swellDir %> Degrees</p>
//                 <p>Swell Period: <%= report.weather[0].hourly[0].swellPeriod_secs %> Seconds</p>
//                 <p>Water Temp: <%= report.weather[0].hourly[0].waterTemp_F %> *F</p>
//             <form action="/surf/breaks/<%= saved._id %>?_method=DELETE" method="post">
//               <input type="submit" value="Remove Break">
//             </form>
//           </div>
//         </div>

//   <div id="breaksContainer">
//     <div class="breakInfo">
//       <h3>Break Info</h3>
//       <p>Location: <%= report.request[0].query %></p>
//       <p>Weather: <%= report.weather[0].hourly[0].weatherDesc[0].value %></p>
//       <p>High Temp: <%= report.weather[0].maxtempF %> *F</p>
//       <p>Low Temp: <%= report.weather[0].mintempF %> *F</p>
//       <p>Wave Height: <%= report.weather[0].hourly[0].swellHeight_ft %> Feet</p>
//       <p>Swell Direction: <%= report.weather[0].hourly[0].swellDir %> Degrees</p>
//       <p>Swell Period: <%= report.weather[0].hourly[0].swellPeriod_secs %> Seconds</p>
//       <p>Water Temp: <%= report.weather[0].hourly[0].waterTemp_F %> *F</p>
//         <form action="/surf/breaks" method="POST">
//           <input type="hidden" name="" value="break[location]" value="<%= report.request[0].query %>">
//           <input type="hidden" name="" value="break[weather]" value="<%= report.weather[0].hourly[0].weatherDesc[0].value %>">
//           <input type="hidden" name="" value="break[waterTempF]" value="<%= report.weather[0].hourly[0].waterTemp_F %>">
//           <input type="submit" value="Save Break">
//         </form>
//     </div>  
//   </div>