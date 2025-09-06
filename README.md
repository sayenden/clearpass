# ClearPass - Passport Photo Validator

AI-powered passport and visa photo compliance validation platform.

## Features

- **Requirements Engine**: Country-specific photo requirements (US, UK, India)
- **Real-time Validation**: Instant compliance checking with detailed feedback
- **Face Detection**: Automated face and landmark detection
- **Background Analysis**: Color validation and compliance checking
- **Multi-format Support**: JPEG, PNG with size optimization

## Quick Start

```bash
# Install dependencies
npm install

# Add Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Architecture

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Validation**: Client-side photo processing with Canvas API
- **Requirements**: JSON-based rules engine for country specifications
- **Face Detection**: MediaPipe/TensorFlow.js integration (planned)

## MVP Features Implemented

✅ Requirements engine for top 4 document types  
✅ Photo upload and preview  
✅ Basic validation (dimensions, file size, background)  
✅ Real-time feedback with error/warning display  
✅ Responsive UI with country/document selection  

## Next Steps

- [ ] Integrate MediaPipe for accurate face detection
- [ ] Add photo enhancement (background removal, cropping)
- [ ] Implement print sheet generation
- [ ] Add Stripe payment integration
- [ ] Build API endpoints for enterprise use
- [ ] Add human QA workflow

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Canvas API for image processing
- MediaPipe (planned)
- Stripe (planned)
- Prisma + PostgreSQL (planned)
