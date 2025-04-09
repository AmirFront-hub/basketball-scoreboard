function addPoint(points, teamScoreId) {
    let scoreElement = document.getElementById(teamScoreId);
    let currentScore = parseInt(scoreElement.innerText);
    currentScore += points;
    scoreElement.innerText = currentScore;
}




let timerInterval;
let seconds = 0;
let minutes = 0;

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(function() {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        // Format time as MM:SS
        const formattedTime = formatTime(minutes, seconds);
        document.getElementById('timer').textContent = formattedTime;
    }, 1000);
}


function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval ID
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset the interval ID
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').textContent = '00:00'; // Reset display
}

function formatTime(minutes, seconds) {
    const min = minutes < 10 ? '0' + minutes : minutes;
    const sec = seconds < 10 ? '0' + seconds : seconds;
    return `${min}:${sec}`;
}