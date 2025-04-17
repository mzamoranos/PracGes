# PracGes

PracGes is a full-stack web application built using React, Express, Tailwind CSS, PostgreSQL, and JWT for authentication. This project serves as a template for creating modern web applications with a focus on modularity and scalability.

## Project Structure

```
PracGes
├── client                # Frontend application
│   ├── public            # Public assets
│   │   └── index.html    # Main HTML file
│   ├── src               # Source files for React
│   │   ├── components     # React components
│   │   │   └── ExampleComponent.jsx
│   │   ├── pages         # React pages
│   │   │   └── HomePage.jsx
│   │   ├── App.jsx       # Main App component
│   │   ├── index.css     # Global CSS styles
│   │   └── index.js      # Entry point for React
│   ├── package.json      # Client-side dependencies
│   └── tailwind.config.js # Tailwind CSS configuration
├── server                # Backend application
│   ├── controllers       # Controller functions
│   │   └── authController.js
│   ├── middleware        # Middleware functions
│   │   └── authMiddleware.js
│   ├── models            # Database models
│   │   └── userModel.js
│   ├── routes            # API routes
│   │   └── authRoutes.js
│   ├── app.js            # Express app initialization
│   ├── config.js         # Configuration settings
│   ├── package.json      # Server-side dependencies
│   └── server.js         # Entry point for the server
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd PracGes
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd ../client
   npm install
   ```

### Configuration

1. Set up your PostgreSQL database and update the connection details in `server/config.js`.

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd ../client
   npm start
   ```

### Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the authentication routes provided in the server to manage user sessions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.