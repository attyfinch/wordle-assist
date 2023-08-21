# WordleAssist
[WordleAssist](https://wordleassist-137ccebd9892.herokuapp.com/) is an app that I built to help people solve Wordle puzzles. It can be used to generate ideas for words, to get unstuck, or completely cheat the game if that's what someone wants to do. It works by taking letters designated for inclusion & exclusion designated by the user, queries a database of 5 letter words based on the given criteria, and returns all potential correct answers.

The idea for WordleAssist was born out of the desire to build a project requiring all of the material I covered in the BloomTech Full Stack Web Development Program. Wordle is a game I'm very familar with. I play it every morning as a way to start the day and boot up my brain. Historically, I've lost about 2% of the games I've played. Not bad, but still frustrating. I thought it would be fun and challenging to see if I could build something that would eliminate the possiblity of losing, even if that meant ruining the game for myself in the process. I'm happy to report that thus far it has delivered in this regard.

Included below is info on what I used to build WordleAssist, along with some planned future improvements. While I may have ruined the game for myself, work on this app is not yet done.

## Upcoming Improvements
- Support for iPhone 14 Pro Max
- Form validation
- Light/dark mode toggle
- Updated word scoring system to improve recommendations
- UX improvements

## What I used to build WordleAssist
Technically WordleAssist is two separate apps. This repo is the frontend portion of the app. For now I'm keeping the backend repo private, but plan to make it public in the coming weeks. Notes on the backend are below.
 
 ### Frontend
 You can check out the package.json to see everything I'm using, but here are the most important bits:
- React
- Axios
- React Router
- [React Spinners](https://www.npmjs.com/package/react-spinners)

### Backend
- Express
- PostgreSQL
- Knex
- [English Words Repo](https://github.com/dwyl/english-words) - This app would not be possible w/o this project.

## Word Recommendation Rankings
There were two problems I encountered with delivering word recommendations.
1. Little input criteria returns thousands of word recommendations. In what order should I show them?
2. There are many obscure words that pollute word recommendations, potentially suppressing more viable words.

My solution was a word scoring system that devalues obscure and uncommonly used words. There are two components:
1. Letter frequency by position: Each word is scored based on the frequency of each letter based on the position it is in.
2. How commonly used the word is in the English language. I used GPT 3.5 to obtain this score.

For the most part this scoring system gives me what I want. Word recommendations are better with it than without it, but I do plan on making revisions to improve it further in the coming weeks.

I do not display the scores b/c I do not want this to distract the user. The goal isn't to numerically compare words, it's to solve Wordle Puzzles.