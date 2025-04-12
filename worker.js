const fechaActualizacion = "2025/04/12"; 

const tiers = {
    ubers: [
        { id: 150, name: "Mewtwo", win_percentage: 0, usage_percentage: 0 },
        { id: 250, name: "Ho-Oh", win_percentage: 0, usage_percentage: 0 },
        { id: 377, name: "Regirock", win_percentage: 0, usage_percentage: 0 },
        { id: 379, name: "Registeel", win_percentage: 0, usage_percentage: 0 },
        { id: 492, name: "Shaymin", win_percentage: 0, usage_percentage: 0 },
        { id: 643, name: "Reshiram", win_percentage: 0, usage_percentage: 0 },
        { id: 644, name: "Zekrom", win_percentage: 0, usage_percentage: 0 }
    ].sort((a, b) => a.id - b.id),
    
    ou: [
        { id: 94, name: "Gengar", win_percentage: 0, usage_percentage: 0 },
        { id: 110, name: "Weezing", win_percentage: 0, usage_percentage: 0 },
        { id: 113, name: "Chansey", win_percentage: 0, usage_percentage: 0 },
        { id: 121, name: "Starmie", win_percentage: 0, usage_percentage: 0 },
        { id: 130, name: "Gyarados", win_percentage: 0, usage_percentage: 0 },
        { id: 145, name: "Zapdos", win_percentage: 0, usage_percentage: 0 },
        { id: 149, name: "Dragonite", win_percentage: 0, usage_percentage: 0 },
        { id: 196, name: "Espeon", win_percentage: 0, usage_percentage: 0 },
        { id: 212, name: "Scizor", win_percentage: 0, usage_percentage: 0 },
        { id: 227, name: "Skarmory", win_percentage: 0, usage_percentage: 0 },
        { id: 230, name: "Kingdra", win_percentage: 0, usage_percentage: 0 },
        { id: 243, name: "Raikou", win_percentage: 0, usage_percentage: 0 },
        { id: 245, name: "Suicune", win_percentage: 0, usage_percentage: 0 },
        { id: 248, name: "Tyranitar", win_percentage: 0, usage_percentage: 0 },
        { id: 279, name: "Pelipper", win_percentage: 0, usage_percentage: 0 },
        { id: 286, name: "Breloom", win_percentage: 0, usage_percentage: 0 },
        { id: 342, name: "Crawdaunt", win_percentage: 0, usage_percentage: 0 },
        { id: 376, name: "Metagross", win_percentage: 0, usage_percentage: 0 },
        { id: 385, name: "Jirachi", win_percentage: 0, usage_percentage: 0 },
        { id: 392, name: "Infernape", win_percentage: 0, usage_percentage: 0 },
        { id: 395, name: "Empoleon", win_percentage: 0, usage_percentage: 0 },
        { id: 398, name: "Staraptor", win_percentage: 0, usage_percentage: 0 },
        { id: 423, name: "Gastrodon", win_percentage: 0, usage_percentage: 0 },
        { id: 437, name: "Bronzong", win_percentage: 0, usage_percentage: 0 },
        { id: 445, name: "Garchomp", win_percentage: 0, usage_percentage: 0 },
        { id: 448, name: "Lucario", win_percentage: 0, usage_percentage: 0 },
        { id: 461, name: "Weavile", win_percentage: 0, usage_percentage: 0 },
        { id: 462, name: "Magnezone", win_percentage: 0, usage_percentage: 0 },
        { id: 472, name: "Gliscor", win_percentage: 0, usage_percentage: 0 },
        { id: 473, name: "Mamoswine", win_percentage: 0, usage_percentage: 0 },
        { id: 479, name: "Rotom-Wash", win_percentage: 0, usage_percentage: 0 },
        { id: 485, name: "Heatran", win_percentage: 0, usage_percentage: 0 },
        { id: 497, name: "Serperior", win_percentage: 0, usage_percentage: 0 },
        { id: 530, name: "Excadrill", win_percentage: 0, usage_percentage: 0 },
        { id: 534, name: "Conkeldurr", win_percentage: 0, usage_percentage: 0 },
        { id: 555, name: "Darmanitan", win_percentage: 0, usage_percentage: 0 },
        { id: 579, name: "Reuniclus", win_percentage: 0, usage_percentage: 0 },
        { id: 591, name: "Amoonguss", win_percentage: 0, usage_percentage: 0 },
        { id: 593, name: "Jellicent", win_percentage: 0, usage_percentage: 0 },
        { id: 598, name: "Ferrothorn", win_percentage: 0, usage_percentage: 0 },
        { id: 609, name: "Chandelure", win_percentage: 0, usage_percentage: 0 },
        { id: 620, name: "Mienshao", win_percentage: 0, usage_percentage: 0 },
        { id: 635, name: "Hydreigon", win_percentage: 0, usage_percentage: 0 },
        { id: 637, name: "Volcarona", win_percentage: 0, usage_percentage: 0 }
    ].sort((a, b) => a.id - b.id),
    
    uu: [
        { id: 3, name: "Venusaur", win_percentage: 0, usage_percentage: 0 },
        { id: 31, name: "Nidoqueen", win_percentage: 0, usage_percentage: 0 },
        { id: 34, name: "Nidoking", win_percentage: 0, usage_percentage: 0 },
        { id: 38, name: "Ninetales", win_percentage: 0, usage_percentage: 0 },
        { id: 55, name: "Golduck", win_percentage: 0, usage_percentage: 0 },
        { id: 62, name: "Poliwrath", win_percentage: 0, usage_percentage: 0 },
        { id: 68, name: "Machamp", win_percentage: 0, usage_percentage: 0 },
        { id: 73, name: "Tentacruel", win_percentage: 0, usage_percentage: 0 },
        { id: 80, name: "Slowbro", win_percentage: 0, usage_percentage: 0 },
        { id: 91, name: "Cloyster", win_percentage: 0, usage_percentage: 0 },
        { id: 134, name: "Vaporeon", win_percentage: 0, usage_percentage: 0 },
        { id: 135, name: "Jolteon", win_percentage: 0, usage_percentage: 0 },
        { id: 141, name: "Kabutops", win_percentage: 0, usage_percentage: 0 },
        { id: 143, name: "Snorlax", win_percentage: 0, usage_percentage: 0 },
        { id: 160, name: "Feraligatr", win_percentage: 0, usage_percentage: 0 },
        { id: 169, name: "Crobat", win_percentage: 0, usage_percentage: 0 },
        { id: 178, name: "Xatu", win_percentage: 0, usage_percentage: 0 },
        { id: 186, name: "Politoed", win_percentage: 0, usage_percentage: 0 },
        { id: 195, name: "Quagsire", win_percentage: 0, usage_percentage: 0 },
        { id: 197, name: "Umbreon", win_percentage: 0, usage_percentage: 0 },
        { id: 205, name: "Forretress", win_percentage: 0, usage_percentage: 0 },
        { id: 207, name: "Gligar", win_percentage: 0, usage_percentage: 0 },
        { id: 214, name: "Heracross", win_percentage: 0, usage_percentage: 0 },
        { id: 226, name: "Mantine", win_percentage: 0, usage_percentage: 0 },
        { id: 232, name: "Donphan", win_percentage: 0, usage_percentage: 0 },
        { id: 233, name: "Porygon2", win_percentage: 0, usage_percentage: 0 },
        { id: 242, name: "Blissey", win_percentage: 0, usage_percentage: 0 },
        { id: 244, name: "Entei", win_percentage: 0, usage_percentage: 0 },
        { id: 302, name: "Sableye", win_percentage: 0, usage_percentage: 0 },
        { id: 308, name: "Medicham", win_percentage: 0, usage_percentage: 0 },
        { id: 324, name: "Torkoal", win_percentage: 0, usage_percentage: 0 },
        { id: 330, name: "Flygon", win_percentage: 0, usage_percentage: 0 },
        { id: 373, name: "Salamence", win_percentage: 0, usage_percentage: 0 },
        { id: 407, name: "Roserade", win_percentage: 0, usage_percentage: 0 },
        { id: 424, name: "Ambipom", win_percentage: 0, usage_percentage: 0 },
        { id: 429, name: "Mismagius", win_percentage: 0, usage_percentage: 0 },
        { id: 450, name: "Hippowdon", win_percentage: 0, usage_percentage: 0 },
        { id: 464, name: "Rhyperior", win_percentage: 0, usage_percentage: 0 },
        { id: 465, name: "Tangrowth", win_percentage: 0, usage_percentage: 0 },
        { id: 468, name: "Togekiss", win_percentage: 0, usage_percentage: 0 },
        { id: 469, name: "Yanmega", win_percentage: 0, usage_percentage: 0 },
        { id: 474, name: "Porygon-Z", win_percentage: 0, usage_percentage: 0 },
        { id: 479, name: "Rotom", win_percentage: 0, usage_percentage: 0 },
        { id: 492, name: "Shaymin", win_percentage: 0, usage_percentage: 0 },
        { id: 526, name: "Gigalith", win_percentage: 0, usage_percentage: 0 },
        { id: 537, name: "Seismitoad", win_percentage: 0, usage_percentage: 0 },
        { id: 545, name: "Scolipede", win_percentage: 0, usage_percentage: 0 },
        { id: 553, name: "Krookodile", win_percentage: 0, usage_percentage: 0 },
        { id: 561, name: "Sigilyph", win_percentage: 0, usage_percentage: 0 },
        { id: 563, name: "Cofagrigus", win_percentage: 0, usage_percentage: 0 },
        { id: 612, name: "Haxorus", win_percentage: 0, usage_percentage: 0 },
        { id: 625, name: "Bisharp", win_percentage: 0, usage_percentage: 0 },
        { id: 630, name: "Mandibuzz", win_percentage: 0, usage_percentage: 0 }
    ].sort((a, b) => a.id - b.id),
    
    nu: [
        { id: 9, name: "Blastoise", win_percentage: 0, usage_percentage: 0 },
        { id: 25, name: "Pikachu", win_percentage: 0, usage_percentage: 0 },
        { id: 36, name: "Clefable", win_percentage: 0, usage_percentage: 0 },
        { id: 42, name: "Golbat", win_percentage: 0, usage_percentage: 0 },
        { id: 49, name: "Venomoth", win_percentage: 0, usage_percentage: 0 },
        { id: 59, name: "Arcanine", win_percentage: 0, usage_percentage: 0 },
        { id: 65, name: "Alakazam", win_percentage: 0, usage_percentage: 0 },
        { id: 76, name: "Golem", win_percentage: 0, usage_percentage: 0 },
        { id: 82, name: "Magneton", win_percentage: 0, usage_percentage: 0 },
        { id: 107, name: "Hitmonchan", win_percentage: 0, usage_percentage: 0 },
        { id: 114, name: "Tangela", win_percentage: 0, usage_percentage: 0 },
        { id: 146, name: "Moltres", win_percentage: 0, usage_percentage: 0 },
        { id: 157, name: "Typhlosion", win_percentage: 0, usage_percentage: 0 },
        { id: 171, name: "Lanturn", win_percentage: 0, usage_percentage: 0 },
        { id: 184, name: "Azumarill", win_percentage: 0, usage_percentage: 0 },
        { id: 208, name: "Steelix", win_percentage: 0, usage_percentage: 0 },
        { id: 211, name: "Qwilfish", win_percentage: 0, usage_percentage: 0 },
        { id: 221, name: "Piloswine", win_percentage: 0, usage_percentage: 0 },
        { id: 229, name: "Houndoom", win_percentage: 0, usage_percentage: 0 },
        { id: 237, name: "Hitmontop", win_percentage: 0, usage_percentage: 0 },
        { id: 254, name: "Sceptile", win_percentage: 0, usage_percentage: 0 },
        { id: 257, name: "Blaziken", win_percentage: 0, usage_percentage: 0 },
        { id: 260, name: "Swampert", win_percentage: 0, usage_percentage: 0 },
        { id: 291, name: "Ninjask", win_percentage: 0, usage_percentage: 0 },
        { id: 297, name: "Hariyama", win_percentage: 0, usage_percentage: 0 },
        { id: 319, name: "Sharpedo", win_percentage: 0, usage_percentage: 0 },
        { id: 334, name: "Altaria", win_percentage: 0, usage_percentage: 0 },
        { id: 350, name: "Milotic", win_percentage: 0, usage_percentage: 0 },
        { id: 356, name: "Dusclops", win_percentage: 0, usage_percentage: 0 },
        { id: 389, name: "Torterra", win_percentage: 0, usage_percentage: 0 },
        { id: 430, name: "Honchkrow", win_percentage: 0, usage_percentage: 0 },
        { id: 435, name: "Skuntank", win_percentage: 0, usage_percentage: 0 },
        { id: 436, name: "Bronzor", win_percentage: 0, usage_percentage: 0 },
        { id: 442, name: "Spiritomb", win_percentage: 0, usage_percentage: 0 },
        { id: 452, name: "Drapion", win_percentage: 0, usage_percentage: 0 },
        { id: 454, name: "Toxicroak", win_percentage: 0, usage_percentage: 0 },
        { id: 475, name: "Gallade", win_percentage: 0, usage_percentage: 0 },
        { id: 477, name: "Dusknoir", win_percentage: 0, usage_percentage: 0 },
        { id: 478, name: "Froslass", win_percentage: 0, usage_percentage: 0 },
        { id: 508, name: "Stoutland", win_percentage: 0, usage_percentage: 0 },
        { id: 531, name: "Audino", win_percentage: 0, usage_percentage: 0 },
        { id: 560, name: "Scrafty", win_percentage: 0, usage_percentage: 0 },
        { id: 571, name: "Zoroark", win_percentage: 0, usage_percentage: 0 },
        { id: 589, name: "Escavalier", win_percentage: 0, usage_percentage: 0 },
        { id: 604, name: "Eelektross", win_percentage: 0, usage_percentage: 0 },
        { id: 621, name: "Druddigon", win_percentage: 0, usage_percentage: 0 },
        { id: 628, name: "Braviary", win_percentage: 0, usage_percentage: 0 },
        { id: 632, name: "Durant", win_percentage: 0, usage_percentage: 0 }
    ].sort((a, b) => a.id - b.id),
    
    untiered: [
        { id: 132, name: "Ditto", win_percentage: 0, usage_percentage: 0 },
        { id: 201, name: "Unown", win_percentage: 0, usage_percentage: 0 },
        { id: 327, name: "Spinda", win_percentage: 0, usage_percentage: 0 },
        { id: 351, name: "Castform", win_percentage: 0, usage_percentage: 0 },
        { id: 431, name: "Glameow", win_percentage: 0, usage_percentage: 0 },
        { id: 511, name: "Pansage", win_percentage: 0, usage_percentage: 0 },
        { id: 512, name: "Simisage", win_percentage: 0, usage_percentage: 0 },
        { id: 513, name: "Pansear", win_percentage: 0, usage_percentage: 0 },
        { id: 514, name: "Simisear", win_percentage: 0, usage_percentage: 0 },
        { id: 515, name: "Panpour", win_percentage: 0, usage_percentage: 0 },
        { id: 516, name: "Simipour", win_percentage: 0, usage_percentage: 0 }
    ].sort((a, b) => a.id - b.id)
};

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
};

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            headers: corsHeaders
        });
    }

    try {
        if (path === '/tiers') {
            return handleTiers();
        } else if (path === '/pokemon') {
            return handleAllPokemon();
        } else if (path.startsWith('/pokemon/')) {
            const tier = path.split('/')[2].toLowerCase();
            return handleTierPokemon(tier);
        } else if (path === '/metadata') {
            return handleMetadata();
        }
        
        return new Response('Endpoint no encontrado', { 
            status: 404,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
        
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    }
}

function handleTiers() {
    const response = {
        tiers: Object.keys(tiers).map(tier => ({
            name: tier.toUpperCase(),
            count: tiers[tier].length
        })),
        total_pokemon: Object.values(tiers).reduce((acc, curr) => acc + curr.length, 0),
        total_tiers: Object.keys(tiers).length
    };
    
    return new Response(JSON.stringify(response), {
        headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    }); 
}

function handleAllPokemon() {
    const allPokemon = Object.entries(tiers).flatMap(([tier, data]) => 
        data.map(p => ({ ...p, tier: tier.toUpperCase() }))
        .sort((a, b) => a.id - b.id)
    );
    
    return new Response(JSON.stringify({
        count: allPokemon.length,
        results: allPokemon
    }), {
        headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}

function handleTierPokemon(tier) {
    if (!tiers[tier]) {
        return new Response(JSON.stringify({ error: 'Tier no válido' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    }
    
    return new Response(JSON.stringify({
        count: tiers[tier].length,
        tier: tier.toUpperCase(),
        results: tiers[tier]
    }), {
        headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}

function handleMetadata() {
    const counts = {
        count_total: Object.values(tiers).reduce((acc, curr) => acc + curr.length, 0),
        count_ubers: tiers.ubers.length,
        count_ou: tiers.ou.length,
        count_uu: tiers.uu.length,
        count_nu: tiers.nu.length,
        count_untiered: tiers.untiered.length,
        last_updated_date: fechaActualizacion
    };
    
    return new Response(JSON.stringify({
        metadata: counts,
        total_endpoints: 4
    }), {
        headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});