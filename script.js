document.getElementById('position').addEventListener('change', showRelevantFields);

function showRelevantFields() {
    const position = document.getElementById('position').value;

    // Hide all field groups
    const fieldGroups = document.querySelectorAll('.performance-metrics');
    fieldGroups.forEach(group => group.style.display = 'none');

    // Show the relevant fields based on the position
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

function calculatePlayerValue() {
    const position = document.getElementById('position').value;
    let value = 0;

    const age = parseFloat(document.getElementById('age').value);
    const marketability = parseFloat(document.getElementById('marketability').value);
    const demand = parseFloat(document.getElementById('demand').value);
    const injury = parseFloat(document.getElementById('injury').value);

    // Get relevant metrics for the selected position
    const getMetricValue = (id) => parseFloat(document.getElementById(id).value) || 0;

    if (position === 'goalkeeper') {
        const psxgMinusGoals = getMetricValue('psxgMinusGoals');
        const saves = getMetricValue('saves');
        const savePercentage = getMetricValue('savePercentage');
        const cleanSheets = getMetricValue('cleanSheets');
        const passAccuracy = getMetricValue('passAccuracy');

        value = 50 * (psxgMinusGoals + saves + (savePercentage / 100) + cleanSheets + (passAccuracy / 100));
    } else if (position === 'centre-back') {
        const tacklesWon = getMetricValue('tacklesWon');
        const challengesWonPercentage = getMetricValue('challengesWonPercentage');
        const interceptions = getMetricValue('interceptions');
        const aerialDuelsWonPercentage = getMetricValue('aerialDuelsWonPercentage');
        const clearances = getMetricValue('clearances');

        value = 50 * (tacklesWon + challengesWonPercentage + interceptions + aerialDuelsWonPercentage + clearances);
    } else if (position === 'full-back') {
        const crossesCompleted = getMetricValue('crossesCompleted');
        const interceptions = getMetricValue('interceptions');
        const challengesWonPercentage = getMetricValue('challengesWonPercentage');
        const tacklesWon = getMetricValue('tacklesWon');
        const keyPasses = getMetricValue('keyPasses');
        const passAccuracy = getMetricValue('passAccuracy');
        const clearances = getMetricValue('clearances');

        value = 50 * (crossesCompleted + interceptions + challengesWonPercentage + tacklesWon + keyPasses + (passAccuracy / 100) + clearances);
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

        value = 50 * (interceptions + tacklesWon + ballRecoveries + challengesWonPercentage + passesBlocked + (passingAccuracy / 100) + progressiveCarries + totalPassingDistance + progressivePassingDistance);
    } else if (position === 'central-midfielder') {
        const passingAccuracy = getMetricValue('passingAccuracy');
        const progressiveCarries = getMetricValue('progressiveCarries');
        const totalPassingDistance = getMetricValue('totalPassingDistance');
        const progressivePassingDistance = getMetricValue('progressivePassingDistance');
        const ballRecoveries = getMetricValue('ballRecoveries');
        const passesBlocked = getMetricValue('passesBlocked');
        const interceptions = getMetricValue('interceptions');
        const tacklesWon = getMetricValue('tacklesWon');

        value = 50 * (passingAccuracy + progressiveCarries + totalPassingDistance + progressivePassingDistance + ballRecoveries + passesBlocked + interceptions + tacklesWon);
    } else if (position === 'attacking-midfielder') {
        const assists = getMetricValue('assists');
        const keyPasses = getMetricValue('keyPasses');
        const chancesCreated = getMetricValue('chancesCreated');
        const shotCreatingActions = getMetricValue('shotCreatingActions');
        const passAccuracy = getMetricValue('passAccuracy');
        const dribblesCompleted = getMetricValue('dribblesCompleted');
        const goals = getMetricValue('goals');

        value = 50 * (assists + keyPasses + chancesCreated + shotCreatingActions + passAccuracy + dribblesCompleted + goals);
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

        value = 50 * (crossesCompleted + assists + dribblesCompleted + successfulTakeOns + crossAccuracy + keyPasses + goals + chancesCreated + passAccuracy);
    } else if (position === 'striker') {
        const goals = getMetricValue('goals');
        const shotsOnTarget = getMetricValue('shotsOnTarget');
        const conversionRate = getMetricValue('conversionRate');
        const assists = getMetricValue('assists');
        const xgOverperformance = getMetricValue('xgOverperformance');
        const dribblesCompleted = getMetricValue('dribblesCompleted');
        const keyPasses = getMetricValue('keyPasses');

        value = 50 * (goals + shotsOnTarget + conversionRate + assists + xgOverperformance + dribblesCompleted + keyPasses);
    }

    // Apply marketability and demand effects
    value *= 1 + (parseFloat(document.getElementById('marketability').value) - 5) * 0.05;
    value *= 1 + (parseFloat(document.getElementById('demand').value) - 5) * 0.05;
    value *= (1 - 0.1 * parseFloat(document.getElementById('injury').value));

    // Apply a small bonus for goals and assists if not a striker
    const goals = parseFloat(document.getElementById('goals').value) || 0;
    const assists = parseFloat(document.getElementById('assists').value) || 0;
    if (position !== 'striker') {
        value += (goals + assists) * 1000;
    }

    // Apply final multiplier
    const finalValue = value * 2093836396161978;
    document.getElementById('playerValue').innerText = finalValue.toFixed(2);
    document.getElementById('result').style.display = 'block';
}
