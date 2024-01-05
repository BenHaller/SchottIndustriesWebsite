// sleep function allows delay in navbar dark theme being removed to make UI more appealing
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Handles the navbar being expanded
// Sets the navbar theme to dark so that expanded navigation options aren't displayed over carousel
document.getElementById('nav').addEventListener('show.bs.collapse', function () {
    
    var navbar = document.getElementById('homepageNavBar');
    navbar.classList.toggle('bg-dark');
});

// Handles the navbar being collapsed
// Sets the navbar back to transparent after waiting for expansion to collapse
document.getElementById('nav').addEventListener('hide.bs.collapse', function () {

    var navbar = document.getElementById('homepageNavBar');
    sleep(400).then(() => { navbar.classList.toggle('bg-dark'); })
});

// Handles edge case where user 1) expands navbar then 2) increases screen width to remove navbar expand icon
function updateNavbarClass() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var navbar = document.getElementById('homepageNavBar');
    
    // Check the window width and update the class accordingly
    if (windowWidth >= 992) {
        navbar.classList.remove('bg-dark');
    }
}

updateNavbarClass();

// Listens for window width change, updates navbar class if necessary 
window.addEventListener('resize', function () {
    updateNavbarClass();
});