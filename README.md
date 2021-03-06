# Quizlette
How well do you know science and nature?

Take the quiz and find out!
A small web quiz to test your knowledge of science and nature, just for fun.

Thank you for visiting my project, if you have any questions or feedback please head over to my Github contacts and get in touch.

---
## Table of contents 

* [UX](#ux)
    * [Site Owners Goals](#site-owners-goals)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
    * [Design Choices](#design-choices)
* [Wireframes](#wireframes)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to be implemented](#features-to-be-implemented)
* [Technologies used](#technologies-used)
* [Testing](#testing)
* [Bugs](#bugs)
* [Deployment](#deployment)
* [Credits](#credits)


---

## UX

### Site Owner Goals
* A small easy to use quiz that will test users knowledge of science and nature.
* To be engaging to users and will encourage them to come back again to see if they have improved.
* The site is easy to navigate and simple to use.
* The site is aesthetically pleasing.

[Back to Top](#table-of-contents)

### User Goals
* To have a fun experience learning new facts.
* To test their knowledge of science and nature.

### User Stories

* As a user, I want to be able to easily navigate the site.
* As a user, I want to be able to see my score.
* As a user I expect the different game pages to have a cohesive design and layout.



[Back to Top](#table-of-contents)

### User Requirements and Expectations
#### Requirements
  * Easy to navigate, intuitive design
  * Visually appealing home page and game play
  * Keep the score of the player

#### Expectations
  * Questions are appropriate to the topics
  * Show user if the answer is right or not
  * Shows a running score of the users correct answers
  * Shows final Result
  * Shows a congratulatory message at the end of the game

[Back to Top](#table-of-contents)

---

### Design Choices
* Overview

   I wanted to keep the design clean and simple for the user to focus on the game.
   Unltimately I had to choose a different background image as the original was too busy and made it difficult for the user to read questions and navigate the game.

* Fonts

   I used [Google Fonts](https://fonts.google.com/ "Google Fonts") to select the fonts used on the site.
   The fonts I chose were [KoHo](https://fonts.google.com/specimen/KoHo?query=koho "KoHo") for the main text to be used on the site and [Rock Salt](https://fonts.google.com/specimen/Rock+Salt?query=Rock+Salt "Rock Salt") for the text on the welcome page as it
   has a softer feel and is more visually welcoming.
   
* Icons

   I used icons from the [Font Awesome library](https://fontawesome.com/ "Font Awesome") 
   
* Colours
   I used [Coolors](https://coolors.co/ "Coolors") to find the color palette for the site, I decided to go for a range of blues and greys as this is a
   subtle theme and will not be distracting to the user as they take the quiz.

![Color Palette](wireframes/QuizlettePalette.png)

  * #274C77- is a dark blue and will be used for the buttons
  * #6096BA- is a sea blue, this will be the main background color
  * #A3CEF1- is a cloud blue this will be used for borders and highlighting
  * #8B8C89- is a dove grey this will be used at the main text color as it contrasts well with the blue colors

A new text color of #5f788d was chosen to replace the initial dove grey as on testing it was found not to be as easy to read as hoped so a new color was selected for better contrast and readability for user.


[Back to Top](#table-of-contents)

### Wireframes

   I decided to use [Balamiq Wireframes](https://balsamiq.com/) to create my wireframes, 

   Wireframes can be view on the following links:

[Desktop Home Screen](wireframes/QuizletteDesktopHome.png)

[Desktop Game Screen](wireframes/QuizletteDesktopGame.png)

[Tablet Home Screen](wireframes/QuizletteTabletHome.png)

[Tablet Game Screen](wireframe/QuizletteTabletGame.png)

[Mobile Home Screen](wireframes/QuizletteMobileHome.png)

[Mobile Game Screen](wireframe/QuizletteMobileGame.png)

[Back to Top](#table-of-contents)

In my initial design I was planning to keep the background as one solid color so as not to detract from the game play but when running the game it was not visually appealing
as such I then chose to use an image as the background but this was too busy and made reading the text difficult so I finally chose an illustrated wallpaper design as the colors were more 
subtle and added the interest but the game was still easily playable for the user.

---

### Features 

* Use of [Open Trivia API](https://opentdb.com/ "Open Trivia")
* Validation of answers
* Ability to see score
* Results screen with message at end of game

#### Features to be implemented

* More topics to be added- to make game more specific, eg. mammals, birds, reptiles, etc.
* Ability to record high score to compete against
* The choice of difficulty of questions
* The ability to share your score on social media

[Back to Top](#table-of-contents)

---

### Technologies used
#### Languages

* HTML
* CSS
* Javascript


#### Libraries & Frameworks
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)
* [Boot Strap](https://getbootstrap.com/)
* [Coolors](https://coolors.co/)
* [jQuery](https://jquery.com)

#### Technologies

* Git
* [GitPod] (https://github.com/)
* Balsamiq
* W3C HTML Validation Service
* W3C CSS Validation Service

[Back to Top](#table-of-contents)

---

### Testing

HTML, CSS and Javascript passed validation tests.

#### As a user, I want to be able to easily navigate the site.

  * Plan
  
    The plan was that by using JS the screens would move between the home view, the level choice, and the game screen.
  
  * Implementation
   
    The screen movement function turned out tricker to get working than expected, partly due to the home button for moving back to the home screen 
    at various point during the game used a class element rather than an ID as such it required an additional step of being turned into an array for the function to fire at 
    all stages rather than just the level page.
     
  * Test
  
    On initial testing the move screen function worked for all screens but only for the move back to the home screen from the level-screen, additional steps were added to the JS function 
    to allow the home button to work at all stages of the game. 

  * Result

    After testing again the function now fully works allowing the user to navigate smoothly through the game.
    
  * Verdict
    
    The move Screen function now works as expected and the user can navigate the game with ease.

#### As a user I expect the different game pages to have a cohesive design and layout.

  * Plan

The plan was to give all the pages the same background and layout so that the game felt joined up and smooth.

  * Implementation
Whilst writing the HTML for the quiz I tried to replicate the placement and layout of the elements with in each section so that buttons were in the same place on each screen.
For example the 'Home' button which appears in multiple places is always at the bottom of the screen. The color scheme is the same through out the game as well as the background image remaining the same to keep the feel of the game uniform.

  * Test

The different screens within the quiz all have a similar design and feel so the quiz works nicely as it moves through the play stages.

  * Result
![Home screen](assets/images/screenshots/homeScreen.png)
![How screen](assets/images/screenshots/howScreen.png)

  * Verdict

As you can see from the screen shots above the design flows through the quiz keeping the asthetic going through out the game.
I am happy with the design flow for this quiz.

#### As a user, I want to be able to see my score.

  * Plan
To write a JS function that would increment the users score as hey were playing and then to 
pass that score to the end screen where the user will receieve a tailored message depending upon their score.

  * Implementation

The score function to implement the score was added but I struggled to pass the score information to the end screen
after some research and a little trial and error as score was a class and it needed to be altered to an id for the 
information to show in two separate locations.

  * Test

To test this function I played through the game to see that the score was showing and updating as I played 
as well as showing on the end screen.

  * Results

The results screen can be seen in the below image showing the end score and a message for the player.

![Score screen showing results](assets/images/screenshots/scoreScreen.png)
   
  * Verdict

The game score incriments as the user plays and passes to the end screen working as expected as you can see in the above screenshot.

#### To test their knowledge of science and nature.

  * Plan

To use and API to provide the user with questions relating to science and nature to test their knowledge.

  * Implementation

The API was access via JS and the information converted and formatted to be playable in the game, providing 5 questions with m shuffled answers for the user to select from.
Initially I had some issues with the question being pulled through but no answers as such I had to work on my code for the answers to pull through this was due to my not linking the elements correctly.
I also had initially set the text to show InnerText rather than InnerHTML which ment that some of the symbols were having trouble showing correctly this has also been corrected. 

  * Test

This was tested by playing the game multiple times to ensure that the questions that were appearing were appropriate and that the functions written worked correctly.

  * Result

The quiz now pulls the questions and answers from the API and the text shows correctly for the user to easily read.

![game screen](assets/images/screenshots/gameScreen.png)

  * Verdict

As you can see in the above screenshot the user can see questions and answers to choose from so can play the quiz.  
  
[Back to Top](#table-of-contents)

---
### Bugs

#### MoveScreen function

    Initially the MoveScreen was working sporadically for the move back to the home section, then the end screen began to appear first. the end screen was appearing too soon due to an additional line of code that I had written
    at the bottom of the sequence that was a duplicate and unneeded, once this line was removed the end screen now appears at the appropriate point in the game.

#### Home Button

    The home button was the cause of the glitch with the move screen function where the move back to the home screen was not working on all the home buttons.
    the home button was a class of button as it appears in multiple places as such I added an additional step where the buttons were moved into an array and then the function was called on each of them.
    This was successful and the function now works at all locations.

#### API not pulling the answer through

   The function to pull the information for quiz questions and answers was running but on the screen only the question was showing, this was because I hadn't fully linked the answers to the correct elements on the page.
   This was quickly and easily fixed, the function now pulls through all the needed information.

  
[Back to Top](#table-of-contents)

---

### Deployment

This project was deployed via GitHub by executing the following steps.
After writing the code, committing and pushing it to GitHub:
* Navigate to the repository on github and click **Settings**.
* From there, go to the **Pages**.
* Select **master branch** on the dropdown menu, and click save.
* Now the website is live on:
```
https://yourgithubusername.github.io/your-repo-name
```
* Any time commits and pushes are sent to Github, the Github Pages site should update shortly after.
### **To run the project locally:**
1. Click the **green Clone or Download button** on the Github Repository
1. Using the **Clone with HTTPS option**, copy the link displayed.
1. Open your IDE, and ensure the Git Terminal is open.
1. Change the working directory to the location where the cloned directory is to go.
1. Use the **"git clone" command** and paste the url copied in the second step.


[Back to Top](#table-of-contents)

---

### Credits

   The project has not been an easy one for me as Javascript has been quite challenging for me and I've needed quite a bit of support both in an actual sense from my Mentor Simen and also
   from the tutors on tutor support, but also from my friends and family who have been brilliant cheerleaders when thing were not working and I couldn't see why.
   I should also thank [James Q Quick](https://www.youtube.com/c/jamesqquick) and [DevEd](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q) as watching their channels was very helpful
   for me getting to grips with Javascript.
   One final shout out to Paul and Connie, very good friends who have helped me think through my code and what I need to do to fix it.


[Back to Top](#table-of-contents)
