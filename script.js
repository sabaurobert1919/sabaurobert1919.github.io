document.getElementById('resource-monitoring').addEventListener('dblclick', function () {
    const images = document.querySelectorAll('#resource-monitoring .slideshow img');
    let index = 0;
    let slideshowActive = true;

    // Create a container for the slideshow
    const slideshowContainer = document.createElement('div');
    slideshowContainer.classList.add('slideshow-active');
    slideshowContainer.style.position = 'fixed';
    slideshowContainer.style.top = '0';
    slideshowContainer.style.left = '0';
    slideshowContainer.style.width = '100%';
    slideshowContainer.style.height = '100%';
    slideshowContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    slideshowContainer.style.display = 'flex';
    slideshowContainer.style.justifyContent = 'center';
    slideshowContainer.style.alignItems = 'center';
    slideshowContainer.style.zIndex = '1000';

    // Add the first image to the slideshow
    const slideshowImage = document.createElement('img');
    slideshowImage.src = images[index].src;
    slideshowImage.style.maxWidth = '80%';
    slideshowImage.style.maxHeight = '80%';
    slideshowContainer.appendChild(slideshowImage);
    document.body.appendChild(slideshowContainer);

    // Function to show the next image
    const showNextImage = () => {
        index = (index + 1) % images.length;
        slideshowImage.src = images[index].src;
    };

    // Interval for the slideshow
    const slideshowInterval = setInterval(showNextImage, 3000);

    // Close slideshow on click
    slideshowContainer.addEventListener('click', () => {
        clearInterval(slideshowInterval);
        document.body.removeChild(slideshowContainer);
    });
});
