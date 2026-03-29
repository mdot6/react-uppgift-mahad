# React Bibliotekskategorier App

En React-applikation som integrerar med ett ASP.NET Core API för att visa bibliotekskategorier.

## Funktionalitet

- 📚 Hämtar kategorier från ett REST API (Kategori-API)
- 🎨 Vacker UI med gradient-bakgrund och interaktiva kort
- 📱 Responsiv design för mobil och desktop
- ⚡ Real-time data från Azure-hosted API

## Teknologi

- **Frontend:** React 19 med Vite
- **Styling:** CSS3 (Grid, Flexbox, Gradients)
- **API Integration:** Fetch API
- **Backend:** ASP.NET Core Web API (Kategori-API)
- **Databas:** SQLite med Entity Framework Core

## Installation
```bash
# Klona projektet
git clone https://github.com/mdot6/react-uppgift-mahad.git
cd react-uppgift-mahad

# Installera dependencies
npm install

# Starta utvecklingsservern
npm run dev
```

Appen körs då på `http://localhost:5174`

## Konfiguration

Appen är konfigurerad att anropa API:et på:
```
https://kategori-cbc6adfyhwafa3fd.norwayeast-01.azurewebsites.net/api/categories

```

## API Integration

Appen hämtar kategoridata från Kategori-API:et via en GET-request:
```javascript
fetch('https://kategori-cbc6adfyhwafa3fd.norwayeast-01.azurewebsites.net/api/categories')
  .then(res => res.json())
  .then(data => setCategories(data))
```

## Struktur
```
src/
├── App.jsx       # Huvudkomponent med API-anrop
├── App.css       # Styling (Grid, hover-effekter)
├── main.jsx      # Entry point
└── index.css     # Global styling
```

## Features

 Hämtar alla kategorier från API:et
 Visar kategorier i ett responsivt grid
 Hover-effekt på kort (translateY, shadow)
 Loading- och error-hantering
 Gradient-bakgrund

 AI-användning

AI hjälpte med:
- Strukturering av React-komponenten med `useEffect` och `useState`
- CSS-styling för moderna hover-effekter och gradient-bakgrund
- Error-handling för API-anrop

All AI-genererad kod modifierades för att:
- Anpassa sig till detta projekts API-struktur
- Förbättra visuella effekter (gradient, box-shadow)
- Lägga till loading-state och error-rendering

 Körkrav

- Node.js 18+
- npm eller yarn
- Modern webbläsare (Chrome, Firefox, Safari, Edge)

 Framtida förbättringar

- [ ] Lägg till detalj-sida för varje kategori
- [ ] Implementera sökning/filtrering
- [ ] Lägg till Create/Update/Delete-funktionalitet
- [ ] Autentisering och användarhantering


 

## Författare

Mahad (mdot6)
