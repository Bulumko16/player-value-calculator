function showRelevantFields() {
    // Hide all fields initially
    const fieldGroups = document.querySelectorAll('.performance-metrics');
    fieldGroups.forEach(group => group.style.display = 'none');
    
    const position = document.getElementById('position').value;
    
    // Show only the relevant fields
    if (position === 'goalkeeper') {
        document.getElementById('goalkeeperFields').style.display = 'block';
    } else if (position === 'centre-back') {
        document.getElementById('centreBackFields').style.display = 'block';
    } else if (position === 'full-back') {
        document.getElementById('fullBackFields').style.display = 'block';
    }
    // Continue for other positions...
}

function calculateValue() {
    const position = document.getElementById('position').value;
    let performanceScore = 0;

    if (position === 'goalkeeper') {
        const psxg = parseFloat(document.getElementById('psxg').value);
        const saves = parseFloat(document.getElementById('saves').value);
        const savePercentage = parseFloat(document.getElementById('savePercentage').value);
        const cleanSheets = parseFloat(document.getElementById('cleanSheets').value);
        const passAccuracy = parseFloat(document.getElementById('passAccuracy').value);
        performanceScore = (psxg * 4) + (saves * 3) + (savePercentage * 2) + (cleanSheets * 1.5) + (passAccuracy * 0.5);
    } else if (position === 'centre-back') {
        const tacklesWon = parseFloat(document.getElementById('tacklesWon').value);
        const challengesWon = parseFloat(document.getElementById('challengesWon').value);
        const interceptions = parseFloat(document.getElementById('interceptions').value);
        const aerialDuelsWon = parseFloat(document.getElementById('aerialDuelsWon').value);
        const clearances = parseFloat(document.getElementById('clearances').value);
        const blockedShots = parseFloat(document.getElementById('blockedShots').value);
        performanceScore = (tacklesWon * 4) + (challengesWon * 3) + (interceptions * 3) + (aerialDuelsWon * 2) + (clearances * 1.5) + (blockedShots * 1);
    }
    // Continue for other positions...

    const marketability = document.getElementById('marketability').value;
    const demandLevel = document.getElementById('demandLevel').value;

    // Adjust the weight of marketability and demand
    let marketMultiplier = marketability === 'high' ? 1.1 : marketability === 'medium' ? 1.05 : 1;
    let demandMultiplier = demandLevel === 'high' ? 1.2 : demandLevel === 'medium' ? 1.1 : 1;
    
    const finalValue = performanceScore * 209383.6396161978 * marketMultiplier * demandMultiplier;
    document.getElementById('playerValue').innerText = `Estimated Value: €${finalValue.toFixed(2)}`;
}
