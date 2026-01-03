# Thuận Podcast 🎙️

A modern, elegant podcast website built with Next.js, featuring automatic Spotify podcast data fetching and a beautiful, responsive design.

## ✨ Features

- **Spotify Integration**: Automatically fetches and displays podcast episodes from Spotify
- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in SEO best practices with meta tags and sitemap
- **Static Generation**: Fast page loads with Next.js static site generation
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Modern utility-first CSS framework for styling

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API**: [Spotify Web API](https://developer.spotify.com/documentation/web-api)

## 📋 Prerequisites

- Node.js 18+ and npm
- Spotify Developer Account (for API credentials)

## 🛠️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/vi-vanhuy/thuanpodcast.git
cd thuanpodcast
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Spotify API

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app or use an existing one
3. Copy your **Client ID** and **Client Secret**
4. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

5. Edit `.env` and add your credentials:

```env
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_SHOW_ID=1oTWO4OeEteztXXyeafF1C
```

> **Note**: The `SPOTIFY_SHOW_ID` is the ID from your podcast's Spotify URL. You can find it in the URL: `https://open.spotify.com/show/YOUR_SHOW_ID`

### 4. Fetch Spotify Data

The build process automatically fetches the latest podcast data, but you can also fetch it manually:

```bash
npm run fetch-spotify
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Build for Production

```bash
npm run build
npm start
```

The build script will automatically fetch the latest podcast data before building.

## 📁 Project Structure

```
thuanpodcast/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── podcast/           # Podcast pages
├── src/
│   ├── components/        # React components
│   ├── views/            # Page views
│   └── hooks/            # Custom React hooks
├── public/
│   ├── data/             # Generated Spotify data
│   └── images/           # Static images
├── scripts/
│   └── fetch-spotify.js  # Spotify data fetcher
├── .env.example          # Example environment variables
└── package.json
```

## 🔒 Security

- **Never commit** your `.env` file to version control
- The `.env.example` file contains only placeholder values
- Regenerate your Spotify API credentials if they are accidentally exposed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

**Vi Van Huy**
- GitHub: [@vi-vanhuy](https://github.com/vi-vanhuy)

## 🙏 Acknowledgments

- Spotify for their excellent Web API
- Next.js team for the amazing framework
- Radix UI for the accessible component primitives

---

Made with ❤️ and ☕
