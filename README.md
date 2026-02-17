# D Design Hub - Premium Interior Design Website

D Design Hub is a modern, responsive interior design portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It showcases premium interior design services with elegant animations and a sophisticated aesthetic.

## Features

- **Modern & Responsive Design**: built with Tailwind CSS for a seamless experience across all devices.
- **Elegant Animations**: Smooth transitions and scroll animations powered by Framer Motion.
- **Dark Mode Compatible**: Theming support for light and dark modes (customizable).
- **Interactive Components**:
  - Hero Section with call-to-action
  - Services Overview
  - Portfolio Gallery
  - Testimonials Carousel with profile images
  - Contact Form
- **Legal Pages**: Privacy Policy and Terms of Service included.
- **SEO Optimized**: Semantic HTML and Next.js optimization.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Outfit, Quicksand, Italiana)

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/d-design-hub.git
    cd d-design-hub
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Main application code (App Router)
    - `components/`: Reusable UI components and sections
    - `layout.tsx`: Root layout including Header and Footer
    - `page.tsx`: Home page assembling all sections
- `public/`: Static assets (images, icons)

## Customization

- **Colors**: Modified in `app/globals.css` via CSS variables and Tailwind configuration.
- **Content**: Update the data arrays in individual section components (e.g., `Testimonials.tsx`, `Services.tsx`) to change the content.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
