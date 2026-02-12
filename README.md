# Panto

A modern, responsive ecommerce website for premium furniture featuring chairs, beds, sofas, and lamps. Built with cutting-edge web technologies for optimal performance and user experience.

**Repository**: [https://github.com/RafikElRahmi/panto.git](https://github.com/RafikElRahmi/panto.git)

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI (headless components)
- **Component Variants**: Class Variance Authority (CVA)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Font Optimization**: Next.js Font Loading
- **Code Quality**: ESLint, Prettier

## ✨ Features

- **Modern Design**: Clean, geometric aesthetic with premium feel
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Comprehensive metadata and social sharing
- **Accessibility**: Built with Radix UI for screen reader support
- **Type Safe**: Full TypeScript coverage
- **Component System**: Reusable UI components with CVA variants

## 🛠 Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd panto
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Design System

### Typography Scale

- **Display**: Montserrat Bold (font-montserrat font-bold)
- **Headings**: Montserrat SemiBold (font-montserrat font-semibold)
- **Body**: DM Sans Regular (font-dm-sans font-normal)
- **Accent**: Inter Regular (font-inter font-normal)

### Color Palette

- **Primary**: Custom brand colors
- **Neutral**: Tailwind gray scale
- **Semantic**: Success, warning, error states

### Component Architecture

- **Base Components**: Radix UI primitives
- **Styled Components**: Tailwind classes with CVA variants
- **Layout Components**: Page sections and containers
- **Feature Components**: Product cards, navigation, etc.

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use semantic HTML and ARIA attributes
- Maintain component composition patterns

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technical Choices

### Typography

The Figma design uses **Gilroy**, which is a paid commercial font.
Without access to the license, I opted for **Montserrat** as an alternative,
as it has very similar geometric characteristics to Gilroy
(geometric, modern, with comparable proportions).

Alternative tested: Plus Jakarta Sans (also visually very close)
