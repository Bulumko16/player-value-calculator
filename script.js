function showRelevantFields() {
    const position = document.getElementById('position').value;

    // Hide all field groups initially
    const fieldGroups = document.querySelectorAll('.performance-metrics');
    fieldGroups.forEach(group => group.style.display = 'none');

    // Show relevant fields based on position
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
