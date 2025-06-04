# Albany Prayer Group (APG) Website UI

This is the UI for the Albany Prayer Group fellowship website. A modern, responsive Angular application designed to connect believers and facilitate community engagement.

**Repository Purpose**: Communication platform for a group of believers

**Related Repository**: [APG Fellowship](https://github.com/johnpole/apg-fellowship)

## 🌟 Features

- **Responsive Design**: Modern, mobile-first design that works on all devices
- **Multi-language Support**: Built-in i18n system (currently English)
- **Contact Form**: EmailJS-powered contact form that sends real emails
- **Verse Slideshow**: Rotating Bible verse images in the hero section
- **Fellowship Information**: Comprehensive information about prayer meetings and fellowship
- **Professional Branding**: Integrated APG logo and consistent styling

## 🚀 Live Demo

The website showcases:
- Prayer fellowship meeting information
- Community testimonies and stories
- Children's ministry details
- Event calendar integration
- Contact form with email functionality

## 🛠️ Technology Stack

- **Framework**: Angular 20.0.0
- **Language**: TypeScript
- **Styling**: SCSS with CSS custom properties
- **Build Tool**: Angular CLI with Vite
- **Email Service**: EmailJS for contact form
- **Icons**: Custom APG branding assets

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 20.19+ or 22.12+ or 24.0+)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/johnpole/apg-fellowship.git
   cd apg-fellowship/apg-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (for contact form)**
   ```bash
   cp src/environments/emailjs-config.example.ts src/environments/emailjs-config.ts
   ```
   Then edit `src/environments/emailjs-config.ts` with your EmailJS credentials.
   
   **See [EMAILJS-SETUP.md](EMAILJS-SETUP.md) for detailed instructions.**

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## 📧 Email Configuration

The contact form uses EmailJS to send real emails. To set this up:

1. Create a free account at [EmailJS](https://emailjs.com)
2. Follow the setup guide in `EMAILJS-SETUP.md`
3. Update your credentials in `src/environments/emailjs-config.ts`

**Note**: Never commit your actual EmailJS credentials to Git. They're automatically ignored by `.gitignore`.

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# The build artifacts will be stored in the `dist/` directory
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1440px+)

## 🎨 Customization

### Themes
- CSS custom properties for easy color scheme changes
- Consistent spacing and typography system
- Dark/light mode support ready

### Content
- All text content is managed through the i18n system
- Easy to add new languages
- Centralized content management

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run e2e` - Run end-to-end tests

### Project Structure

```
src/
├── app/
│   ├── components/         # Angular components
│   │   ├── hero/          # Landing section
│   │   ├── about/         # About section
│   │   ├── prayer/        # Prayer meetings info
│   │   ├── contact/       # Contact form
│   │   └── ...
│   ├── services/          # Angular services
│   │   ├── i18n.ts       # Internationalization
│   │   └── email.service.ts # EmailJS integration
│   └── ...
├── environments/          # Configuration files
├── assets/               # Static assets (images, fonts)
└── public/              # Public assets (favicon, etc.)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Albany Prayer Group fellowship resources.

## 📞 Contact

For questions about the fellowship or this website:
- Email: johnpole555@gmail.com
- Fellowship Info: [APG Fellowship Repository](https://github.com/johnpole/apg-fellowship)

---

**Built with ❤️ for the Albany Prayer Group community**
