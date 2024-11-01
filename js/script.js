// Function to display a welcome message based on time of the day
function displayWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const currentHour = new Date().getHours();
    let message = '';

    if (currentHour < 12) {
        message = "☀️ Good Morning! Ready for an eco-adventure?";
    } else if (currentHour < 18) {
        message = "☀️ Good Afternoon! Plan your next green getaway!";
    } else {
        message = "🌑 Good Evening! Explore our sustainable travel options!";
    }

    welcomeMessage.textContent = message;
}

// Function to highlight travel packages
function highlightPackages() {
    const table = document.getElementById('packageTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        rows[i].style.backgroundColor = '#e6ffe6';
    }
}

// Event listener for the highlight button
document.getElementById('highlightButton').addEventListener('click', highlightPackages);

// Call the welcome message function when the page loads
window.onload = displayWelcomeMessage;