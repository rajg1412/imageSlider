# Image Viewer Application

Hey! This is a simple image viewer app I built using React. It lets you browse through images with some cool features like zooming, filtering, and navigation controls.


## Features

- **Main image viewer** with previous/next navigation
- **Thumbnail gallery** that shows all images at once
- **Zoom controls** - zoom in, zoom out, or reset to 100%
- **Filter by orientation** - show only landscape or portrait images
- **Filter by size** - filter images by large, medium, or small
- **Progress indicators** showing which image you're currently viewing
- Clean, dark-themed UI with pink accent borders

## How to run it

First, make sure you have Node.js installed on your computer. Then:

1. Clone or download this project
2. Open terminal and navigate to the project folder
3. Install dependencies:
   ```
   npm install
   ```
4. Start the app:
   ```
   npm start
   ```
5. It should open automatically in your browser at `http://localhost:3000`

If it doesn't open automatically, just paste that URL into your browser.

## Project structure

Here's how the files are organized:

```
image-viewer/
├── public/
│   └── index.html
├── src/
│   ├── ImageViewer.js      (main component with all the logic)
│   ├── ImageViewer.css     (all the styling)
│   ├── App.js              (root component)
│   └── index.js            (entry point)
├── package.json
└── README.md
```

The main code is in `ImageViewer.js` and all the styles are in `ImageViewer.css`. I kept it simple - no fancy frameworks or libraries, just React and CSS.

## Tech stack

- **React** - for building the UI and handling state
- **CSS** - for styling (no Tailwind or other CSS frameworks)
- **Unsplash API** - for loading sample images

## How to use

1. **Navigate images**: Click the left/right arrow buttons or click any thumbnail
2. **Zoom**: Use the zoom buttons at the bottom - minus to zoom out, plus to zoom in, or click the percentage to reset
3. **Filter by orientation**: Use the "Do not filter" dropdown to show only landscape or portrait images
4. **Filter by size**: Use the "ALL" dropdown to filter by image size
5. **Combine filters**: You can use both filters together for more specific results

The file counter at the bottom shows how many images are currently displayed versus the total number available.


Thank you
