# UI Editor - Interactive Layout Customizer

This project is a web-based UI Editor built with React that allows users to customize interface layouts in real-time.  
It provides a live preview of all changes including typography, layout settings, button styles, and component strokes.  
The interface is modular, responsive, and suitable for experimenting with design configurations interactively.

---

## Features

- Real-time layout editing (background, padding, border radius)
- Typography and button customization with live preview
- Interactive product gallery with dynamic image update
- Product customization panel for color, materials, and finishes
- Context-based state management using React Context API
- Responsive design for desktop and mobile layouts

---

## Tech Stack

- React (Frontend)
- CSS3 for styling
- React Context API for global state
- Font Awesome for icons
- Deployed on Vercel

---

## Project Structure

```
src/
│
├── components/
│   ├── EditorPanel.jsx        # Main layout editor panel for UI customization
│   ├── LayoutDesktop.jsx      # Desktop preview layout
│   ├── ProductGallery.jsx     # Displays product images dynamically
│   ├── ProductView.jsx        # Live preview of product and layout
│   └── ProductCustomizer.jsx  # Handles color and customization
│
├── context/
│   └── EditorContext.jsx      # Provides global editor state using React Context API
│
├── assets/                    # Images stored
│
├── App.js                     # Root component of the application
├── App.css                    # Global styles for layout and components
└── index.js                   # Entry point for React app
```

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the development server
```bash
npm start
```
The app will be available at:
```bash
http://localhost:3000
```

## Deployment

This project is deployed on Vercel and automatically updates with every push to the main branch.

## Developed by Gurjot Singh
