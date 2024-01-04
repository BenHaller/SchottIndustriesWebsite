function scrollToServices(target) {
    // Get the target element by its id
    var targetElement = document.getElementById(target);

    if (target) {
        // Calculate the center position
        var scrollPosition = targetElement.offsetTop - window.innerHeight / 10 + targetElement.clientHeight / 2;
  
        // Scroll to the center position with smooth behavior
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }
}