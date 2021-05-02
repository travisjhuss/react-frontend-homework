# Rocketmiles - React Technical Assessment - Travis Huss

This is my submission for the React Technical Assessment with Rocketmiles. This was a great exercise and one I used to push myself more into TDD. From talking to Kirk in the initial interview, I could tell that testing is a huge component of development at Rocket. I wanted to be sure to approach this with a test-first mindset.

I wrote my todo list and after I got the app running with Docker, I made a console log of the hotels variable in app.js to see how the data was structured. I made a file to use as test data based on that. I then looked at the hotel-result.spec.js to get a sense of how Rocket might structure a test. With that example I created the sort-results test with several test outcomes based on the different things I wanted the sort function to handle. 

I next wrote the sort function. As a default I have it ordered by hotel rating to represent "Recommendations". I then imported it into the test file and ran it. After tweaking a few things I was able to get it passing the tests. The test itself bothered me though because I know it can be written dryer. Especially in regards to the expectation the function returns. I wanted to be sure the array was sorted in the right order and that it was checking that. I spent some time researching and tweaking things to some success but never as certain as I wanted the test to be. Given more time I would continue to dig into this. 

From there I went into app.js and broke it down into two new components, Filters and HotelList. I imported the sort function into Filters as I wanted that component to handle the logic and send the results to HotelList as a prop. Upon setting up the sortResultsService, it worked like magic and the rewards of TDD were felt. 

I followed the same pattern with writing the filter function and imported that into Filters. I ordered the filter to run first to narrow the results from the server, then sorted and displayed. Again, thanks to TDD, magic upon connection. At this point I added functionality to the reset button to put the states used to their defaults so all the hotels would be displayed again. I then put a message to the user with conditional rendering to address if there are no results based on their filter. This message is also displayed if nothing is returned from the server.

To wrap up I spent some time styling. I didn't want to over do anything and focused on a more modern approach while also highlighting data I felt would be important to the user. I brought in a font that fit the bill and focused on two colors. The orange taken from Rocketmiles website and Yves Klein Blue, a personal favorite that I thought complemented the orange. I put the hotel rating and the miles earned in chips so the viewer would be drawn to those numbers, both seemingly important in making a decision. I made the price bigger and a different color as ultimately it seems likely the biggest factor. I added a slight orange hue to the background to give that info some more pop. Not all the picture urls were working and the white space was killing me. I added a lighter blue to the background to give the hotel cards a more complete look. Given more time I would render a "no photo" image of some kind. Lastly I changed the background color to white and increased the opacity of the cards to give everything a touch more contrast. 

I am grateful for this opportunity as I got a lot out of this exercise and look forward to continuing to explore these topics. 

## Instructions: 
See also: instructions.pdf

## Development Frontend server

Run `npm start` for a dev server. Navigate to `http://localhost:1234`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).


## Development Backend API server

We've packaged a very simple backend for you in docker to serve up the API for your development. You can find it in [backend-server](./backend-server).

Requires:
Java 11

#### To Run backend API using gradle
```bash
./gradlew clean bootRun
```

####  To Run backend API using Docker
- Install [docker](https://docs.docker.com/docker-for-mac/install/)
- `./boot`

#### Instructions: 
Checkout instructions.pdf