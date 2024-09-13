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

    // Always show general fields
    document.getElementById('generalFields').style.display = 'block';
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

        value = (psxgMinusGoals * 5) + (saves * 2) + (savePercentage * 1.5) + (cleanSheets * 3) + (passAccuracy * 1.2);
    } else if (position === 'centre-back') {
        const tacklesWon = getMetricValue('tacklesWon');
        const challengesWonPercentage = getMetricValue('challengesWonPercentage');
        const interceptions = getMetricValue('interceptions');
        const aerialDuelsWonPercentage = getMetricValue('aerialDuelsWonPercentage');
        const clearances = getMetricValue('clearances');

        value = (tacklesWon * 3) + (challengesWonPercentage * 2) + (interceptions * 3) + (aerialDuelsWonPercentage * 2) + (clearances * 2);
    } else if (position === 'full-back') {
        const crossesCompleted = getMetricValue('crossesCompleted');
        const interceptions = getMetricValue('interceptions');
        const challengesWonPercentage = getMetricValue('challengesWonPercentage');
        const tacklesWon = getMetricValue('tacklesWon');
        const keyPasses = getMetricValue('keyPasses');
        const passAccuracy = getMetricValue('passAccuracy');
        const clearances = getMetricValue('clearances');

        value = (crossesCompleted * 2) + (interceptions * 2) + (challengesWonPercentage * 1.5) + (tacklesWon * 2) + (keyPasses * 1.5) + (passAccuracy * 1.2) + (clearances * 1);
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

        value = (interceptions * 4) + (tacklesWon * 3) + (ballRecoveries * 2) + (challengesWonPercentage * 2) + (passesBlocked * 1.5) + (passingAccuracy * 1.2) + (progressiveCarries * 1.5) + (totalPassingDistance * 1.5) + (progressivePassingDistance * 1.5);
    } else if (position === 'central-midfielder') {
        const passingAccuracy = getMetricValue('passingAccuracy');
        const progressiveCarries = getMetricValue('progressiveCarries');
        const totalPassingDistance = getMetricValue('totalPassingDistance');
        const progressivePassingDistance = getMetricValue('progressivePassingDistance');
        const ballRecoveries = getMetricValue('ballRecoveries');
        const passesBlocked = getMetricValue('passesBlocked');
        const interceptions = getMetricValue('interceptions');
        const tacklesWon = getMetricValue('tacklesWon');

        value = (passingAccuracy * 4) + (progressiveCarries * 3) + (totalPassingDistance * 2) + (progressivePassingDistance * 2) + (ballRecoveries * 2) + (passesBlocked * 1.5) + (interceptions * 2) + (tacklesWon * 1.5);
    } else if (position === 'attacking-midfielder') {
        const assists = getMetricValue('assists');
        const keyPasses = getMetricValue('keyPasses');
        const chancesCreated = getMetricValue('chancesCreated');
        const shotCreatingActions = getMetricValue('shotCreatingActions');
        const passAccuracy = getMetricValue('passAccuracy');
        const dribblesCompleted = getMetricValue('dribblesCompleted');
        const goals = getMetricValue('goals');

        value = (assists * 3) + (keyPasses * 2) + (chancesCreated * 2) + (shotCreatingActions * 2) + (passAccuracy * 1.5) + (dribblesCompleted * 1.5) + (goals * 3);
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

        value = (crossesCompleted * 2) + (assists * 2) + (dribblesCompleted * 2) + (successfulTakeOns * 2) + (crossAccuracy * 1.5) + (keyPasses * 1.5) + (goals * 3) + (chancesCreated * 2) + (passAccuracy * 1.2);
    } else if (position === 'striker') {
        const goals = getMetricValue('goals');
        const shotsOnTarget = getMetricValue('shotsOnTarget');
        const conversionRate = getMetricValue('conversionRate');
        const assists = getMetricValue('assists');
        const xgOverperformance = getMetricValue('xgOverperformance');
        const dribblesCompleted = getMetricValue('dribblesCompleted');
        const keyPasses = getMetricValue('keyPasses');

        value = (goals * 5) + (shotsOnTarget * 2) + (conversionRate * 2) + (assists * 2) + (xgOverperformance * 1.5) + (dribblesCompleted * 1) + (keyPasses * 1);
    }

    // Apply age effect (higher value for younger players)
    const ageFactor = Math.max(0, 30 - age) * 1000; // Assuming age 30 as the threshold for value decrease
    value += ageFactor;

    // Apply marketability and demand effects
    value *= 1 + (marketability - 5) * 0
