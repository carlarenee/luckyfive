# luckyfive

**SurfBuddy: A training companion for the landlocked surfer**

**User Story**
Sergio likes to surf. He is originally from Costa Rica and is used to dipping in the ocean everyday. Sergio moved to NYC and discovered that there aren't as many options for ocean dipping or surfing. He downloaded surfbuddy so that he can input any coordinates of where he is to learn the tide, air and water temperature as well as swell direction and height. He can save certain breaks to his profile to quickly check the surf report when he logs in.

**Synopsis**
 SurfBuddy is an app for surfers that allows them to search not just by beach break, as is the limitation with many surf report webistes, but allows users to input specific coordinates. 

**Code Example**

      `<p>Location: <%= report.request[0].query %></p>
      <p>Weather: <%= report.weather[0].hourly[0].weatherDesc[0].value %></p>
      <p>High Temp: <%= report.weather[0].maxtempF %> *F</p>
      <p>Low Temp: <%= report.weather[0].mintempF %> *F</p>
      <p>Wave Height: <%= report.weather[0].hourly[0].swellHeight_ft %> Feet</p>
      <p>Swell Direction: <%= report.weather[0].hourly[0].swellDir %> Degrees</p>
      <p>Swell Period: <%= report.weather[0].hourly[0].swellPeriod_secs %> Seconds</p>
      <p>Water Temp: <%= report.weather[0].hourly[0].waterTemp_F %> *F</p>`

**Motivation**
As a water sports enthusiast, I feel a need for better resources in NYC for surfers and water people alike to get information and training aids to stay in good surfing shape all year. SurfBuddy lets users check their most accessible breaks for up to the hour conditions. 

**API Reference**
World Weather Online: https://developer.worldweatheronline.com/

**Attribution**
Biggest resources for this project were the labs and template provided by the teachers of General Assembly. I also refereced gitHub user: michaelben for help in decrypting the API: https://github.com/WorldWeatherOnline/nodejswwo/blob/master/app.js

