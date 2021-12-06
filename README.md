# Rock, Paper, Scissors!

For the deployed Website [Click here.](https://liamsmith3194.github.io/rock-paper-scissors/)

Welcome to Rock, Paper, Scissors! Based on the popular hand game, usually played between two people, in which each player simultaneously form one of three shapes with a hand.

![Icons & Rules](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/icons-rules.PNG)

Responsively designed to display on a range of devices from desktops to mobiles.

![Am I Responsive](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/am-i-responsive.PNG)

## User Experience (UX)

### First Time Visitor Goals

1. As a first time visitor, I want a clear understanding of the interactive game on show.
2. As a first time visitor, I want a brief description of the rules in order to win the game.
3. As a first time visitor, I want to have live scoring round by round.
4. As a first time visitor, I want to enjoy the game and come back again and again.

### Returning Visitor Goals

1. As a returning visitor, I want to enjoy the game as much as I did the first time.

- ### Design

- #### Colour Scheme
- With the cartoon images used for the hand gestures, the colour scheme is very simple with the body being grey (#686868).
The scoreboard uses win, draw, lose colours (green #3EA62D, black #000000, red #FF0000) just to add some brighter text.
- #### Typography
- One typeface is used throughout the site (Bebas Neue) which is clear to read and stands out enough to draw the user into the game. The game title has a 5px letter spacing and the remaining text has 2px letter spacing to increase readability. Finally, Bebas Neue has a fallback of sans-serif in case of any import issues.
- #### Imagery
- As mentioned above the fun striking cartoony images used for the hand gestures look great and work really nicely as the buttons with the grey circular borders.

- ### Wireframes

- Figma Desktop Wireframe - [View](https://www.figma.com/file/ciXYUYV361qot5MCN7Z5hF/Rock%2C-Paper%2C-Scissors---Desktop?node-id=0%3A1)

![Figma Desktop Wireframe](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/desktop-wireframe.PNG)

- Figma Mobile Wireframe - [View](https://www.figma.com/file/EtSRFMgeaP0ACLVRtgNXmQ/Rock%2C-Paper%2C-Scissors---Mobile?node-id=0%3A1)

![Figma Mobile Wireframe](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/mobile-wireframe.PNG)

## Features
Below is a brief overview of the website and its main features.

### Fun animated images

- The use of the images add to the aesthetics of the site and makes it much more appealing than just using text.

### Interactive buttons

- Removing the background behind the images has made the buttons look very professional especially when hovered over with the white background filling in around the icon in a slightly lighter shade of grey. The button also increases in size slightly making it even more obvious for the user to know where the mouse is.

![Buttons Hover Pseudo](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/interactive-buttons-hover.PNG)

### 3 second countdown

- Once the user has selected an answer by clicking one of the buttons, a 3 second timer appears in between the round number and scoreboard. The timer then disapears once the countdown is complete and the end result is revealed.

![3 second countdown](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/countdown-timer.PNG)


### Alert message to confirm round outcome

- After the 1-second delay the alert message appears and summarises the round for example:
- You played: Rock
- The computer played: Rock
- It's a draw!

![Won](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/alert-message-won.PNG)

![Drawn](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/alert-message-draw.PNG)

![Lost](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/alert-message-lost.PNG)

### Automatic updating scoreboard & round number

![Scoreboard](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/scoreboard.PNG)

## Future Features

- User selects how many rounds to play, best of 5 etc.
- The abilty to choose a difficulty level. Easy, medium & hard.
- Display round outcome out of alert message.

## Technologies

### Created by using:

- HTML5
- CSS3
- JavaScript

### Programs including:

- [Google Fonts:](https://fonts.google.com/)
- Google fonts were used to import the 'Bebas Neue' into the style.css file.
- [Gitpod](https://gitpod.io/)
- Gitpod was used to create and update the website throughout via the terminal to push changes to Github.
- [GitHub:](https://github.com/)
- GitHub was used to embed the site and store all imagery.
- [Figma:](https://figma.com/)
- Figma was used to create the wireframes during the design process.

## Testing

### Validation Testing

The W3C Markup Validator and W3C CSS Validator Services were used to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fliamsmith3194.github.io%2Frock-paper-scissors%2F)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fliamsmith3194.github.io%2Frock-paper-scissors)

### Lighthouse Testing

Initial lighthouse scores produced a performance of 96-98 & accessibility of 94-100 The reason given for the accessibility score on a mobile is "Background and foreground colors do not have a sufficient contrast ratio." This points to the win and lose colours used against the white background. As someone with a type of red-green colour-blindness (Protan), I have had no issues telling the colours apart or reading text.

- Mobile Results

![Lighthouse Mobile Results](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/lighthouse-mobile.PNG)

- Desktop Results

![Lighthouse Desktop Results](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/lighthouse-desktop.PNG)

### Testing User Stories from User Experience (UX) Section

- #### First Time Visitor Goals

Q1. As a first time visitor, I want a clear understanding of the interactive game on show.

- A large majority of the worlds population have played or understand how rock, paper scissors is played. As soon as users enter the site, it is abundantly clear what the game is and how to play it. The default icons on show increase the clarity.

Q2. As a first time visitor, I want a brief description of the rules in order to win the game.

- The rules are very clear to see labelled up beneath the interactive buttons. "ROCK BEATS SCISSORS" etc.

Q3. As a first time visitor, I want to have live scoring round by round.

- Round by round after the alert message of the outcome, the round number is updated along with the tally of rounds won, rounds drawn or rounds lost, all looking from the users perspective.

Q4. As a first time visitor, I want to enjoy the game and come back again and again.

- The way the game is run is so easy to play and understand. I have found myself saying "one more round" constantly, just to finish with a win and beating the computer.

### Continued Testing REPLACE WHEN DONE

- The Website was tested on Google Chrome, Internet Explorer (see glitches), Microsoft Edge and Safari browsers.
- The website has been displayed on various devices such as Desktop PC, iMac, Laptop, iPhone X, iPad & iPad mini.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Glitches
#### Computers

- Internet Explorer - The website doesn't display any images or button labels. This leads to no functionality.

#### Mobile (iPhone X)
- The hover pseudo has been removed on smaller devices (tablet-phone) to ensure the user the game has been reset, as the button were not returning to orignal style after selection.
- The button images appear stretched. No issues via inspect mode in a browser.
- The button labels don't line up centrally beneath the buttons. No issues via inspect mode in a browser.

## Deployment

### GitHub Pages

GitHub was the program used to deploy the site, it was accomplished by using the following steps:

1. Log in to GitHub and select the GitHub Repository.

![GitHub Repository](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/github-repo.PNG)

2. At the top of the page towards the middle of the screen you will see a "Settings" menu item with a cog icon.

![GitHub Settings](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/github-settings.PNG)
3. On the left-hand side is a vertical list locate and click "Pages".

![GitHub Pages](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/github-pages.PNG)

4. Under the "Source" sub-heading, click on the dropdown by default "None" and choose "main".

![GitHub Source](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/github-source.PNG)

5. Click "Save"
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

![GitHub Publish](https://raw.githubusercontent.com/liamsmith3194/rock-paper-scissors/main/assets/readme-images/github-published.PNG)

## References

### Code

- Generating a random word (Rock, Paper or Scissors) from the console - Love Maths (Walkthrough Project)

- Transition CSS - Animates the hover pseduo on the buttons - Love Maths (Walkthrough Project)

- Switch function - Suggested by my mentor to display else statements in a cleaner way.

- Countdown function - On click of one of the three options a countdown timer appears underneath the computer icons.
[Stack Overflow](https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown)

- Delay function - Used to display the computer's answer working with the above countdown function.
A further 1 second delay before alert message informs the user of round result. - [Stack Overflow](https://stackoverflow.com/questions/16873889/how-to-create-javascript-delay-function)

### Content

- All content was written by the developer.

### Digital Artwork

- The images used for the hand gestures were sourced from the World Rock Paper Scissors Association [(WRPSA)](https://wrpsa.com/the-official-rules-of-rock-paper-scissors)

### Mentions

- My Mentor for answering my questions throughout.

- Slack users for constructive feedback, suggestions for improvements and video calls.
