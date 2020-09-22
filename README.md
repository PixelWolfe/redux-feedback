# ReduxFeedback

## Duration: 2 Day Sprint

  - ReduxFeedback was a project I undertook at Prime Digital Academy over a weekend. The goal being to take some rough idea of a feedback form provided and build a working rendition of it. 

#### Personal Goals

  - My main goals with this project was to solidify my understanding of redux and the usage of reducers with react, and experiment with some of the more advanced material-ui components like steppers. Other goals was the continued practice of the react-router-dom library.

### Screen Shots / Gifs

![ReduxFeedback](/documentation/ReduxFeedback.gif)

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Setup Instructions

1. Set up a database for the information.
  * Create a new database named `prime_feedback`.
  * Use `database.sql` to create tables in `prime_feedback`.
  
2. Let's run some commands.
   * Run `npm install`
   * Start postgres if not running already with `brew services start postgresql`
   * Run `npm run server`
   * Run `npm run client` this should open up a new browser tab for you :)
     * If no tab opens, navigate to `localhost:3000`

### Usage

A user will navigate through a short feedback form process rating their feelings on that particular day, understanding of the content, and support level for that day. Additionally they may leave comments with any these ratings, and have the option to provide additional comments for anything else they'd like us (whoever is providing this feedback service) to know.

A user may review all submitted comments and ratings before submitting feedback, additionally they fulfill another feedback form if there are multiple applicable individuals in one household.

### Built With / Technologies Used

  - PinDo was built using the following technologies:
      1. Node
      2. Express
      3. SQL
      4. PostgreSQL
      5. React
      6. Redux
  
  - Some of more noteable libraries used were:
      * axios
      * material-ui
      * react-router-dom

  - Styling libraries
      * material-ui/core
      * material-ui/icons

#### Future Goals

  * These are some of the things that didn't quite get done in this 2 day project.

  * Stepper styling
  * Edit functionality for final review page.
  
### Acknowledgement and Thanks

   - Many thanks to Prime Digital Academy.
   
   - One of my friends Paul Joachim in the Paxos Cohort at Prime. I love sharing my projects with you and I always leave our conversations wanting to make cooler and better things.

#### Support
  - If you have suggestions or issues, or are looking to get in touch, please email me at RobertEJohnson10@gmail.com.

