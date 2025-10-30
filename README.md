# Sigma Browser Website

Static website for Sigma Browser.

## Structure
- index.html — Landing page
- download.html — Download page with DMG links
- releases/ — Contains Sigma-1.0.0-arm64.dmg and Sigma-1.0.0.dmg
- styles/ — CSS
- scripts/ — JavaScript
- assets/ — Images (logo)

## Local preview
Open `index.html` in a browser, or use a simple HTTP server:

- Python 3: `python3 -m http.server`
- Node: `npx http-server .`

Then visit http://localhost:8000 (or the port shown).

## GitHub Pages
- If this repo is user/organization pages (repo named `<user>.github.io`): site will be served from root.
- If it's a project page, enable Pages and set Source to `main`/`master` branch, `/root` directory.

All links are relative and will work under either configuration.

