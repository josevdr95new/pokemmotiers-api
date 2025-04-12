const fechaActualizacion = new Date().toISOString().split('T')[0];

const tiers = {
    ou: [
        { id: 94, nombre: "Gengar" }, { id: 110, nombre: "Weezing" },
        { id: 113, nombre: "Chansey" }, { id: 121, nombre: "Starmie" },
        { id: 130, nombre: "Gyarados" }, { id: 145, nombre: "Zapdos" },
        { id: 149, nombre: "Dragonite" }, { id: 196, nombre: "Espeon" },
        { id: 212, nombre: "Scizor" }, { id: 227, nombre: "Skarmory" },
        { id: 230, nombre: "Kingdra" }, { id: 243, nombre: "Raikou" },
        { id: 245, nombre: "Suicune" }, { id: 248, nombre: "Tyranitar" },
        { id: 279, nombre: "Pelipper" }, { id: 286, nombre: "Breloom" },
        { id: 342, nombre: "Crawdaunt" }, { id: 376, nombre: "Metagross" },
        { id: 385, nombre: "Jirachi" }, { id: 392, nombre: "Infernape" },
        { id: 395, nombre: "Empoleon" }, { id: 398, nombre: "Staraptor" },
        { id: 423, nombre: "Gastrodon" }, { id: 437, nombre: "Bronzong" },
        { id: 445, nombre: "Garchomp" }, { id: 448, nombre: "Lucario" },
        { id: 461, nombre: "Weavile" }, { id: 462, nombre: "Magnezone" },
        { id: 472, nombre: "Gliscor" }, { id: 473, nombre: "Mamoswine" },
        { id: 479, nombre: "Rotom-Wash" }, { id: 485, nombre: "Heatran" },
        { id: 497, nombre: "Serperior" }, { id: 530, nombre: "Excadrill" },
        { id: 534, nombre: "Conkeldurr" }, { id: 555, nombre: "Darmanitan" },
        { id: 579, nombre: "Reuniclus" }, { id: 591, nombre: "Amoonguss" },
        { id: 593, nombre: "Jellicent" }, { id: 598, nombre: "Ferrothorn" },
        { id: 609, nombre: "Chandelure" }, { id: 620, nombre: "Mienshao" },
        { id: 635, nombre: "Hydreigon" }, { id: 637, nombre: "Volcarona" }
    ].sort((a, b) => a.id - b.id),
    
    uu: [
        { id: 3, nombre: "Venusaur" }, { id: 31, nombre: "Nidoqueen" },
        { id: 34, nombre: "Nidoking" }, { id: 38, nombre: "Ninetales" },
        { id: 55, nombre: "Golduck" }, { id: 62, nombre: "Poliwrath" },
        { id: 68, nombre: "Machamp" }, { id: 73, nombre: "Tentacruel" },
        { id: 80, nombre: "Slowbro" }, { id: 91, nombre: "Cloyster" },
        { id: 134, nombre: "Vaporeon" }, { id: 135, nombre: "Jolteon" },
        { id: 141, nombre: "Kabutops" }, { id: 143, nombre: "Snorlax" },
        { id: 160, nombre: "Feraligatr" }, { id: 169, nombre: "Crobat" },
        { id: 178, nombre: "Xatu" }, { id: 186, nombre: "Politoed" },
        { id: 195, nombre: "Quagsire" }, { id: 197, nombre: "Umbreon" },
        { id: 205, nombre: "Forretress" }, { id: 207, nombre: "Gligar" },
        { id: 214, nombre: "Heracross" }, { id: 226, nombre: "Mantine" },
        { id: 232, nombre: "Donphan" }, { id: 233, nombre: "Porygon2" },
        { id: 242, nombre: "Blissey" }, { id: 244, nombre: "Entei" },
        { id: 302, nombre: "Sableye" }, { id: 308, nombre: "Medicham" },
        { id: 324, nombre: "Torkoal" }, { id: 330, nombre: "Flygon" },
        { id: 373, nombre: "Salamence" }, { id: 407, nombre: "Roserade" },
        { id: 424, nombre: "Ambipom" }, { id: 429, nombre: "Mismagius" },
        { id: 450, nombre: "Hippowdon" }, { id: 464, nombre: "Rhyperior" },
        { id: 465, nombre: "Tangrowth" }, { id: 468, nombre: "Togekiss" },
        { id: 469, nombre: "Yanmega" }, { id: 474, nombre: "Porygon-Z" },
        { id: 479, nombre: "Rotom" }, { id: 492, nombre: "Shaymin" },
        { id: 526, nombre: "Gigalith" }, { id: 537, nombre: "Seismitoad" },
        { id: 545, nombre: "Scolipede" }, { id: 553, nombre: "Krookodile" },
        { id: 561, nombre: "Sigilyph" }, { id: 563, nombre: "Cofagrigus" },
        { id: 612, nombre: "Haxorus" }, { id: 625, nombre: "Bisharp" },
        { id: 630, nombre: "Mandibuzz" }
    ].sort((a, b) => a.id - b.id),
    
    nu: [
        { id: 9, nombre: "Blastoise" }, { id: 25, nombre: "Pikachu" },
        { id: 36, nombre: "Clefable" }, { id: 42, nombre: "Golbat" },
        { id: 49, nombre: "Venomoth" }, { id: 59, nombre: "Arcanine" },
        { id: 65, nombre: "Alakazam" }, { id: 76, nombre: "Golem" },
        { id: 82, nombre: "Magneton" }, { id: 107, nombre: "Hitmonchan" },
        { id: 114, nombre: "Tangela" }, { id: 146, nombre: "Moltres" },
        { id: 157, nombre: "Typhlosion" }, { id: 171, nombre: "Lanturn" },
        { id: 184, nombre: "Azumarill" }, { id: 208, nombre: "Steelix" },
        { id: 211, nombre: "Qwilfish" }, { id: 221, nombre: "Piloswine" },
        { id: 229, nombre: "Houndoom" }, { id: 237, nombre: "Hitmontop" },
        { id: 254, nombre: "Sceptile" }, { id: 257, nombre: "Blaziken" },
        { id: 260, nombre: "Swampert" }, { id: 291, nombre: "Ninjask" },
        { id: 297, nombre: "Hariyama" }, { id: 319, nombre: "Sharpedo" },
        { id: 334, nombre: "Altaria" }, { id: 350, nombre: "Milotic" },
        { id: 356, nombre: "Dusclops" }, { id: 389, nombre: "Torterra" },
        { id: 430, nombre: "Honchkrow" }, { id: 435, nombre: "Skuntank" },
        { id: 436, nombre: "Bronzor" }, { id: 442, nombre: "Spiritomb" },
        { id: 452, nombre: "Drapion" }, { id: 454, nombre: "Toxicroak" },
        { id: 475, nombre: "Gallade" }, { id: 477, nombre: "Dusknoir" },
        { id: 478, nombre: "Froslass" }, { id: 508, nombre: "Stoutland" },
        { id: 531, nombre: "Audino" }, { id: 560, nombre: "Scrafty" },
        { id: 571, nombre: "Zoroark" }, { id: 589, nombre: "Escavalier" },
        { id: 604, nombre: "Eelektross" }, { id: 621, nombre: "Druddigon" },
        { id: 628, nombre: "Braviary" }, { id: 632, nombre: "Durant" }
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
    
    // Manejo de CORS para preflight
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
        count_ou: tiers.ou.length,
        count_uu: tiers.uu.length,
        count_nu: tiers.nu.length,
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