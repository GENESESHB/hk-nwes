### project  with instructions on how to run it using React and NestJS.



# Press Information System

## Introduction

Welcome to the Press Information System project. This application serves as a comprehensive platform for delivering the latest press information, sports updates, weather forecasts, and more. The system is designed to provide users with a seamless and intuitive experience, ensuring that they have access to the most current and relevant information at their fingertips.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces, ensuring a dynamic and responsive experience for users.
- **CSS**: For styling the components and creating a visually appealing interface.
- **FontAwesome**: For adding vector icons and social logos to the application.

### Backend
- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## Features

- **Home**: The main landing page with the latest press information.
- **About**: Information about the platform and its purpose.
- **Contact Us**: A page for users to get in touch with the administrators.
- **Sport Info**: The latest updates and news in the world of sports.
- **Meteo**: Current weather forecasts and related information.
- **Language Support**: Dropdown to select the preferred language.

## Running the Project

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your system.
- **npm**: Node Package Manager, typically installed with Node.js.

### Frontend

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the React application**:
    ```bash
    npm start
    ```

    This will start the React development server and the application will be available at `http://localhost:4000`.

### Backend

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the NestJS application**:
    ```bash
    npm run start
    ```

    This will start the NestJS server and the backend will be available at `http://localhost:3001`.

## Directory Structure

```
press-info-navbar/
|-- backend/
|   |-- src/
|   |   |-- app.module.ts
|   |   |-- main.ts
|   |   |-- ...
|   |-- package.json
|-- frontend/
|   |-- public/
|   |   |-- index.html
|   |-- src/
|   |   |-- assets/
|   |   |   |-- hklg.jpg
|   |   |-- components/
|   |   |   |-- Navbar.js
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- Navbar.css
|   |-- package.json
|-- README.md
```

This structured approach ensures a clean separation of concerns, with the frontend and backend components managed independently but working seamlessly together to deliver a robust press information system.

## Conclusion

The Press Information System leverages modern web technologies to provide a reliable and user-friendly platform for accessing press information, sports updates, weather forecasts, and more. By using React for the frontend and NestJS for the backend, we ensure a scalable and maintainable application that can easily adapt to future requirements.

We hope you find this project useful and look forward to your contributions and feedback.

