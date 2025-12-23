# 🍰 Sweet Slider - Interactive Cake Gallery

A beautiful, interactive circular slider showcasing delicious cakes with smooth animations powered by Framer Motion.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-pink)

## ✨ Features

- 🎠 **Circular Carousel** - Unique circular slider design with rotating cake images
- 🎨 **Dynamic Backgrounds** - Background colors transition smoothly with each cake
- ⚡ **Auto-play** - Automatic rotation through cakes (pause on hover)
- ⌨️ **Keyboard Navigation** - Use arrow keys to navigate left/right
- 📱 **Touch/Swipe Support** - Mobile-friendly swipe gestures
- 🎯 **Active Indicators** - Dots showing current position with click navigation
- 🪄 **Smooth Animations** - Powered by Framer Motion for silky transitions
- 🔝 **Glass Navbar** - Modern glassmorphism effect on navigation bar
- 💫 **Hover Effects** - Interactive elements with smooth hover states

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd sweet-slider
```

2. Navigate to the project directory
```bash
cd vite-project
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with modern effects

## 📁 Project Structure

```
sweet-slider/
├── vite-project/
│   ├── public/
│   │   └── images/        # Cake images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx   # Main slider component
│   │   │   ├── Hero.css
│   │   │   ├── Navbar.jsx # Navigation bar
│   │   │   └── Navbar.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## 🎮 Controls

- **Arrow Keys** - Navigate left/right through cakes
- **Click Arrows** - Use on-screen arrow buttons
- **Swipe** - Swipe left/right on touch devices
- **Click Dots** - Jump to specific cake
- **Play/Pause** - Toggle auto-play with bottom button
- **Hover** - Auto-play pauses when hovering over slider

## 🎨 Customization

### Adding New Cakes

Edit the `cakes` array in `src/components/Hero.jsx`:

```javascript
const cakes = [
  {
    name: "Your Cake",
    img: "/images/your-cake.png",
    leftImg: "/images/your-cake1.png",
    rightImg: "/images/your-cake2.png",
    title: "Your Cake Title",
    description: "Your delicious description...",
    background: "your-gradient",
    leftStyle: { /* positioning */ },
    rightStyle: { /* positioning */ }
  },
  // ... more cakes
];
```

### Adjusting Auto-play Speed

Change the interval in `src/components/Hero.jsx`:

```javascript
const interval = setInterval(() => {
  move("right");
}, 4000); // Change this value (in milliseconds)
```

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Original design inspiration from DvBakes
- Framer Motion for amazing animation capabilities
- React and Vite communities for excellent tools

---

Made with ❤️ and 🍰
