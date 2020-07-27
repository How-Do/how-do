# howDo

_the social think-tank where users ask each other how to do things then offer advice on how they should be done_

## Purpose

- solves the problem of not knowing where to begin a new task or hobby by drawing on the community's collective wisdom
- offers real-time feedback in the form of text posts, links, and images
- includes community up/down-votes that lend prominence to the most effective solutions
- provides an informative, safe space for howDoers to learn, support, and connect with people who share their interests

## Functionality

- full-stack React application connected to an Express/Node server
- interactive PostgreSQL database

## Design

- simplified and user-friendly, requiring only basic computer knowledge for optimal results
- branded with a raccoon, as a symbol of intelligence, inquisitiveness, and resourcefulness - also as a warning to howDoers not to become pests and to channel their contributions in positive ways that build a collaborative learning community

## Components

### <ins>About/Contact</ins>

- brief description of the howDo organization
- frequently asked questions (FAQs)
- user/admin interaction through Nodemailer emails labeled with subject, username, and preferred method of contact

### <ins>Dashboard</ins>

- central hub/landing page of HowDo
- full access for visitors and logged-in users alike
- mobile responsive through media queries
- displays all posts by mapping over data received from an axios call to the backend
- clickable categories that filter rendered posts
- search bar for more specific focus

### <ins>Post</ins>

- detailed view of each post
- includes comments and voting status
- accessible to all visitors and logged-in users

### <ins>Register</ins>

- interactive form with Material UI styling
- direct link to populate PostgreSQL database

### <ins>Header/Login</ins>

- uses bcrypt to hash stored passwords
- handles user session with redux and protective middleware

### <ins>Add Post</ins>

- rendered in App.js
- not displayed until user is logged in (by use of a ternary)
- accessible from all pages of the site
- functions through the use of sockets
- accesses user information through redux

### <ins>Add Comment</ins>

- rendered comments pulled from the database with an axios call
- mapped to display all comments with associated post
- form displayed through a ternary that checks redux for login status
- comments completed with a socket that allow for instantaneous updating across all users
- changeable up/down-vote feature restricted to one vote per user

### <ins>Profile/User Info</ins>

- edit feature on user profile that updates across all posts/comments
- edit button uses a HamburgerArrow from react-animated-burgers
- toastify provides notification throughout the user experience
- updated in real-time through a useEffect hook
- designed to be mobile-responsive

### <ins>Charts</ins>

- three Chart.js graphics used to display site-interaction metrics
- data retrieved from PostreSQL database through axios calls
- user data stored in redux and state through the use of hooks
