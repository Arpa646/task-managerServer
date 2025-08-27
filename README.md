# Task Manager Server

A robust REST API server built with Node.js, Express, TypeScript, and MongoDB for managing tasks, events, and user registrations.

## 🚀 Features

- **User Authentication**: JWT-based authentication with refresh tokens
- **Task Management**: CRUD operations for tasks with priority and status tracking
- **Event Management**: Handle events and registrations
- **Data Validation**: Zod schema validation for all inputs
- **Error Handling**: Centralized error handling with custom middleware
- **TypeScript**: Full TypeScript support for better development experience
- **MongoDB**: MongoDB with Mongoose ODM for data persistence

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod
- **Password Hashing**: bcrypt
- **Development**: ts-node-dev for hot reloading

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB database (local or cloud)
- npm or yarn package manager

## 🔧 Setup Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task-manager-server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_refresh_token_secret
```

### 4. Database Setup
- Ensure MongoDB is running
- Update the connection string in `src/server.ts` or use environment variables
- The application will automatically create necessary collections

### 5. Build and Run

#### Development Mode
```bash
npm start
```
This runs the server with hot reloading using ts-node-dev.

#### Production Mode
```bash
npm run build
npm run start:prod
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── modules/
│   │   ├── Auth/          # Authentication module
│   │   ├── Task/          # Task management module
│   │   ├── Event/         # Event management module
│   │   └── Registration/  # User registration module
│   ├── middleware/        # Custom middleware
│   └── utils/            # Utility functions
├── server.ts             # Main server file
└── app.ts               # Express app configuration
```

## 🔐 API Endpoints

### Authentication
- `POST /auth/login` - User login

### Tasks
- `POST /tasks` - Create a new task
- `GET /tasks/:userId` - Get all tasks for a user
- `PUT /tasks/:taskId` - Update a task
- `DELETE /tasks/:taskId` - Delete a task

### Task Schema
```typescript
{
  title: string (required),
  description: string (required),
  dueDate: Date (required),
  priority: 'low' | 'medium' | 'high' (default: 'medium'),
  status: 'todo' | 'progress' | 'completed' (default: 'todo'),
  user: string (user ID)
}
```

## 🎯 Approach & Architecture

### 1. **Modular Architecture**
- Organized code into feature-based modules (Auth, Task, Event, Registration)
- Each module contains its own controller, service, validation, and model files
- Clean separation of concerns for maintainability

### 2. **Middleware Pattern**
- Custom async error handling middleware
- Centralized response formatting
- JWT authentication middleware for protected routes

### 3. **Service Layer Pattern**
- Business logic separated into service classes
- Controllers handle HTTP concerns, services handle business logic
- Easy to test and maintain

### 4. **Data Validation**
- Zod schemas for request validation
- Type-safe validation with automatic type inference
- Consistent error messages for validation failures

### 5. **Error Handling**
- Centralized error handling with custom error classes
- Consistent error response format
- Proper HTTP status codes

### 6. **Database Design**
- MongoDB with Mongoose ODM
- Proper indexing for performance
- Schema validation at the database level

## ⏱️ Time Taken

**Total Development Time: 8-10 hours**

### Breakdown:
- **Project Setup & Configuration**: 1 hour
  - TypeScript configuration
  - ESLint setup
  - Package.json configuration

- **Core Architecture**: 2 hours
  - Module structure design
  - Middleware implementation
  - Error handling setup

- **Authentication Module**: 2 hours
  - JWT implementation
  - Login functionality
  - Password hashing with bcrypt

- **Task Management Module**: 2 hours
  - CRUD operations
  - Validation schemas
  - Service layer implementation

- **Event & Registration Modules**: 1 hour
  - Basic structure and endpoints

- **Testing & Debugging**: 1-2 hours
  - API testing
  - Error handling verification
  - Performance optimization

## 🚀 Running the Application

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Server will run on**: `http://localhost:5000`

3. **API Documentation**: Use tools like Postman or Insomnia to test endpoints

## 🔍 Key Features Implemented

- ✅ User authentication with JWT
- ✅ Task CRUD operations
- ✅ Input validation with Zod
- ✅ Error handling middleware
- ✅ MongoDB integration
- ✅ TypeScript support
- ✅ Modular architecture
- ✅ Environment configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Built as part of a web development assignment demonstrating full-stack development skills with modern technologies.
