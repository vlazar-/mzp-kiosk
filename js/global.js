let inactivityTime = function () {
    let timer;
    const inactivityLimit = 10 * 1 * 1000; // 10 seconds in milliseconds
    let reloadedDuringLastInterval = false; // Flag to track reload status

    // Reset the timer when there's activity
    function resetTimer() {
        clearTimeout(timer);
        reloadedDuringLastInterval = false; // Reset the flag on activity
        timer = setTimeout(() => {
            const currentUrl = window.location.href;

            // If already reloaded during the last interval, do nothing
            if (reloadedDuringLastInterval) {
                console.log("Skipping reload since the page was already reloaded due to inactivity.");
                return;
            }

            let redirectUrl;
            if (currentUrl.startsWith('file:///')) {
                // Handle local file system (file:// protocol)
                const urlParts = currentUrl.split('/');
                // Remove everything after the last '/' to get the base directory
                urlParts.pop();
                redirectUrl = `${urlParts.join('/')}/index.html`;
            } else {
                // Handle hosted server (http:// or https:// protocol)
                const regex = /\/kiosk-\d+\/sport-\d+\/index\.html$/; // Match URLs ending with kiosk-x/sport-x/index.html
                if (regex.test(currentUrl)) {
                    // Redirect to kiosk-x/index.html
                    redirectUrl = currentUrl.replace(/\/sport-\d+\/index\.html$/, '/index.html');
                } else {
                    const urlParts = currentUrl.split('/');
                    // Assume the base kiosk directory is always at the 4th position: http://localhost:8000/kiosk-x/
                    const kioskBase = urlParts.slice(0, 4).join('/');
                    redirectUrl = `${kioskBase}/index.html`;
                }
            }

            // Redirect or reload the page
            if (currentUrl === redirectUrl || currentUrl.endsWith('index.html')) {
                window.location.reload(); // Reload the current page
            } else {
                window.location.href = redirectUrl; // Redirect to the home page
            }

            // Mark the page as reloaded
            reloadedDuringLastInterval = true;
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
