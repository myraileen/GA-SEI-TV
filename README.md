## TV Clicker  
![tv](https://res.cloudinary.com/myraileen/image/upload/v1583796279/giphydog_xfhscg.gif)
# Project Overview
This project delivers an app that was made using Create React App to satisfy requirements including:
* React Router usage
* 6 minimum components in readable file structure
* Usage of CSS grid or flex layouts
* appropriate functional and class component usage 
* deployed via Surge

## Project Description

This app will show details about a TV show to accomodate following user stories:
* as a tv viewer, I want to lookup TV show information.
* as a tv viewer, I want to discover more about the cast members for shows I lookup. 
* as a tv viewer, I want to give ratings to the shows I watch (post-MVP).

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
- Add routing pages to view information about seasons and episodes.

## Components
Based on the initial logic defined in the previous sections following is a breakdown of stateless/stateful components. 

| Component | Description | 
| --- | :---: |
| **App.js** | this component is the routing component. |
| **Home.js** | this component hosts all API calls with axios, takes form input form Search.js and passes props to ShowDetails.js and StarProfile.js |
| **Search.js** | this component allows user to interact with what shows to retrieve, passing props to Home.js |
| **ShowDetails.js** | this component displays api retured show details on the left and a list of the show's cast on the right by passing props to the StarList.js component. |
| **StarList.js** | child component to ShowDetails.js as mentioned in previous item. |
| **StarProfile.js** | this component displays api returned actor details on the left and a list of other shows featuring the actor by passing props to the ShowList.js component. |
| **ShowLis.js** | child component to the StarProfile.js as mentioned in previous item. |

  _Components not pursued with MVP:_
  * Episodes: component to view show seasons and episode details
  * Rater: component to enable users to rate movies

## Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | 10hrs| 6hrs | 6hrs |
| Working with API | H | 8hrs| 8hrs | 8hrs |
| Adding Components | H | 4hrs| 2hrs | 2hrs |
| Component Integration | H | 12hrs| 12+hrs | 12+hrs |
| Testing | H | 2hrs| 2hrs | 2hrs |
| Documentation | H | 1 hr | 1 hr | 1 hr |
| Quality Check | H | 1hrs| 1hrs | 1hrs |
| Deploy | H | 1hrs| .5hrs | .5hrs |
| Verify Deployment | H | .1hrs| .1hrs | .1hrs |

## Additional Libraries
 Supporting libraries and thier role in the project:
 * React for app development/build
 * [TMDb api](https://www.themoviedb.org/documentation/api)
 * Axios to retrieve data from API
 * Google fonts

## Issues and Resolutions
**ISSUE #1** Opened 2020-03-05: API documentation says session id's need to be created with an auth token... I've been testig the API in Postman... and not sure if I need session ID to fully use the API in my app.  
**RESOLUTION** (not an issue)  

**ISSUE #2** Opened 2020-03-05: I don't know how to protect my API key... it was covered as a class lab/lesson as bonus, but I didn't cover this topic.  
**RESOLUTION** (API key left exposed)  

**ISSUE #3** Opened 2020-03-09: The submit input in search component is not recognized on first click... a subsequent click is needed to pass the input value to the home component successfully.
**RESOLUTION** (moved the API call within the function so the string needed in the API call was available.)

