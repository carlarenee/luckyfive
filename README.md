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

**Blockers**
The repo is named 'luckyfive' because it is the 5th version of project 2. The first 2 projects were scrapped because of API request issues. When SurfBuddy was decided on, I was using two open API's from New York Open Data that listed beaches and pools; the idea to offer simmers/surfers options for water time. The data was successfully retrieved, however, not very useful: aside from name and address there were no other interesting bits of data that could be used to search. In the end, I landed on World Weather Online, but not until a few days before the deadline of turning in. 

Another hurdle was a problem with Eslinter: I've had instructors help several times in reinstalling, however, with each new project, it disappears again.

Another hurdle was an unexpected download of thousands of package.json files. Unsure of where they came from, I foolishly moved them to the trash. I realized too late that it had broken my server. I troubleshot and tried to reinstall my dependencies for half a day to no avail and resorted to starting from scratch.

**Going Forward**
The project is only 70% complete to date. I intend to resolve my Post, Put and Delete functions as well as add in more functionality for the user: offer pool alternatives as well as land based training. I also would like to import an API that helps users find the lat and lon coordinates of their location.

(https://cloud.githubusercontent.com/assets/22150880/19889252/4257002e-a00a-11e6-904f-b95f114cd99e.png)




