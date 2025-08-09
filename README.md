# Solar AI - Landing Page

A modern and animated loading site for the Solar AI - Tanning Assistant app with automatic redirection to the App Store.

## 🌟 Features

- **Elegant loading animation** with an animated sun
- **Smooth progress bar** with brilliant effects
- **Automatic redirection** to the App Store after loading
- **Responsive design** adapted to all screens
- **Modern CSS3 animations** smooth and fluid

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Launch in development mode:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📱 How it works

1. **Loading**: Progress animation from 0% to 100%
2. **Display**: Presentation of the app's key features
3. **Redirection**: Automatic redirection to the App Store after 2 seconds

## 🎨 Customization

### Modify redirect time
In `src/App.tsx`, line 17:
```typescript
setTimeout(() => {
  window.location.href = 'https://apps.apple.com/us/app/solar-ai-tanning-assistant/id6745706560';
}, 2000); // Modify this value (in milliseconds)
```

### Modify loading speed
In `src/App.tsx`, line 20:
```typescript
return prev + 2; // Modify this value to change the speed
```

### Customize colors
In `src/App.css`, modify the gradients:
```css
background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 50%, #4ecdc4 100%);
```

## 🔗 App Store Link

The app redirects to: https://apps.apple.com/us/app/solar-ai-tanning-assistant/id6745706560

## 🛠 Technologies used

- **React 18** with TypeScript
- **CSS3** with advanced animations
- **Create React App** for scaffolding

## 📱 Solar AI Features

- 🔍 **Facial scan** to detect skin type
- 📱 **Personalized routine** based on UV index
- ⏰ **Guided timers** and reminders
- 🌞 **Safe and even** tanning

## 🌐 Deployment

To deploy in production:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `build/` folder contains the static files ready for deployment

3. Compatible with all hosting services:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## 📄 License

© 2025 JT Collaborative Sales LLC. All rights reserved.
