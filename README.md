# SpeedyServe - Food and Product Delivery App

SpeedyServe is a responsive(MongoDB, Express.js, React.js, Node.js) web application designed for efficient food and product delivery. This app streamlines the process of ordering food and product online, making it easy for customers to browse food and products, place orders, and enjoy a seamless delivery experience.

## Table of Contents

- [Todo](#todo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting Up the Environment Variables](#setting-up-the-environment-variables)
  - [Installation](#installation)
    - [Installation without Docker](#installation-without-docker)
    - [Installation with Docker](#installation-with-docker)
    - [Test App](#installation-with-docker)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Sources](#sources)

## Todo

- [ ] Add bcypt for password hashing
- [ ] Local Storage for cart
- [ ] Local Storage for login

## Features

- **User Authentication**: Secure user registration and login functionality.
- **Admin Dashboard**: Admins can manage food and products.
- **Browse Food and Products**: Users can explore a list of food and products.
- **Order Placement**: Customers can easily add items to their cart and place orders.
- **Responsive Design**: A mobile-friendly interface to provide a smooth experience across devices.
- **Docker Support**: Easy deployment using Docker containers.

## Technologies Used

- Frontend: React.js, Redux Toolkit, react-hot-toast
- Backend: Express.js, Node.js
- Database: MongoDB
- State Management: Redux with react-redux
- Other: Docker

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database or connection URI
- Docker (if you plan to use Docker for deployment)

### Setting Up the Environment Variables

1. Create a `.env` file in the client folder(FRONTEND).
   ```bash
   REACT_APP_SERVER_DOMAIN = 'YOUR_SERVER_DOMAIN'
   REACT_APP_ADMIN_EMAIL = "YOUR_EMAIL" (You need to first register as a user.)
   ```
2. Create a `.env` file in the server folder(BACKEND).
   ```bash
    MONGODB_USERNAME = "YOUR_USERNAME"
    MONGODB_PASSWORD = "YOUR_PASSWORD"
    MONGODB_URL = "YOUR DB URL"
   ```

### Installation without Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/EHB-MCT/portfolio-second-chance-batuhanayazz.git
   ```

2. Install the dependencies for the server:

   ```bash
   cd server
   npm install

   ```

3. Install the dependencies for the client:

   ```bash

   cd client
   npm install
   ```

4. Run the server:

   ```bash
   cd server
   npm run dev
   ```

5. Run the client:

   ```bash
   cd client
   npm start
   ```

6. Open [http://localhost](http://localhost) to view it in the browser.

### Installation with Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/EHB-MCT/portfolio-second-chance-batuhanayazz.git
   ```

2. Build the Docker image:

   ```bash
   docker-compose build
   ```

3. Run the Docker container:

   ```bash
   docker-compose up
   ```

4. Open [http://localhost](http://localhost) to view it in the browser.

### Test App

You can use the following credentials to test the app:

- **Admin**:
  - Email: admin@speedyserver.com
  - Password: admin

## Project Structure

The project follows a standard structure:

- client: Frontend React application.
- server: Backend Express.js application.
- docker-compose.yml: Docker configuration file.

## Contributing

Contributions are always welcome! Please create a pull request to add new features, fix bugs, or improve the code quality.

## Sources

- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [--YOUTUBE-- Docker Installing](https://www.youtube.com/watch?v=0B2raYYH2fE&t=170s)
- [--YOUTUBE-- Github Branch](https://www.youtube.com/watch?v=O3KtLRmp5q4&list=PLld6WWpFK1nEhFvvYi5ts-_JoUL3wF3zz)
- [--YOUTUBE--ECOMMERCE WEBSITE](https://www.youtube.com/watch?v=AN3t-OmdyKA)

---

**_Project made by Batuhan Ayaz, 2023 for the course at Erasmus University Collage Brussels_**
