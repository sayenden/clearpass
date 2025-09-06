# ClearPass Frontend

React + TypeScript frontend for ClearPass AI-powered passport photo platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Add your Gemini API key to .env.local

# Start development server
npm run dev
```

## 🎯 Features

- **Multi-step workflow**: Upload → Select Country → AI Processing → Download
- **Camera integration** with AR guidance overlays
- **AI background replacement** using Gemini API
- **Real-time compliance checking**
- **Interactive photo editor** with zoom and positioning
- **Dark mode support**
- **Responsive design**

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Google Gemini API** for AI processing
- **React Dropzone** for file uploads

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   └── main.tsx        # Entry point
├── App.tsx             # Main application component
├── types.ts            # TypeScript definitions
├── constants.ts        # Country/document configurations
└── vite.config.ts      # Vite configuration
```

## 🔧 Configuration

### Environment Variables

- `VITE_GEMINI_API_KEY` - Your Gemini API key
- `VITE_API_URL` - Backend API URL
- `VITE_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

### Supported Countries

Currently supports 8+ countries with 10+ document types:
- United States (Passport & Visa)
- Canada (Passport & Visa)
- United Kingdom (Passport)
- Australia (Passport)
- Germany (Passport & Visa)
- Japan (Passport & Visa)
- China (Passport & Visa)
- India (Passport & Visa)

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Mobile Support

- Responsive design for all screen sizes
- Camera access on mobile devices
- Touch-friendly interface
- Progressive Web App ready
