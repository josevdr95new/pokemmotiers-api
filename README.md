# PokeMMO Tiers API

A simple API that provides PokeMMO data organized by competitive tiers (OU, UU, NU).

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- Wrangler CLI

```bash
npm install -g wrangler
```

```bash
git clone https://github.com/josevdr95new/pokemmotiers-api.git
```
```bash
cd pokemmotiers-api
```

```bash
wrangler dev worker.js
```

📚 API Endpoints
```bash
http://127.0.0.1:8787/Endpoint
```
| Endpoint               | Description                                                   |
|------------------------|---------------------------------------------------------------|
| `GET /tiers`           | List all available tiers with Pokémon counts                  |
| `GET /pokemon`         | Get all Pokémon across all tiers                              |
| `GET /pokemon/{tier}`  | Get Pokémon for specific tier (ubers, ou, uu, nu, untiered)   |
| `GET /metadata`        | Get API metadata and statistics                               |
