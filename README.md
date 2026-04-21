# GK International Tourism

A full-stack application with Express, Prisma, PostgreSQL, and React.

## Project Structure

- `server/`: Backend API and database configuration
- `client/`: Frontend React application

## Prerequisites

- Node.js installed
- PostgreSQL running locally

## Local Setup

### Backend (Server)

1. `cd server`
2. `npm install`
3. Configure `.env` with your `DATABASE_URL` and `JWT_SECRET`.
4. Run migrations: `npx prisma migrate dev`
5. Start development server: `npm run dev`

### Frontend (Client)

1. `cd client`
2. `npm install`
3. Start development server: `npm start`

## Default Configuration

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`
- Features: User Authentication (Login), Real-time messaging (Socket.io)
