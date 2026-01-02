# Contact Management Web App

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing contacts with a beautiful dark theme UI.

## Features

✅ **Contact Form** with validation
- Name (required)
- Email (required, validated format)
- Phone (required, min 10 digits)
- Message (optional)

✅ **Backend API**
- POST `/api/contacts` - Create new contact
- GET `/api/contacts` - Fetch all contacts
- DELETE `/api/contacts/:id` - Delete contact

✅ **Real-time Updates** - Contacts display without page reload

✅ **Dark Theme** - Black background with purple gradient accents

✅ **Lucide React Icons** - Modern iconography

✅ **Bonus Features**
- Delete contacts
- Success messages
- Contact sorting (by date/name)
- Responsive design
- Reusable components

## Tech Stack

**Frontend:**
- React.js 18
- Vite
- Axios
- Lucide React (icons)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Installation & Setup

### 1. Clone the repository

```bash
cd "d:\KRISH\Projects\CollEdge Internship Assignment\contact-management-app"
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder (already created):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contact-management
```

**Start MongoDB** (if using local MongoDB):
```bash
mongod
```

**Start the backend server**:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
```

**Start the frontend**:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Usage

1. Make sure MongoDB is running
2. Start the backend server (port 5000)
3. Start the frontend development server (port 3000)
4. Open your browser to `http://localhost:3000`
5. Add contacts using the form
6. View all contacts in the list
7. Delete contacts using the trash icon
8. Sort contacts by name or date

## API Endpoints

### Get All Contacts
```
GET http://localhost:5000/api/contacts
```

### Create Contact
```
POST http://localhost:5000/api/contacts
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Optional message"
}
```

### Delete Contact
```
DELETE http://localhost:5000/api/contacts/:id
```

## Project Structure

```
contact-management-app/
├── backend/
│   ├── server.js          # Express server and API routes
│   ├── package.json
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactForm.css
│   │   │   ├── ContactList.jsx
│   │   │   └── ContactList.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Screenshots

The app features:
- Dark black background (#000000)
- Purple gradient accents
- Lucide React icons throughout
- Responsive grid layout
- Smooth animations
- Form validation with error messages

## Development Notes

- Client-side form validation
- Real-time updates without page reload
- Error handling on both client and server
- Responsive design for mobile and desktop
- Accessible form inputs with labels
- RESTful API design

## License

MIT
