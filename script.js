function showRelevantFields() {
    const position = document.getElementById('position').value;

    // Hide all field groups initially
    const fieldGroups = document.querySelectorAll('.performance-metrics');
    fieldGroups.forEach(group => group.style.display = 'none');

    // Show relevant fields based on position
    switch (position) {
        case 'goalkeeper':
            document.getElementById('goalkeeperFields').style.display = 'block';
            break;
        case 'centre-back':
            document.getElementById('centreBackFields').style.display = 'block';
            break;
        case 'full-back':
            document.getElementById('fullBackFields').style.display = 'block';
            break;
        case 'defensive-midfielder':
            document.getElementById('defensiveMidfielderFields').style.display = 'block';
            break;
        case 'central-midfielder':
            document.getElementById('centralMidfielderFields').style.display = 'block';
            break;
        case 'attacking-midfielder':
            document.getElementById('attackingMidfielderFields').style.display = 'block';
            break;
        case 'winger':
            document.getElementById('wingerFields').style.display = 'block';
            break;
        case 'striker':
            document.getElementById('strikerFields').style.display = 'block';
            break;
        default:
            break;
    }
}
