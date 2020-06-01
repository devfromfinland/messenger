# This project is a instant messaging app.

## To run this project:

1. Install project's dependencies
``
npm start
``

2. Runs the app in the development mode.<br />
``
npm start
``

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Its functionalities include:

**Stage 1:** Core front-end functionalities (create room, join room chat, chat with each other, route, redux). There is no server-side developed in this stage yet, so that the app uses file `_DATA.js` as a faux back-end server. Data is saved only in redux and will be cleared after each refresh.
- [x] Create room
- [x] Join room
- [x] Login with default users / Logout
- [x] Chat with other users
- [x] Chat in room
- [x] Redux, React Router

For testing: You will need to log-out and log-in to see from a different user's role.

**Stage 2:** Develop back-end server for communicating and saving chat history

**Stage 3:** Clearning & improvement
- [ ] Import UX & UI
- [ ] Add testing & fix bugs throughoutly
- [ ] Clean redundant codes
- [ ] Optimize parts for performance
- [ ] Style code and add code comments
- [ ] Add more features such as user creation & authentication

**Stage 4:** Publish to server

**Stage 5:** Add mobile version (Android and iOS) with React Native