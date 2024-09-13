document.getElementById('position').addEventListener('change', showRelevantFields);

function showRelevantFields() {
    const position = document.getElementById('position').value;

    // Hide all performance metrics sections
    document.querySelectorAll('.performance-metrics').forEach(group => group.style.display = 'none');

    // Show the relevant performance metrics based on position
    if (position === 'goalkeeper') {
        document.getElementById('goalkeeperFields').style.display = 'block';
    } else if (position === 'centre-back') {
        document.getElementById('centreBackFields').style.display = 'block';
    } else if (position === 'full-back') {
        document.getElementById('fullBackFields').style.display = 'block';
    } else if (position === 'defensive-midfielder') {
        document.getElementById('defensiveMidfielderFields').style.display = 'block';
    } else if (position === 'central-midfielder') {
        document.getElementById('centralMidfielderFields').style.display = 'block';
    } else if (position === 'attacking-midfielder') {
        document.getElementById('attackingMidfielderFields').style.display = 'block';
    } else if (position === 'winger') {
        document.getElementById('wingerFields').style.display = 'block';
    } else if (position === 'striker') {
        document.getElementById('strikerFields').style.display = 'block';
    }
}

function getMetricValue(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function calculateValue() {
    const position = document.getElementById('position').value;
    const age = parseFloat(document.getElementById('age').value) || 0;
    const marketability = parseFloat(document.getElementById('marketability').value) || 0;
    const demand = parseFloat(document.getElementById('demand').value) || 0;
    const injury = parseFloat(document.getElementById('injury').value) || 0;

    let value = 0;

    if (position === 'goalkeeper') {
        const psxgMinusGoals = getMetricValue('psxgMinusGoals');
        const saves = getMetricValue('saves');
        const savePercentage = getMetricValue('savePercentage');
        const cleanSheets = getMetricValue('cleanSheets');
        const passAccuracy = getMetricValue('passAccuracy');

        value = (psxgMinusGoals * 2) + (saves * 2) + (savePercentage * 1.5) + (cleanSheets * 1.5) + (passAccuracy * 1.2);
    } else if (position === 'centre-back') {
        const tacklesWon = getMetricValue('tacklesWon');
        const challengesWonPercentage = getMetricValue('challengesWonPercentage');
        const interceptions = getMetricValue('interceptions');
        const aerialDuelsWonPercentage = getMetricValue('aerialDuelsWonPercentage');
        const clearances = getMetricValue('clearances');

        value = (tacklesWon * 2) + (challengesWonPercentage * 1.5) + (interceptions * 2) + (aerialDuelsWonPercentage * 1.5) + (clearances * 1.2);
    } else if (position === 'full-back') {
        const crossesCompleted = getMetricValue('crossesCompleted');
        const interceptions = getMetricValue('interceptions');
        const challengesWonPercentage = getMetricValue('challengesWonPercentage');
        const tacklesWon = getMetricValue('tacklesWon');
        const keyPasses = getMetricValue('keyPasses');
        const passAccuracy = getMetricValue('passAccuracy');
        const clearances = getMetricValue('clearances');

        value = (crossesCompleted * 2) + (interceptions * 1.5) + (challengesWonPercentage * 1.5) + (tacklesWon * 1.5) + (keyPasses * 1.2) + (passAccuracy * 1.2) + (clearances * 1.2);
    } else if (position === 'defensive-midfielder') {
        const interceptions = getMetricValue('interceptions');
        const tacklesWon = getMetricValue('tacklesWon');
        const ballRecoveries = getMetricValue('ballRecoveries');
        const challengesWonPercentage = getMetricValue('challengesWonPercentage');
        const passesBlocked = getMetricValue('passesBlocked');
        const passingAccuracy = getMetricValue('passingAccuracy');
        const progressiveCarries = getMetricValue('progressiveCarries');
        const totalPassingDistance = getMetricValue('totalPassingDistance');
        const progressivePassingDistance = getMetricValue('progressivePassingDistance');

        value = (interceptions * 2) + (tacklesWon * 2) + (ballRecoveries * 2) + (challengesWonPercentage * 1.5) + (passesBlocked * 1.5) + (passingAccuracy * 1.2) + (progressiveCarries * 1.2) + (totalPassingDistance * 1.2) + (progressivePassingDistance * 1.2);
    } else if (position === 'central-midfielder') {
        const passingAccuracy = getMetricValue('passingAccuracy');
        const progressiveCarries = getMetricValue('progressiveCarries');
        const totalPassingDistance = getMetricValue('totalPassingDistance');
        const progressivePassingDistance = getMetricValue('progressivePassingDistance');
        const ballRecoveries = getMetricValue('ballRecoveries');
        const passesBlocked = getMetricValue('passesBlocked');
        const interceptions = getMetricValue('interceptions');
        const tacklesWon = getMetricValue('tacklesWon');

        value = (passingAccuracy * 2) + (progressiveCarries * 2) + (totalPassingDistance * 2) + (progressivePassingDistance * 2) + (ballRecoveries * 1.5) + (passesBlocked * 1.5) + (interceptions * 1.5) + (tacklesWon * 1.2);
    } else if (position === 'attacking-midfielder') {
        const assists = getMetricValue('assists');
        const keyPasses = getMetricValue('keyPasses');
        const chancesCreated = getMetricValue('chancesCreated');
        const shotCreatingActions = getMetricValue('shotCreatingActions');
        const passAccuracy = getMetricValue('passAccuracy');
        const dribblesCompleted = getMetricValue('dribblesCompleted');
        const goals = getMetricValue('goals');

        value = (assists * 2) + (keyPasses * 2) + (chancesCreated * 2) + (shotCreatingActions * 2) + (passAccuracy * 1.5) + (dribblesCompleted * 1.5) + (goals * 2);
    } else if (position === 'winger') {
        const crossesCompleted = getMetricValue('crossesCompleted');
        const assists = getMetricValue('assists');
        const dribblesCompleted = getMetricValue('dribblesCompleted');
        const successfulTakeOns = getMetricValue('successfulTakeOns');
        const crossAccuracy = getMetricValue('crossAccuracy');
        const keyPasses = getMetricValue('keyPasses');
        const goals = getMetricValue('goals');
        const chancesCreated = getMetricValue('chancesCreated');
        const passAccuracy = getMetricValue('passAccuracy');

        value = (crossesCompleted * 2) + (assists * 2) + (dribblesCompleted * 1.5) + (successfulTakeOns * 1.5) + (crossAccuracy * 1.5) + (keyPasses * 1.5) + (goals * 2) + (chancesCreated * 1.5) + (passAccuracy * 1.2);
    } else if (position === 'striker') {
        const goals = getMetricValue('goals');
        const shotsOnTarget = getMetricValue('shotsOnTarget');
        const conversionRate = getMetricValue('conversionRate');
        const assists = getMetricValue('assists');
        const xgOverperformance = getMetricValue('xgOverperformance');
        const dribblesCompleted = getMetricValue('dribblesCompleted');
        const keyPasses = getMetricValue('keyPasses');

        value = (goals * 3) + (shotsOnTarget * 1.5) + (conversionRate * 1.5) + (assists * 1.5) + (xgOverperformance * 1.5) + (dribblesCompleted * 1.2) + (keyPasses * 1.2);
    }

    // Adding general fields to the value calculation
    value += (100 - age) * 0.5; // Bonus for younger players
    value += (marketability + demand) * 0.3; // Slightly decrease the effect of marketability and demand

    // Adjust for injury
    value *= (1 - (injury * 0.5)); // Major injury decreases value

    // Calculate final value
    const finalValue = value * 2093836396161978;
    document.getElementById('result').innerText = `Player Value: €${finalValue.toFixed(2)}`;
}
