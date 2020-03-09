![tv](https://res.cloudinary.com/myraileen/image/upload/v1583796279/giphydog_xfhscg.gif)
# Project Overview
This project delivers an app that was made using React.  

## Project Description

This app will show details about a TV show:
* as a tv viewer, I want to find out about a show's seasons and episodes.
* as a tv viewer, I want to find out about cast members on shows I watch. 
* as a tv viewer, I want to give ratings to the shows I watch.

## Project Links

- [Repository](https://github.com/myraileen/GA-SEI-TV)
- [Deployment](http://ad-pencil.surge.sh)

## Wireframes

- Wireframe  
  ![Wireframes](https://res.cloudinary.com/myraileen/image/upload/v1583418937/20200305_083257_resized_vbarco.jpg)
- React architecture  
  ![react architecture](https://res.cloudinary.com/myraileen/image/upload/v1583386664/20200304_233648_resized_soteyw.jpg)

#### MVP
- Consume data from [TMDb api](https://www.themoviedb.org/documentation/api)
- Get list of TV shows and show cast members 
- Allow user to interact with app content to see more details about a show, actor (or episode).

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage and enable user to rate or 'favorite' shows and actors.

## Components
Based on the initial logic defined in the previous sections following is a breakdown of stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home | This will render the header and include breadcrumbs | 
| Search | This will take user's input to return a list of shows (by show or name... or selection from most popular) | 
| > Show List | This will display a list of shows (by search criteria)  | 
| >> Profile | This will return a star's profile | 
| >> Show Details | This will return show overview (with cast... that can be linked to the profile) | 
| >>> _Episodes_ | This will display a list of show episodes (by picked show) | 
| _Rater_ | This will save user's personal rating of the show using local storage (Post MVP) | 

_Hold Episodes and Rater components for a 'Gold' version_


## Time Frames
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | 10hrs| 6hrs | 6hrs |
| Working with API | H | 10hrs| 8hrs | 8hrs |
| Adding Components | H | 4hrs| 2hrs | 2hrs |
| Component Integration | H | 20hrs| 20+hrs | 20+hrs |
| Testing | H | 2hrs| 2hrs | 2hrs |
| Quality Check | H | 1hrs| 1hrs | 1hrs |
| Deploy | H | 1hrs| .5hrs | .5hrs |
| Verify Deployment | H | .1hrs| .1hrs | .1hrs |
| Total | H | hrs| hrs | hrs |

## Additional Libraries
 Supporting libraries and thier role in the project:
 * React for app development/build
 * [TMDb api](https://www.themoviedb.org/documentation/api)
 * Axios to retrieve data from API

## Issues and Resolutions
**ISSUE #1** Opened 2020-03-05: API documentation says session id's need to be created with an auth token... I've been testig the API in Postman... and not sure if I need session ID to fully use the API in my app.  
**RESOLUTION** (not an issue)  

**ISSUE #2** Opened 2020-03-05: I don't know how to protect my API key... it was covered as a class lab/lesson as bonus, but I didn't cover this topic.  
**RESOLUTION** (API key left exposed)  

