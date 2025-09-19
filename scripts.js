document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and insert HTML content
    const includeHTML = (elementId, filePath) => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading HTML:', error));
    };

    // Load header and footer
    includeHTML("header-placeholder", "header.html");
    includeHTML("footer-placeholder", "footer.html");
});
