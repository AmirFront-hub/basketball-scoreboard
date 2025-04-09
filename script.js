function addPoint(points, teamScoreId) {
    let scoreElement = document.getElementById(teamScoreId);
    let currentScore = parseInt(scoreElement.innerText);
    currentScore += points;
    scoreElement.innerText = currentScore;
}
