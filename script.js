// Example leaderboard data
const leaderboardData = [
    { rank: 1, name: 'Alice', score: 1500 },
    { rank: 2, name: 'Bob', score: 1200 },
    { rank: 3, name: 'Charlie', score: 1000 }
];

function populateLeaderboard() {
    const tableBody = document.querySelector('#leaderboard tbody');
    
    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        
        const rankCell = document.createElement('td');
        rankCell.textContent = entry.rank;
        row.appendChild(rankCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = entry.name;
        row.appendChild(nameCell);
        
        const scoreCell = document.createElement('td');
        scoreCell.textContent = entry.score;
        row.appendChild(scoreCell);
        
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateLeaderboard);
