// Script to fetch Spotify podcast data at build time
const fs = require('fs');
const path = require('path');

// Load environment variables
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SHOW_ID = process.env.SPOTIFY_SHOW_ID || '1oTWO4OeEteztXXyeafF1C';

// Validate environment variables
if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    console.error('❌ Error: Missing Spotify API credentials');
    console.error('Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables');
    console.error('Or create a .env file based on .env.example');
    process.exit(1);
}

async function getAccessToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`,
    });

    const data = await response.json();
    return data.access_token;
}

async function getShowData(token) {
    const response = await fetch(
        `https://api.spotify.com/v1/shows/${SHOW_ID}?market=VN`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.json();
}

async function getEpisodes(token, limit = 20) {
    const response = await fetch(
        `https://api.spotify.com/v1/shows/${SHOW_ID}/episodes?market=VN&limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.json();
}

function formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    return `${minutes} phút`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

async function main() {
    console.log('🎧 Fetching Spotify podcast data...');

    try {
        const token = await getAccessToken();
        console.log('✅ Got access token');

        const showData = await getShowData(token);
        console.log(`✅ Got show data: ${showData.name}`);

        const episodesData = await getEpisodes(token, 50);
        console.log(`✅ Got ${episodesData.items.length} episodes`);

        // Process and format data
        const podcastData = {
            show: {
                id: showData.id,
                name: showData.name,
                description: showData.description,
                publisher: showData.publisher,
                totalEpisodes: showData.total_episodes,
                images: showData.images,
                externalUrl: showData.external_urls.spotify,
            },
            episodes: episodesData.items.map((ep) => ({
                id: ep.id,
                name: ep.name,
                description: ep.description.substring(0, 200) + '...',
                duration: formatDuration(ep.duration_ms),
                durationMs: ep.duration_ms,
                releaseDate: ep.release_date,
                releaseDateFormatted: formatDate(ep.release_date),
                image: ep.images[0]?.url || showData.images[0]?.url,
                spotifyUrl: ep.external_urls.spotify,
                audioPreview: ep.audio_preview_url,
            })),
            fetchedAt: new Date().toISOString(),
        };

        // Save to public directory
        const outputPath = path.join(__dirname, '../public/data/spotify-podcast.json');

        // Create directory if not exists
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(outputPath, JSON.stringify(podcastData, null, 2));
        console.log(`✅ Saved podcast data to ${outputPath}`);
        console.log(`📊 Total episodes: ${podcastData.episodes.length}`);

    } catch (error) {
        console.error('❌ Error fetching Spotify data:', error);
        process.exit(1);
    }
}

main();
