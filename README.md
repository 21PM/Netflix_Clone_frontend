## Netflix Clone
A Netflix clone application built to emulate the key functionalities of the popular streaming service. This project allows users to watch movies, search for movies, and get lists of upcoming movies, trending movies, popular movies, and now playing movies.


•	Table of Contents
•	Project Description
•	Technologies Used
•	Installation Instructions
•	Usage Instructions
•	Features
•	Folder Structure


#Project Description
This Netflix clone is designed to mimic the essential features of Netflix, providing users with an intuitive interface to explore and stream a wide range of movies and TV shows. The website is built with a focus on delivering a seamless user experience in dark mode.

#Technologies Used
Frontend: React.js, Redux Toolkit, Axios, React Router DOM, Tailwind CSS, Material-UI
Backend: Node.js, Express.js, MongoDB, JWT
Styling: Tailwind CSS, Material-UI
Others: Axios for API calls, React Hot Toast for notifications

## Installation Instructions
Backend Setup
Clone the backend repository:
git clone https://github.com/21PM/Netflix_Clone_backend.git
cd backend
Install backend dependencies:
npm install
npm start

Frontend Setup
git clone https://github.com/21PM/Netflix_Clone_frontend.git
cd netflix
Install frontend dependencies:
npm install


## Install frontend dependencies:

cd netflix
npm install
cd ..

## Set up environment variables:
DatabaseURI=your_mongodb_uri
JWTSECRETKEY=your_jwt_secret

Run the application:
npm run dev

## •	Features
•	User authentication (sign up, login, logout)
•	Browse and search movies
•	Stream video content
•	View upcoming, trending, popular, and now playing movies
•	Dark mode interface

Folder Structure
Backend folder structure
netflix-clone-yt/
├── backend/
│   ├── controller/
│   ├── middlewares/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
└── └── ...

Frontend folder structure
netflix-clone-yt/
├── netflix/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   ├── vite.config.js
└── └── README.md


