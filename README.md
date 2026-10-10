# Hangman

A Hangman game built with React and TypeScript (Vite). The game picks a random word and the player guesses it letter by letter before the full stick figure is drawn.

## Features

- Random word picked from a word list
- Word displayed with underscores, guessed letters are revealed
- On-screen keyboard (physical keyboard typing is supported too)
- Gallows drawing that grows with each wrong guess (6 mistakes allowed)
- Win and lose messages

## Tech Stack

- React
- TypeScript
- Vite
- ESLint

## Getting Started

You need [Node.js](https://nodejs.org/) installed.

```bash
git clone https://github.com/stosic-dev/Hangman-game.git
cd Hangman-game
npm install
npm run dev
```

The app will be available at the address printed in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── App.tsx            # main game state and logic
├── HangmanDrawing.tsx # gallows drawing
├── HangmanWord.tsx    # word display with underscores
├── Keyboard.tsx       # on-screen keyboard
└── wordList.json      # list of words
```

## What I Learned

- Working with the `useState` hook and deriving values from existing state
- Splitting an app into components and passing data through props
- TypeScript basics in React (types for props and state)
