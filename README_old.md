# Game Developer Portfolio 🎮

A professional, modular, and responsive portfolio website showcasing game development projects and skills.

## ✨ Features

- **Modern Design**: Clean, professional interface with unique gaming aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and dynamic content
- **Modular**: Easy to customize and extend with new projects
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Live Demo

Visit the live portfolio: [Your GitHub Pages URL]

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Hosting**: GitHub Pages

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About**: Personal information with animated statistics
3. **Projects**: Filterable portfolio with detailed modals
4. **Skills**: Interactive skill bars with animations
5. **Contact**: Functional contact form with validation

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. **Customize the content:**
   - Update personal information in `index.html`
   - Replace project images in `assets/img/`
   - Modify project data in `assets/js/main.js`
   - Update contact information

3. **Deploy to GitHub Pages:**
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Select source as main branch

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   ├── img/                # Images and project screenshots
│   └── CV/                 # CV/Resume files
├── README.md               # This file
└── .gitignore             # Git ignore file
```

## 🎨 Customization

### Adding New Projects

1. Add project images to `assets/img/ProjectName/`
2. Update the `projectsData` array in `assets/js/main.js`:

```javascript
{
    id: 7,
    title: "Your Project Name",
    description: "Brief description",
    image: "assets/img/YourProject/main-image.jpg",
    technologies: ["Unity", "C#", "Mobile"],
    category: "mobile",
    links: {
        demo: "https://your-demo-link.com",
        github: "https://github.com/your-repo"
    },
    gallery: [
        "assets/img/YourProject/screenshot1.jpg",
        "assets/img/YourProject/screenshot2.jpg"
    ],
    fullDescription: "Detailed project description..."
}
```

### Updating Personal Information

- **Contact Details**: Update email, LinkedIn, GitHub links in `index.html`
- **About Section**: Modify the about text and statistics
- **Skills**: Update the skills section with your technologies
- **CV**: Replace `assets/CV/CV.pdf` with your resume

### Color Scheme

The portfolio uses a modern dark theme with cyan accents. Main colors:
- Primary: `#64ffda` (Cyan)
- Background: `#0a0a0a` (Dark)
- Secondary: `#111` (Dark Gray)
- Text: `#fff` (White), `#ccc` (Light Gray)

## 🔧 Features Breakdown

### Interactive Elements
- Typewriter effect on hero title
- Floating animation elements
- Smooth scroll navigation
- Project filtering system
- Skill progress animations
- Modal popups for project details

### Performance Features
- Lazy loading images
- Throttled scroll events
- Optimized animations
- Minified assets
- Efficient DOM manipulation

### Accessibility Features
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📋 TODO / Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add more animation effects
- [ ] Create admin panel for easy content updates
- [ ] Add analytics integration
- [ ] Implement PWA features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)
- **Portfolio**: [Your Live Portfolio](https://yourusername.github.io)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern game development portfolios
- Open source community for best practices

---

**Made with ❤️ by a passionate Game Developer**

