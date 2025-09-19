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

    // Slider functionality
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".slider-dots");

    if (slidesContainer && slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                goToSlide(i);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll(".dot");

        const goToSlide = (slideIndex) => {
            slidesContainer.style.transform = `translateX(-${slideIndex * (100 / slides.length)}%)`;
            dots.forEach(dot => dot.classList.remove("active"));
            dots[slideIndex].classList.add("active");
            currentSlide = slideIndex;
        };

        const nextSlide = () => {
            const nextIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextIndex);
        };

        const startInterval = () => {
            slideInterval = setInterval(nextSlide, 5000); // 5 seconds
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            startInterval();
        };

        // Initial setup
        slidesContainer.style.width = `${slides.length * 100}%`;
        slides.forEach(slide => {
            slide.style.width = `${100 / slides.length}%`;
        });
        
        startInterval();
    }
});
