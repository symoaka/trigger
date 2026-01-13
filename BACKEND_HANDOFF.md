# KOCLUK Backend Developer Handoff Document

## Project Overview

KOCLUK is an aim coaching platform frontend built with React, Vite, and Tailwind CSS. This document outlines all the API endpoints, data models, and authentication requirements needed to connect the frontend to a backend.

---

## Tech Stack (Frontend)

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom space theme
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)
- **UI Components**: Shadcn/ui (Radix primitives)

---

## Authentication Requirements

### Login Endpoint
**POST** `/api/auth/login`

Request Body:
```json
{
  "email": "string",
  "password": "string"
}
```

Response (Success):
```json
{
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  },
  "token": "string"
}
```

Response (Error):
```json
{
  "error": "Invalid credentials",
  "code": "AUTH_INVALID_CREDENTIALS"
}
```

### Sign Up Endpoint
**POST** `/api/auth/signup`

Request Body:
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Response (Success):
```json
{
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  },
  "token": "string"
}
```

Response (Error):
```json
{
  "error": "Email already exists",
  "code": "AUTH_EMAIL_EXISTS"
}
```

### Get Current User
**GET** `/api/auth/me`

Headers:
```
Authorization: Bearer <token>
```

Response:
```json
{
  "id": "string",
  "username": "string",
  "email": "string"
}
```

### Logout
**POST** `/api/auth/logout`

Headers:
```
Authorization: Bearer <token>
```

---

## Data Models

### User
```typescript
interface User {
  id: string;
  username: string;
  email: string;
}
```

### Coach
```typescript
interface Coach {
  id: string;
  name: string;
  avatar: string; // URL or initials
  specialization: string;
  tagline: string;
}
```

### Staff Member
```typescript
interface StaffMember {
  id: string;
  name: string;
  avatar: string;
  roles: string[]; // e.g., ["Coach", "Pro Player", "Tweaker", "Community Manager", "Admin", "VOD Analyst"]
}
```

### Chat Message
```typescript
interface ChatMessage {
  id: string;
  sender: "buyer" | "seller";
  senderName: string;
  content: string;
  timestamp: string; // ISO date or formatted string
  attachment?: {
    type: "image" | "video";
    url: string;
    name: string;
  };
}
```

### Order Details
```typescript
interface OrderDetails {
  purchaseDate: string;
  staffName: string;
  goal: string;
  socialLinks: {
    twitter: string;
    discord: string;
    instagram: string;
  };
}
```

### Service Guide
```typescript
interface ServiceGuide {
  id: string;
  title: string;
  icon: string; // "Monitor" | "Video" | "Users" | "Settings"
  content: string; // Markdown content
}
```

---

## API Endpoints

### Coaches

**GET** `/api/coaches`
Returns list of all coaches.

Response:
```json
[
  {
    "id": "coach-1",
    "name": "Ahmet",
    "avatar": "A",
    "specialization": "Tracking Specialist",
    "tagline": "Master your tracking aim with precision drills"
  }
]
```

### Staff Members

**GET** `/api/staff`
Returns list of all staff members.

Response:
```json
[
  {
    "id": "staff-1",
    "name": "Ahmet",
    "avatar": "A",
    "roles": ["Coach", "Pro Player"]
  }
]
```

### Chat Messages

**GET** `/api/messages?coachId={coachId}`
Returns chat messages for a specific coach conversation.

Response:
```json
[
  {
    "id": "msg-1",
    "sender": "seller",
    "senderName": "Coach Ahmet",
    "content": "Merhaba! Kocluk programina hosgeldiniz.",
    "timestamp": "2024-12-23 14:30"
  }
]
```

**POST** `/api/messages`
Send a new message.

Request Body:
```json
{
  "coachId": "string",
  "content": "string",
  "attachment": {
    "type": "image" | "video",
    "url": "string",
    "name": "string"
  }
}
```

### File Upload

**POST** `/api/upload`
Upload files (images/videos) for chat attachments.

Request: `multipart/form-data`
- `file`: The file to upload (MP4, PNG, JPG)

Response:
```json
{
  "url": "string",
  "name": "string",
  "type": "image" | "video"
}
```

### Orders

**GET** `/api/orders/:id`
Get order details by ID.

