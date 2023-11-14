# NewsRoom Web Application

Welcome to NewsRoom, a real-time stock and crypto news platform. This repository contains the codebase for the NewsRoom web application.

## Features

### Frontend

1. **Dynamic Sidebar Navigation:**
   - Implemented a dynamic sidebar using React Router for intuitive and seamless navigation, enhancing user experience.

2. **User Authentication Flow:**
   - Developed a secure user authentication system using JSON Web Tokens (JWT) and bcrypt for password hashing, ensuring robust security practices.

3. **Reusable Components Architecture:**
   - Designed a modular and reusable component architecture, promoting maintainability and scalability across the application.

4. **API Integration for Real-Time Data:**
   - Successfully integrated external APIs, including [Alpaca API](https://docs.alpaca.markets/docs/api-references), to deliver up-to-the-minute stock and crypto news. Leveraged Redux for state management, optimizing data flow.

5. **Responsive Design:**
   - Ensured a visually appealing and responsive design with Flexbox and CSS Grid, adapting to various screen sizes for optimal user experience.

### Backend

1. **User Data Management:**
   - Utilized asynchronous handling and efficient MongoDB operations to manage user data effectively, allowing seamless registration and login processes.

2. **Secure User Authentication:**
   - Implemented bcrypt for robust password hashing and validation, prioritizing the security of user credentials.

3. **Favorite Articles Functionality:**
   - Enabled users to manage their favorite news articles with efficient MongoDB operations. Users can add and remove articles from their favorites list effortlessly.

4. **JWT Authorization Middleware:**
   - Implemented a JSON Web Token (JWT) authorization middleware to verify user authenticity, securing specific routes and enhancing overall application security.

5. **Comprehensive Error Handling:**
   - Implemented a robust error handling mechanism, providing clear and informative error messages. Effective use of HTTP status codes enhances API communication and simplifies troubleshooting.

6. **Optimized Database Interactions:**
   - Leveraged MongoDB features for efficient data insertion, querying, and updating, optimizing the application's database interactions.

7. **JWT Token Verification Middleware:**
   - Implemented a middleware for verifying JWT tokens, enhancing authentication reliability.

8. **RESTful API Structure:**
   - Ensured a clean and RESTful API structure, promoting clarity and simplicity in the backend code.

## Getting Started

[Instructions for setting up and running the application.]

## Technologies Used

- Frontend: React, React Router, Redux
- Backend: Node.js, Express, MongoDB
- External APIs: News API
- Authentication: JSON Web Tokens (JWT), bcrypt

## License

This project is licensed under the [MIT License](LICENSE).
Current Demo: [NewsRoom - Demo](https://dem0-news-app.netlify.app/)
