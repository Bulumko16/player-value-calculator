function calculatePerformance(position, goals, assists, keyPasses, tackles, cleanSheets, injuries) {
    let performanceScore = 0;
    switch (position) {
        case 'striker':
        case 'winger':
            performanceScore = (goals * 4) + (assists * 3) + (keyPasses * 1) - (injuries * 5);
            break;
        case 'midfielder':
        case 'attacking midfielder':
            performanceScore = (goals * 2) + (assists * 3) + (keyPasses * 2) + (tackles * 2) - (injuries * 5);
            break;
        case 'defender':
            performanceScore = (cleanSheets * 3) + (tackles * 3) + (assists * 1) - (injuries * 5);
            break;
        case 'goalkeeper':
            performanceScore = (cleanSheets * 5) - (injuries * 5);
            break;
    }
    return Math.max(performanceScore, 0);
}

function ageFactor(age) {
    return age <= 21 ? 1.2 : age <= 28 ? 1.0 : 0.8;
}

function contractFactor(contractYears) {
    return contractYears >= 3 ? 1.5 : contractYears >= 1 ? 1.0 : 0.5;
}

function marketabilityFactor(marketability) {
    return marketability === 'high' ? 1.3 : marketability === 'medium' ? 1.0 : 0.8;
}

function positionMultiplier(position) {
    switch (position) {
        case 'striker': return 1.5;
        case 'winger': case 'attacking midfielder': return 1.3;
        case 'midfielder': return 1.1;
        case 'defender': return 1.0;
        case 'goalkeeper': return 0.9;
    }
}

function demandFactor(demandLevel) {
    return demandLevel === 'high' ? 1.3 : demandLevel === 'normal' ? 1.0 : 0.7;
}

function leagueFactor(league) {
    const leagueMultipliers = {
        'premier league': 1.5,
        'la liga': 1.4,
        'serie a': 1.3,
        'bundesliga': 1.3,
        'ligue 1': 1.2,
        'belgian pro league': 1.0,
        'eredivisie': 1.0,
        'mls': 0.9,
        'others': 0.8
    };
    return leagueMultipliers[league] || 0.8;
}

function calculateValue() {
    // Get values from the form
    const position = document.getElementById('position').value;
    const goals = parseInt(document.getElementById('goals').value);
    const assists = parseInt(document.getElementById('assists').value);
    const keyPasses = parseInt(document.getElementById('keyPasses').value);
    const tackles = parseInt(document.getElementById('tackles').value);
    const cleanSheets = parseInt(document.getElementById('cleanSheets').value);
    const injuries = parseInt(document.getElementById('injuries').value);
    const age = parseInt(document.getElementById('age').value);
    const contractYears = parseInt(document.getElementById('contractYears').value);
    const marketability = document.getElementById('marketability').value;
    const demandLevel = document.getElementById('demandLevel').value;
    const league = document.getElementById('league').value;

    // Calculate individual factors
    const P = calculatePerformance(position, goals, assists, keyPasses, tackles, cleanSheets, injuries);
    const A = ageFactor(age);
    const C = contractFactor(contractYears);
    const M = marketabilityFactor(marketability);
    const Pos = positionMultiplier(position);
    const D = demandFactor(demandLevel);
    const L = leagueFactor(league);

    // Final value calculation
    const baseValue = P * A * C * M * Pos * D * L;
    const multiplier = 209383.6396161978;
    const playerValueEuros = baseValue * multiplier;

    // Display the result
    document.getElementById('playerValue').textContent = `Player Value: €${playerValueEuros.toFixed(2)}`;
}
