# KOCLUK - Aim Coaching Platform

## Overview
A modern, space-themed coaching platform frontend built with React, Vite, and Tailwind CSS. Features glassmorphism UI effects, a video background, chat functionality, service guides, and multi-page navigation for Home, Coaching, Staff, and external Playlists link.

## Project Structure

```
client/src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   ├── VideoBackground.tsx    # Full-screen video background with dark overlay
│   ├── GlassContainer.tsx     # Reusable glassmorphism container
│   ├── Navigation.tsx         # Global nav bar with glassmorphism
│   ├── Chatbox.tsx            # Main chat component with file upload
│   ├── ChatMessage.tsx        # Individual chat message bubble
│   ├── FileUploadPreview.tsx  # File preview thumbnails for uploads
│   ├── Sidebar.tsx            # Order details and service guides panel
│   └── ServiceGuideModal.tsx  # Modal for displaying service guides
├── lib/
│   ├── mockData.ts            # Mock data for chat, orders, guides, coaches, staff
│   └── queryClient.ts         # TanStack Query client
├── pages/
│   ├── landing.tsx            # Home page with hero section and CTAs
│   ├── coaching.tsx           # Coach selection grid + chat interface
│   ├── staff.tsx              # Team member grid with role badges
│   └── not-found.tsx          # 404 page
├── App.tsx                    # Root component with routing
└── index.css                  # Global styles with space theme
```

## Pages

### Home (Landing Page)
- Hero section with "Elevate Your Aim Game" headline
- Feature cards showcasing services
- CTA buttons to Coaching and Staff pages

### Coaching Page
- Grid of 4 coach cards (Ahmet, Mehmet, Emre, Burak)
- Each card shows avatar, specialization, tagline
- "Contact" button opens the chatbox interface with that coach
- Back button returns to coach selection

### Our Staff Page
- Grid of 10 staff member cards
- Role badges: Coach, Pro Player, Tweaker, Community Manager, Admin, VOD Analyst
- Data-driven from `staffMembers` array for easy updates

### Playlists
- External link that redirects to https://evxl.app/

## Design System

### Theme
- **Colors**: Dark space theme with neon cyan (#00ffff) and purple (#a855f7) accents
- **Effects**: Glassmorphism (backdrop-blur, semi-transparent backgrounds)
- **Typography**: Space Grotesk font family
- **Borders**: Subtle neon glow effects

### Key CSS Variables
```css
--neon-cyan: 185 100% 50%;
--neon-purple: 270 70% 60%;
--neon-pink: 320 80% 55%;
```

## Features

### Navigation Bar
- Fixed at top-center with glassmorphism effect
- Menu items: Home, Coaching, Our Staff, Playlists
- Active state highlighting
- Responsive (icons only on mobile)

### Chatbox
- Displays chat history between buyer and coach
- File upload supporting MP4 videos and PNG/JPG images
- Preview thumbnails before sending
- Multi-file attachment support

### Sidebar (KOCLUK)
- Order details: Purchase date, coach name
- Goal section with 200 character limit
- Service guide triggers (opens modals)
- Social media links with hover effects
- Payment button (redirects to Shopier)

### Service Guides
- PC Tweak Guide
- VOD Review Info
- 1-1 Coaching
- Game Settings Guide

## Mock Data (for Backend Integration)
Located in `client/src/lib/mockData.ts`:
- `mockChatMessages`: Array of chat messages
- `mockOrderDetails`: Order information object
- `serviceGuides`: Array of guide content
- `coaches`: Array of 4 coaches
- `staffMembers`: Array of 10 staff members
- `SHOPIER_PAYMENT_URL`: Payment link placeholder

## Responsive Design
- Desktop (≥1024px): Full navigation, two-column chat layout
- Tablet/Mobile (<1024px): Compact nav, single column layouts

## Running the App
The app runs on port 5000 using `npm run dev`.

## Backend Integration Notes
The frontend uses mock data that can be easily replaced with API calls:
- Replace `mockChatMessages` with API fetch to `/api/messages`
- Replace `mockOrderDetails` with API fetch to `/api/orders/:id`
- Replace `coaches` with API fetch to `/api/coaches`
- Replace `staffMembers` with API fetch to `/api/staff`
- Add mutation for sending messages: `POST /api/messages`
- Add file upload endpoint: `POST /api/upload`
