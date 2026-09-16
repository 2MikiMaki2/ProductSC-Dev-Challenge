# Spotify Web Player — Clone

A recreation of Spotify's logged-in web player, built with Vue 3 and Vite.

**Live demo:** [Link](https://product-sc-dev-challenge.vercel.app/)

## What's implemented

**Homepage recreation** — Four-region shell (top bar, library sidebar, browse column, now-playing panel, play bar) with independently scrolling columns.

**Interactive flow: browse → album → play**
Click an album in the library sidebar to open its track list in the main column, then play any track. Audio plays through a single `<audio>` element driven by the store. Play/pause, skip, and auto-advance on track end all work.

**Data view with interaction** — Search filters the track list by title and artist in real time, with an empty state for no matches.

## Running locally

Requires Node 20+.

\```bash
cd frontend
npm install
npm run dev
\```

## Architecture

- **`stores/player.js`** — Single Pinia store holding all playback state. Components read from it directly rather than passing props between siblings.
- **`App.vue`** — Owns the one `<audio>` element. Two watchers bridge store state to the media element: one loads a new source when the track changes, one calls `play()`/`pause()` when `isPlaying` flips.
- **Albums are derived, not stored.** `albums` is a computed getter that groups `tracks.json` by album name, so there's one source of truth for the data.

## Notes on data

Track metadata is mock data in `src/data/tracks.json`. Audio files are royalty-free placeholders.

Spotify's Web API can't provide audio for this kind of project: as of November 2024, `preview_url` returns null for newly registered apps, and full playback via the Web Playback SDK requires the listener to have Premium. Mock data keeps the demo working for anyone who opens the link.

## Not implemented

Lyrics, queue management, device switching, and the fullscreen/mini-player controls are rendered as static UI for visual fidelity but are non-functional.