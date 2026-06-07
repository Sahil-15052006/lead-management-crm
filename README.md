# Lead Management CRM

A full-stack CRM application for managing leads with features like filtering, sorting, and status tracking.

## Live Demo
https://sahil-15052006-lead-management-crm.vercel.app/

## GitHub Repository
https://github.com/Sahil-15052006/lead-management-crm

---

## Tech Stack

**Frontend**
- React + TypeScript
- Tailwind CSS

**Backend**
- Node.js + Express
- MongoDB 
- CORS
- Dotenv

---

## Features
- View all leads in a table
- Add new leads
- Edit lead details and status
- Delete leads
- Filter leads by status
- Sort leads by name or date
- Search leads
- Dashboard with lead count cards
- Analytic Page with mongoDB embedded charts (takes a while to load)
---

## Setup Instructions

### Prerequisites
- Node.js
- pnpm

### Clone the repository
```bash
git clone https://github.com/Sahil-15052006/lead-management-crm
cd lead-management-crm
```

### Backend Setup
```bash
cd backend
pnpm install
```

Create a `.env` file in the backend folder:
```env
MONGO_URI=your_mongodb_connection_string 
```

Start the backend:
```bash
pnpm start
```

### Frontend Setup
```bash
cd frontend
pnpm install
```

Create a `.env` file in the frontend folder:
```env
VITE_API_URL=http://localhost:1234
```

Start the frontend:
```bash
pnpm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /leads | Get all leads |
| POST | /leads | Create a new lead |
| PUT | /leads/:id | Update a lead |
| DELETE | /leads/:id | Delete a lead |

---

## Environment Variables

### Backend `.env`
```env
MONGO_URI=your_mongodb_uri
```

### Frontend `.env`
```env
VITE_API_URL=your_backend_url
```
