let inactivityTime = function () {
    let timer;
    const inactivityLimit = 10 * 1 * 1000; // 10 seconds in milliseconds

    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const currentUrl = window.location.href;

            // Check if the URL matches the file:/// protocol and contains kiosk-x
            const regex = /\/kiosk-\d+\/.+/; // Match URLs with kiosk-x and any subpath
            if (regex.test(currentUrl)) {
                const redirectUrl = currentUrl.replace(/\/kiosk-\d+\/.+/, (match) => {
                    const basePath = match.match(/\/kiosk-\d+/)[0]; // Extract /kiosk-x
                    return `${basePath}/index.html`; // Redirect to kiosk-x/index.html
                });
                window.location.href = redirectUrl;
            }
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
