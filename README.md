# Albertsons Enterprise App Store

A modern enterprise application store for Albertsons employees to install, request, and manage enterprise software applications.

## 🚀 Features

- **Professional UI**: Clean, modern interface with Albertsons branding
- **App Management**: Browse, install, and request enterprise applications
- **Multi-select Filtering**: Category-based filtering with tabs (All/Free/Paid)
- **Request Tracking**: Comprehensive request management with status tracking
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Side Panel**: Detailed app information similar to file explorer
- **Search Functionality**: Find apps and requests quickly

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS v4 with custom Albertsons color palette
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)
- **Notifications**: Sonner

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js and configure build settings
3. Set environment variables if needed
4. Deploy!

### Manual Deployment

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

## 🏗 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev


## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Shadcn/ui components
│   └── [other]/       # Feature components
├── services/          # API services
├── types/             # TypeScript types
├── data/              # Mock data
├── config/            # Configuration
└── styles/            # Global styles
```

## 🎨 Design System

- **Primary Color**: Albertsons Blue (#0066CC)
- **Secondary Colors**: Light blue variants
- **Typography**: System font stack with proper hierarchy
- **Responsive**: Mobile-first design approach
- **Accessibility**: ARIA compliant with keyboard navigation

## 🔧 Configuration

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Enterprise software for Albertsons internal use.