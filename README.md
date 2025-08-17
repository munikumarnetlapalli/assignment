# React Component Library

A production-ready React + TypeScript component library featuring reusable UI components with comprehensive Storybook documentation. Built with modern tools and best practices for scalable component development.

## 🚀 Live Demo

Visit the live Storybook documentation: [Your Vercel URL]

## ✨ Features

- **Modern React Components**: Built with React 18 and TypeScript for type safety
- **Comprehensive Documentation**: Interactive Storybook with examples and controls
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Accessibility**: ARIA compliant components with keyboard navigation
- **Theme Support**: Light and dark mode with custom themes
- **Production Ready**: Optimized builds and deployment configuration

## 🧩 Components

### InputField
A versatile input component with built-in validation, multiple variants, and accessibility features.

**Features:**
- Multiple input types (text, email, password, etc.)
- Built-in validation with error states
- Label and helper text support
- Responsive sizing options
- Accessibility compliant

### DataTable
A powerful data table component with sorting, filtering, and pagination capabilities.

**Features:**
- Generic TypeScript interface for type safety
- Sortable columns with custom sort functions
- Built-in search and filtering
- Responsive design with mobile optimization
- Customizable row actions
- Loading and empty states

## 📁 Project Structure

```
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── InputField/          # InputField component
│   │   │   │   ├── InputField.tsx   # Component implementation
│   │   │   │   └── InputField.stories.tsx # Storybook stories
│   │   │   ├── DataTable/           # DataTable component
│   │   │   │   ├── DataTable.tsx    # Component implementation
│   │   │   │   └── DataTable.stories.tsx # Storybook stories
│   │   │   └── ui/                  # shadcn/ui base components
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── use-mobile.tsx       # Mobile detection hook
│   │   │   └── use-toast.ts         # Toast notification hook
│   │   ├── lib/                     # Utility functions and configurations
│   │   │   ├── queryClient.ts       # TanStack Query setup
│   │   │   └── utils.ts             # Utility functions
│   │   ├── pages/                   # Application pages
│   │   │   ├── home.tsx             # Component showcase page
│   │   │   └── not-found.tsx        # 404 error page
│   │   ├── App.tsx                  # Main application component
│   │   ├── index.css                # Global styles and theme variables
│   │   └── main.tsx                 # Application entry point
│   └── index.html                   # HTML template
├── server/                          # Backend Express server
│   ├── index.ts                     # Server entry point
│   ├── routes.ts                    # API route definitions
│   ├── storage.ts                   # Storage interface and implementation
│   └── vite.ts                      # Vite server integration
├── shared/                          # Shared types and schemas
│   └── schema.ts                    # Zod schemas and TypeScript types
├── .storybook/                      # Storybook configuration
│   ├── main.ts                      # Storybook main configuration
│   └── preview.ts                   # Global decorators and parameters
├── storybook-static/                # Built Storybook files (generated)
├── attached_assets/                 # Project assets and attachments
├── components.json                  # shadcn/ui configuration
├── drizzle.config.ts               # Database ORM configuration
├── package.json                     # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # TailwindCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build configuration
├── vercel.json                     # Vercel deployment configuration
└── replit.md                       # Project documentation and preferences
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-component-library
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Start Storybook for component development:
```bash
npx storybook dev -p 6006
```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npx storybook dev` - Start Storybook development server
- `npx storybook build` - Build Storybook for production

## 🎨 Styling System

The project uses a modern styling approach with:

- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **CSS Custom Properties**: Theme variables for consistent design tokens
- **Class Variance Authority**: Type-safe component variants
- **shadcn/ui**: High-quality component primitives built on Radix UI

### Theme Configuration

The theme system supports light and dark modes with custom properties defined in `client/src/index.css`. Components automatically inherit theme variables and provide consistent styling across modes.

## 📖 Storybook Documentation

Access comprehensive component documentation through Storybook:

- **Interactive Examples**: Live component playground with editable props
- **Documentation**: Auto-generated docs from TypeScript interfaces
- **Design Tokens**: Visual representation of colors, typography, and spacing
- **Accessibility**: Built-in accessibility testing and guidelines

## 🚀 Deployment

### Automatic Deployment with Vercel

This project is configured for automatic deployment on Vercel:

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Automatic Detection**: Vercel automatically detects the configuration from `vercel.json`
3. **Build Process**: Runs `npx storybook build` to generate static files
4. **Output Directory**: Serves files from `storybook-static/`
5. **Live Updates**: Automatically redeploys on every push to main branch

### Vercel Configuration

The `vercel.json` file includes:

- **Build Command**: `npx storybook build`
- **Output Directory**: `storybook-static`
- **Install Command**: `npm install`
- **Framework**: Static site generation
- **Rewrites**: Proper routing for SPA behavior

### Manual Deployment

To deploy manually:

1. Build Storybook:
```bash
npx storybook build
```

2. Deploy the `storybook-static` folder to any static hosting service

## 🧪 Component Development Workflow

### Creating New Components

1. **Create Component Directory**: Add new component in `client/src/components/`
2. **Component Implementation**: Build the component with TypeScript interfaces
3. **Storybook Stories**: Create comprehensive stories showcasing all variants
4. **Documentation**: Add JSDoc comments for auto-generated documentation
5. **Testing**: Verify component behavior across different props and states

### Best Practices

- **TypeScript First**: Define clear interfaces and prop types
- **Accessibility**: Include proper ARIA labels and keyboard navigation
- **Responsive Design**: Ensure components work across all screen sizes
- **Theme Compatibility**: Support both light and dark themes
- **Documentation**: Comprehensive Storybook stories with examples

## 🔧 Technical Stack

### Core Technologies
- **React 18**: Modern React with concurrent features
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework

### Development Tools
- **Storybook 8**: Component development and documentation
- **shadcn/ui**: High-quality component primitives
- **Radix UI**: Accessible component foundations
- **TanStack Query**: Server state management
- **React Hook Form**: Form state management with validation

### Backend Integration
- **Express.js**: Web framework for API endpoints
- **Drizzle ORM**: Type-safe database operations
- **PostgreSQL**: Production database
- **Zod**: Runtime type validation

## 📋 Environment Variables

For local development, you may need to configure:

```bash
# Database (if using backend features)
DATABASE_URL=your_database_url

# API Keys (if using external services)
VITE_API_KEY=your_api_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes with proper TypeScript types
4. Add Storybook stories for new components
5. Ensure all components are accessible
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- **Documentation**: Visit the live Storybook for detailed component docs
- **Issues**: Report bugs and feature requests via GitHub issues
- **Discussion**: Join the community discussion for questions and ideas

---

**Built with ❤️ using React, TypeScript, and Storybook**