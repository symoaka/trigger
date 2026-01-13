# Design Guidelines: Space-Themed Coaching Platform

## Design Approach
**Visual Identity**: Futuristic space theme with glassmorphism aesthetic
**Reference Style**: Blend of Linear's clean interface + modern gaming UI (dark mode, neon accents)

## Core Design Elements

### Background Treatment
- **Video Background**: Full-screen `website_gif.mp4` with `object-fit: cover`, fixed positioning
- **Overlay**: Dark semi-transparent overlay (rgba(0,0,0,0.6)) for content readability
- **Effect**: All content containers use glassmorphism (backdrop-blur, semi-transparent backgrounds)

### Layout Structure
**Desktop (≥1024px)**:
- Two-column layout: 70% chatbox (left/center) + 30% sidebar (right)
- Sidebar titled "KOCLUK" containing order details

**Mobile (<1024px)**:
- Single column stack: Chatbox first, sidebar below
- Full-width components with maintained spacing

### Typography
- **Font**: Inter or Space Grotesk for futuristic feel
- **Hierarchy**: 
  - Headers: text-2xl to text-3xl, font-semibold
  - Body: text-sm to text-base
  - Labels: text-xs uppercase tracking-wide

### Spacing System
- Consistent Tailwind units: p-4, p-6, p-8, gap-4, gap-6
- Chat messages: mb-4 spacing
- Sidebar sections: mb-6 spacing

### Component Library

**Chatbox Component**:
- Glassmorphic container with border and backdrop-blur
- Scrollable message history area
- Fixed input area at bottom with file upload button
- Message bubbles: distinct styling for Buyer vs Seller
- **File Upload**: Accept MP4, PNG, JPG with preview thumbnails

**Sidebar (KOCLUK)**:
- Semi-transparent background with blur
- Sections: Order date, Staff name, Goal (200 char max textarea)
- **Social Media**: Twitter, Discord, Instagram icons with neon glow on hover
- Neon accent borders (cyan/purple)

**Service Guide Triggers**:
- 3-4 clickable text links/buttons (e.g., "PC Tweak Guide", "VOD Review Info")
- Opens modal with clean, textbook-style guide content
- Modal: Centered, glassmorphic, with close button

**Payment Button**:
- Prominent CTA with neon gradient border
- Positioned in sidebar or bottom of chat
- Placeholder link to Shopier

### Visual Effects
- **Glassmorphism**: `backdrop-blur-lg bg-white/10 border border-white/20`
- **Neon Accents**: Cyan (#00ffff) and purple (#a855f7) for highlights, borders, hover states
- **Icons**: lucide-react for consistent style
- **Hover States**: Subtle glow effects on interactive elements

### Animations
- Minimal, purposeful animations only
- Smooth transitions on hover (150ms-300ms)
- Modal fade-in/slide-up entrance

### Accessibility
- Maintain high contrast between text and glassmorphic backgrounds
- Clear focus states with neon outlines
- Keyboard navigable modals

### Technical Structure
- Mock data in `mockData.js` for chat messages and order info
- Component-based architecture (Chatbox, Sidebar, Modal, FileUpload)
- Mobile-first responsive breakpoints

This design creates an immersive, high-end coaching platform interface with a distinctive space aesthetic while maintaining usability and professional functionality.