# Quiz Game (Geography)

This quiz game is for everybody; friends, colleagues, family members or anybody who likes to test their knowledge. In this website you will find questions with four choices which one of them is correct. Easy to make a mistake, not if you are right.
![Alt text](screenshots-for-readme/Screenshot%20(210).png)

## Features
----
### Existing Features 
- Start quiz front page
- Meets the user with warm backround colour and start quiz button based in the centre of the page.

![Alt text](screenshots-for-readme/Screenshot%20(212).png)
### The Question Section
- This section provides 5 questions with multiple answers.
- In the question box top right corner you can find timer with 1 minute 30 seconds provided to complete the quiz.
- When the comfortable answer is picked user can continue by pressing the next button, which brings to the following questions.

![Alt text](screenshots-for-readme/Screenshot%20(216).png)

### Timer Countdown

- If timer runs out, user will be informed by pop up message at the top of the page.

![Alt text](screenshots-for-readme/Screenshot%20(214).png)

### The Game Results

- When the user completes the quiz game at the end result will be provided, depanding how many correct/incorrect guestions were answered.
- Result will be counted and provided with top score 5 out of 5 or less.
- If the challange would like to be played again user can do that by clicking restart button, which brings user back to the start of the quiz.

![Alt text](screenshots-for-readme/Screenshot%20(218).png)

## Testing 
----
- This game was tested on diffrent browsers: Chrome, Samsung, Firefox, Safari.
- I confirm that the quiz correct answers are always accurate.
- I confirm that text are readable and easy to understand.
- I confirm that colours and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.
- This site was tested on Android and Apple devices and works perfectly.

![Alt text](screenshots-for-readme/Screenshot%20(220).png)

## Bugs 

### Solved Bugs

- When running JavaScript validator tests bugs fixed missing semicolons added

if (questionCount < QuizData.length) {
        loadQuestion();
}
- JS Validator shows 26 warnings, which I was struggling to understand or fix it, however when in contact with turor I was informed there are no bugs to fix.
- Different extensions can be used in ES6 or Mozilla.
- Screenshot below.

![Alt text](screenshots-for-readme/Screenshot%20(221).png)

## Validator Testing

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fdarrio-dk.github.io%2Fquiz-game%2F)
- CSS
    - No errors were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/) - link for CSS checking please copy https://darrio-dk.github.io/quiz-game/

## Unfixed Bugs

No unfixed bugs

# Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab.
    - From the source section drop-down menu, select the Main Branch.
    - Once the main branch has been selected, refreshed the page with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - [Geography Quiz](https://darrio-dk.github.io/quiz-game/)

# Credits

## Content
- The questions for the website taken from [Easy Geography Quiz Questions](https://www.quiztriviagames.com/easy-geography-quiz/)
- Intructions how to implement questions for the quiz [Youtube tutorial - The Programmer](https://www.youtube.com/@DanieltheProgrammer100)
- Timer added using Coding Institute LMS programme.
# Media

- Screenshots added using windows crop tool


