# Mini Message Board

A simple message board built with Node.js, Express, and EJS. Users can read posted messages, add new ones through a form, and open any message to see its details.

This project is part of [The Odin Project](https://www.theodinproject.com/) Node.js curriculum.

## Features

- View all messages with the author, text, and date posted
- Add a new message through a form
- Open a single message to see its full details
- Server-side rendering with EJS templates

## Tech Stack

- Node.js
- Express
- EJS

## Routes

| Method | Route          | Description                    |
| ------ | -------------- | ------------------------------ |
| GET    | `/`            | Shows all messages             |
| GET    | `/new`         | Shows the new message form     |
| POST   | `/new`         | Adds a message, then redirects |
| GET    | `/message/:id` | Shows one message's details    |

## Getting Started

1. Clone the repo:
   ```
   git clone https://github.com/relentless10/miniMessageboard.git
   cd miniMessageboard
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   node app.js
   ```
4. Open `http://localhost:3000` in your browser.

## Project Structure

```
messageboard/
├── app.js
├── routes/
│   └── indexRouter.js
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
└── package.json
```

## Notes

Messages are stored in memory, so they reset whenever the server restarts. A database would be the next step to make them persistent.

## Author

Built by [relentless10](https://github.com/relentless10).
