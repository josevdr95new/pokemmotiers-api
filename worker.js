const fechaActualizacion = new Date().toISOString().split('T')[0];

const tiers = {
    ou: [
        { id: 94, nombre: "Gengar" }, { id: 110, nombre: "Weezing" },
        { id: 113, nombre: "Chansey" }, { id: 121, nombre: "Starmie" },
        { id: 130, nombre: "Gyarados" }, { id: 145, nombre: "Zapdos" },
        // ... Resto de los datos OU
    ].sort((a, b) => a.id - b.id),
    
    uu: [
        { id: 3, nombre: "Venusaur" }, { id: 31, nombre: "Nidoqueen" },
        { id: 34, nombre: "Nidoking" }, { id: 38, nombre: "Ninetales" },
        // ... Resto de los datos UU
    ].sort((a, b) => a.id - b.id),
    
    nu: [
        { id: 9, nombre: "Blastoise" }, { id: 25, nombre: "Pikachu" },
        { id: 36, nombre: "Clefable" }, { id: 42, nombre: "Golbat" },
        // ... Resto de los datos NU
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
        .sort((a, b) => a.id - b.id);
    
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