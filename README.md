# Luxury Estate Closing Gift & Referral Log

A full-stack monolithic web application built with **React + TypeScript (Vite)** and **Node.js + Express + TypeScript**, using **SQLite + Prisma** for persistence.

This tool allows a luxury real estate agent to track:

- Closing gifts
- Referral rewards
- Housewarming gifts
- Client history
- Business expenses for tax season

The system ensures:
- Gift variety for repeat clients
- Expense tracking
- Real-time search & filtering
- Persistent storage

---

# Architecture

Monolithic full-stack structure:

luxury-gift-log/
│
├── client/   → React frontend (Vite + TS)
├── server/   → Express backend (TS + Prisma + SQLite)
└── package.json (root controller)

Production flow:
- React is built into `/client/dist`
- Express serves static files
- API runs under `/api`
- Single domain (no CORS needed)

---

# Tech Stack

Frontend:
- React
- TypeScript
- Vite
- Axios

Backend:
- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite

---

#  Features

✔ Create, Read, Update, Delete gift records  
✔ Real-time search by client name  
✔ Category filter (Closing Gift, Referral Reward, Housewarming)  
✔ Expense tracking (cost field)  
✔ SQLite persistence  
✔ Mobile responsive UI  
✔ Single command production start  
✔ Basic form validation  

---

#  Installation


## Install Root Dependencies

```bash
npm install
```

---

## Install Server Dependencies

```bash
cd server
npm install
```

---

## Environment Variables

```
DATABASE_URL="file:./dev.db"
PORT=3000
```

---

## Setup Database

Initialize Prisma & SQLite:

```bash
npx prisma migrate dev --name init
```

This will:

* Create `dev.db`
* Generate Prisma client

---

## Install Client Dependencies

```bash
cd client
npm install
```

---

# Development Mode

Run both frontend and backend with hot reload:

```bash
npm run dev
```

What happens:

* Backend runs via ts-node-dev
* Frontend runs via Vite
* API base path: `/api`
* No CORS required

Backend:
[http://localhost:3000](http://localhost:3000)

Frontend:
[http://localhost:5173](http://localhost:5173)

---

# Production Build

Build full application:

```bash
npm run build
```

This will:

* Build React → `client/dist`
* Compile backend → `server/dist`

---

#  Run Production Server

```bash
npm start
```

App runs at:

```
http://localhost:3000
```

React is served statically from Express.

---

# 🔌 API Endpoints

Base path: `/api`

## Create Gift

POST `/api/gifts`

Body:

```json
{
  "clientName": "John Doe",
  "propertyAddress": "123 Beverly Hills",
  "description": "Luxury Wine Basket",
  "category": "Closing Gift",
  "cost": 450,
  "dateGiven": "2026-02-25"
}
```

---

## Get All Gifts (Search & Filter)

GET `/api/gifts?search=John&category=Closing Gift`

Query params:

* search → filters by client name
* category → filters by gift category

---

## Update Gift

PUT `/api/gifts/:id`

---

## Delete Gift

DELETE `/api/gifts/:id`

---

# Database Schema

Prisma model:

```prisma
model Gift {
  id              Int      @id @default(autoincrement())
  clientName      String
  propertyAddress String
  description     String
  category        String
  cost            Float
  dateGiven       DateTime
  createdAt       DateTime @default(now())
}
```

Database file:

```
server/prisma/dev.db
```

---

# Responsive Design

The UI is mobile-first:

* Single-column layout
* Full-width form fields
* Clean professional styling
* Works while shopping for gifts on mobile

---

# Acceptance Criteria Coverage

✔ App launches with `npm start`
✔ Data persists after restart
✔ Search works in real-time
✔ Category filtering works
✔ Form validation prevents empty submissions
✔ Mobile-friendly layout
✔ Organized folder structure

---

# Visual Proof (Required)

Include screenshots of:

1. Dashboard list view
2. Add Gift form
3. Search functionality
4. Category filter
5. Mobile responsive layout

---

#  Deployment

Demo: [https://luxury-gift-log.onrender.com/](https://luxury-gift-log.onrender.com/)

Recommended options:

Backend:

* Railway
* Render
* VPS

Frontend:

* Served directly from backend (monolith)


