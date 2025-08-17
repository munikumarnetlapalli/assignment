# React Component Library

## Overview

This is a production-ready React component library built with TypeScript, featuring reusable UI components with comprehensive Storybook documentation. The project provides two main components - InputField and DataTable - built on top of shadcn/ui foundation components. The library emphasizes accessibility, theming support (light/dark modes), and TypeScript safety with a modern development workflow using Vite and Storybook.

## Recent Changes

- **August 17, 2025**: Added complete Vercel deployment configuration with automatic build detection
- **August 17, 2025**: Created comprehensive README with detailed project structure documentation
- **August 17, 2025**: Implemented GitHub Actions workflow for automated deployments
- **August 17, 2025**: Optimized .gitignore for better version control
- **August 17, 2025**: Added DEPLOYMENT.md guide covering multiple deployment platforms
- **August 17, 2025**: Verified successful Storybook build (v8.6.14) with all components functional

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety and modern React features
- **Component-based architecture** with isolated, reusable UI components
- **Vite** as the build tool for fast development and optimized production builds
- **Storybook** for component documentation, testing, and isolated development
- **shadcn/ui** as the foundation component library providing consistent design system primitives

### Styling System
- **TailwindCSS** for utility-first styling with consistent design tokens
- **CSS custom properties** for theme variables supporting light/dark modes
- **Class Variance Authority (CVA)** for component variant management
- **Responsive design** patterns with mobile-first approach

### Component Design Patterns
- **Compound component pattern** for complex components like DataTable
- **Polymorphic components** using Radix UI Slot for flexible composition
- **Controlled/uncontrolled component support** with proper state management
- **Forward ref pattern** for proper DOM reference handling
- **Generic TypeScript interfaces** for type-safe component props

### Development Workflow
- **Monorepo structure** with client/server separation
- **TypeScript path mapping** for clean imports (@/ aliases)
- **Hot Module Replacement (HMR)** for fast development iteration
- **Component story-driven development** with comprehensive Storybook setup

### State Management
- **React Hook Form** for form state management with validation
- **TanStack Query** for server state management and caching
- **React Context** for theme and global state where needed
- **Local component state** using useState and useReducer hooks

### Backend Integration
- **Express.js** server with TypeScript support
- **Drizzle ORM** for database operations with PostgreSQL
- **Shared schema definitions** between client and server
- **RESTful API design** with proper error handling

### Accessibility Features
- **ARIA labels and attributes** for screen reader support
- **Keyboard navigation** support for all interactive components
- **Focus management** with proper focus trapping and restoration
- **Color contrast compliance** with WCAG guidelines

### Build and Deployment
- **ESBuild** for server-side bundling and optimization
- **Vite** for client-side bundling with tree shaking
- **TypeScript compilation** with strict type checking
- **Development/production environment separation**

## External Dependencies

### Core Framework Dependencies
- **React 18** - Modern React with concurrent features
- **TypeScript** - Static type checking and enhanced developer experience
- **Vite** - Fast build tool and development server

### UI and Styling
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful, customizable SVG icons
- **Class Variance Authority** - Component variant management

### Development Tools
- **Storybook** - Component development and documentation platform
- **PostCSS** - CSS processing with Autoprefixer
- **ESLint** - Code linting and formatting

### Backend Infrastructure
- **Express.js** - Web framework for Node.js
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **PostgreSQL** - Production database (via @neondatabase/serverless)

### State Management and Forms
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Performant forms with validation
- **Zod** - Schema validation library

### Utility Libraries
- **date-fns** - Date manipulation and formatting
- **clsx** - Conditional className utility
- **nanoid** - Unique ID generation