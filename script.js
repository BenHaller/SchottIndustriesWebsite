function updateContentPadding() {
    // Get the height of the carousel
    var carouselHeight = document.getElementById('homepageCarousel').offsetHeight;

    // Set the top padding of the content-section
    document.getElementById('contentSection').style.paddingTop = (carouselHeight - 60) + 'px';

    // Get the left padding of the cards
    var cardsLeftPadding = document.getElementById('residentialElectricalCard').cardsLeftPadding;

    // Set the left padding of the title
    document.getElementById('sectorsTitle').style.paddingLeft = cardsLeftPadding + 'px';
}

// Update padding on page load
updateContentPadding();

// Update padding when the window is resized
window.addEventListener('resize', function () {
    updateContentPadding();
});