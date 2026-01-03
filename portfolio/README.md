# 🚀 Siddhesh Datkhile - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, Vite, and modern web technologies for optimal performance and user experience.

![Portfolio Preview](./public/preview.png)

## ✨ Features

### 🎨 **Modern Design**
- **Dark/Light Theme Toggle**: Seamless theme switching with smooth transitions
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### 📱 **Fully Responsive**
- **Mobile-First Approach**: Designed for mobile and scaled up
- **Tablet Optimization**: Perfect experience on all screen sizes
- **Desktop Enhancement**: Utilizes large screen real estate effectively
- **Touch-Friendly**: Proper touch targets and mobile interactions.

### 🛠️ **Technical Features**
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Progressive Web App**: Installable and works offline

### 📧 **Contact Integration**
- **EmailJS Integration**: Direct email sending without backend
- **Form Validation**: Real-time validation with user feedback
- **Loading States**: Professional loading indicators
- **Error Handling**: Graceful error messages and fallbacks

### 🎯 **Sections**
- **Hero**: Eye-catching introduction with profile image and typewriter effect
- **About**: Personal story and professional summary
- **Skills**: Technical skills with animated icons
- **Projects**: Showcase of key projects with GitHub links
- **Education**: Timeline of educational background with animations
- **Contact**: Functional contact form with social links

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.2.0** - Modern React with concurrent features
- **Vite 7.2.4** - Fast build tool and development server

### **Styling & UI**
- **CSS3** - Custom CSS with modern features
- **CSS Grid & Flexbox** - Advanced layout techniques
- **CSS Variables** - Dynamic theming system
- **Google Fonts** - Professional typography (Inter)

### **Functionality**
- **EmailJS** - Client-side email sending
- **Intersection Observer** - Scroll-triggered animations
- **React Hooks** - Modern state management

### **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Vite Plugins** - React fast refresh

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siddheshdatkhile25/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📧 EmailJS Setup (Optional)

To enable the contact form functionality:

1. **Create EmailJS Account**: Visit [EmailJS](https://www.emailjs.com/)
2. **Set up Email Service**: Connect your email provider
3. **Create Email Template**: Design your contact form template
4. **Update Configuration**: Edit `src/emailjs-config.js` with your credentials

Detailed setup instructions available in `EMAILJS_SETUP.md`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Education.jsx      # Education timeline
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Projects.jsx       # Projects showcase
│   │   └── Skills.jsx         # Skills section
│   ├── assets/
│   │   └── skills/            # Skill icons
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   ├── index.css              # Global styles
│   └── emailjs-config.js      # EmailJS configuration
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Customization

### **Personal Information**
- Update personal details in respective components
- Replace profile image in `public/` directory
- Modify social links in `Contact.jsx`

### **Styling**
- Global styles in `src/index.css`
- Component-specific styles within each component
- CSS variables for easy theme customization

### **Content**
- Update projects in `Projects.jsx`
- Modify skills in `Skills.jsx`
- Edit education timeline in `Education.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1200px
- **Extra Large**: > 1600px

## 🌟 Key Features Explained

### **Theme System**
```css
:root {
  --primary: #2563eb;
  --secondary: #64748b;
  --background: #ffffff;
  --text: #1f2937;
  /* ... more variables */
}
```

### **Animation System**
- **Fade In Up**: Section entrance animations
- **Scroll Triggers**: Timeline and skill card animations
- **Hover Effects**: Interactive micro-animations
- **Reduced Motion**: Respects user preferences

### **Form Handling**
- **Real-time Validation**: Instant feedback
- **Loading States**: Professional UX during submission
- **Error Boundaries**: Graceful error handling
- **Success Feedback**: Clear confirmation messages

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Siddhesh Datkhile**

- **Email**: siddheshdatkhile@gmail.com
- **LinkedIn**: [linkedin.com/in/siddhesh-datkhile](https://www.linkedin.com/in/siddhesh-datkhile/)
- **GitHub**: [github.com/siddheshdatkhile25](https://github.com/siddheshdatkhile25)
- **Portfolio**: [Your Portfolio URL]

---

⭐ **Star this repo** if you found it helpful!

Built with ❤️ using React & Vite