Response:
```json
{
  "purchaseDate": "23 Aralik 2024",
  "staffName": "Coach Ahmet",
  "goal": "FPS oyunlarinda daha iyi performans almak...",
  "socialLinks": {
    "twitter": "https://twitter.com/kocluk",
    "discord": "https://discord.gg/kocluk",
    "instagram": "https://instagram.com/kocluk"
  }
}
```

**PATCH** `/api/orders/:id`
Update order goal.

Request Body:
```json
{
  "goal": "string"
}
```

### Service Guides

**GET** `/api/guides`
Returns all service guides.

Response:
```json
[
  {
    "id": "pc-tweak",
    "title": "PC Tweak Guide",
    "icon": "Monitor",
    "content": "# PC Tweak Rehberi\n\n## 1. Sistem Optimizasyonu..."
  }
]
```

---

## Frontend File Structure

```
client/src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   ├── VideoBackground.tsx    # Full-screen video background
│   ├── GlassContainer.tsx     # Glassmorphism container
│   ├── Navigation.tsx         # Nav bar with logo and auth buttons
│   ├── Chatbox.tsx            # Chat with file upload
│   ├── ChatMessage.tsx        # Individual message bubble
│   ├── FileUploadPreview.tsx  # File preview thumbnails
│   ├── Sidebar.tsx            # Order details panel
│   └── ServiceGuideModal.tsx  # Guide modal
├── lib/
│   ├── mockData.ts            # Mock data (REPLACE WITH API CALLS)
│   └── queryClient.ts         # TanStack Query client
├── pages/
│   ├── landing.tsx            # Home page
│   ├── coaching.tsx           # Coach selection + chat
│   ├── staff.tsx              # Team grid
│   ├── login.tsx              # Login form
│   ├── signup.tsx             # Sign up form
│   └── not-found.tsx          # 404 page
└── App.tsx                    # Root with routing
```

---

## Mock Data Location

All mock data is located in `client/src/lib/mockData.ts`. This file contains:

- `mockChatMessages` - Replace with `/api/messages` endpoint
- `mockOrderDetails` - Replace with `/api/orders/:id` endpoint
- `serviceGuides` - Replace with `/api/guides` endpoint
- `coaches` - Replace with `/api/coaches` endpoint
- `staffMembers` - Replace with `/api/staff` endpoint
- `SHOPIER_PAYMENT_URL` - Payment redirect URL (can be dynamic)

---

## Authentication Integration Points

### Login Page (`client/src/pages/login.tsx`)
- Form fields: email, password
- Submit handler at line ~22: Replace `alert()` with API call to `/api/auth/login`
- On success: Store token and redirect to home

### Sign Up Page (`client/src/pages/signup.tsx`)
- Form fields: username, email, password, confirmPassword
- Submit handler at line ~24: Replace `alert()` with API call to `/api/auth/signup`
- On success: Store token and redirect to home

### Navigation (`client/src/components/Navigation.tsx`)
- Login/Sign Up buttons visible when not authenticated
- Should show user avatar/logout when authenticated

---

## Payment Integration

The payment button in `Sidebar.tsx` currently redirects to:
```
https://shopier.com/kocluk-hizmeti
```

This URL can be made dynamic via an API endpoint if needed.

---

## Environment Variables Needed

```env
# Backend API URL (if separate from frontend)
VITE_API_URL=http://localhost:5000/api

# Session secret (for express-session)
SESSION_SECRET=your-session-secret
```

---

## Notes for Backend Team

1. **CORS**: Ensure CORS is configured to accept requests from the frontend origin
2. **File Uploads**: Max file size should accommodate video files (recommend 100MB limit)
3. **Accepted File Types**: MP4, PNG, JPG/JPEG
4. **Token Storage**: Frontend will use localStorage or httpOnly cookies (coordinate with team)
5. **Error Responses**: Use consistent error format with `error` and `code` fields
6. **Timestamps**: Use ISO 8601 format or localized Turkish format as shown

---

## How to Run Frontend

```bash
npm install
npm run dev
```

The app runs on port 5000.

---

## Contact

For questions about the frontend implementation
contact me on discord
damlabuji 288721143299571712

i developed this using replit in case you need something you are free to ask anything. good luck