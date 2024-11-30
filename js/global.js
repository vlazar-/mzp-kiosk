let inactivityTime = function () {
    let timer;
    const inactivityLimit = 15 * 60 * 1000; // 15 minutes in milliseconds

    // Reset the timer when there's activity
    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // Extract the current URL to find the "kiosk" base path
            const currentUrl = window.location.href;
            const urlParts = currentUrl.split('/');
            // Assume the base kiosk directory is always at the 4th position: http://localhost:8000/kiosk-x/
            const kioskBase = urlParts.slice(0, 4).join('/');
            // Redirect to the "index.html" at that level
            const redirectUrl = `${kioskBase}/index.html`;

            // Redirect the user to the dynamically constructed home page URL
            window.location.href = redirectUrl;
        }, inactivityLimit);
    }

    // Track events that count as user activity
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
    document.onkeyup = resetTimer;
    document.ontouchstart = resetTimer; // for touch devices
    document.onclick = resetTimer;

    // Start the timer initially
    resetTimer();
};

// Run the inactivity timer function
inactivityTime();

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentUrl = window.location.href;

    // Check if the URL ends with 'sportasi.html' or 'klubovi.html'
    if (currentUrl.endsWith('sportasi.html') || currentUrl.endsWith('klubovi.html')) {
        // Dynamically load Masonry.js from local file
        const script = document.createElement('script');
        script.src = "../../js/masonry.js"; // Adjust the path based on your project structure
        script.onload = function () {
            // Initialize Masonry after the script is loaded
            var grid = document.querySelector('.athletes');
            if (grid) {
                new Masonry(grid, {
                    itemSelector: '.athlete-items',
                    columnWidth: 610,
                    percentPosition: true
                });
            }
        };
        document.body.appendChild(script);
    }
});
