 ![panda](https://res.cloudinary.com/myraileen/image/upload/v1583368547/panda_p2ihut.gif)

# Project Overview
This project delivers an app using React. 

## Project Description

This app will show details about a TV show:
* as a tv viewer, I want to find out about a show's seasons and episodes.
* as a tv viewer, I want to find out about cast members on shows I watch. 
* as a tv viewer, I want to give ratings to the shows I watch.

## Project Links

- [Repository](https://github.com/myraileen/GA-SEI-TV)
- [Deployment]()

## Wireframes

- Wireframe
  ![Wireframes](https://res.cloudinary.com/myraileen/image/upload/v1583418937/20200305_083257_resized_vbarco.jpg)
- React architecture  
  ![react architecture](https://res.cloudinary.com/myraileen/image/upload/v1583386664/20200304_233648_resized_soteyw.jpg)

#### MVP
- Consume data from [TMDb api](https://www.themoviedb.org/documentation/api)
- Render TV Show, cast and episode data in the app
- Allow user to interact with app content to see more details about a show, actor or episode.

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage and enable user to rate or 'favorite' shows and actors.

## Components
Based on the initial logic defined in the previous sections following is a breakdown of stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home | This will render the header and include breadcrumbs | 
| Search | This will take user's input to return a list of shows (by show name, actor, genre or year?) | 
| > Star List | This will display a list of actors (by search criteria) | 
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
| Adding Components | H | 4hrs| hrs | hrs |
| Component Integration | H | 20hrs| hrs | hrs |
| Testing | H | 2hrs| hrs | hrs |
| Quality Check | H | 2hrs| hrs | hrs |
| Deploy | H | 1hrs| hrs | hrs |
| Verify Deployment | H | 1hrs| hrs | hrs |
| Total | H | hrs| hrs | hrs |

## Additional Libraries
 Supporting libraries and thier role in the project:
 * React
 * [TMDb api](https://www.themoviedb.org/documentation/api)
 * Axios

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
**ISSUE #1** Opened 2020-03-05: API documentation says session id's need to be created with an auth token... I've been testig the API in Postman... and not sure if I need session ID to fully use the API in my app.  
**RESOLUTION** (open item - need to test api in react app once created)  

**ISSUE #2** Opened 2020-03-05: I don't know how to protect my API key... it was covered as a class lab/lesson as bonus, but I didn't cover this topic.  
**RESOLUTION** (open item - need to find the guidance for how to protect api key instead of having it stored in the source code.)  

