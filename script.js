// Allows the navbar to gain a solid background (boostrap 5's provided bg-dark) when the toggle icon is clicked
// Improves accessibility (words no longer displayed over dynamic background)
// When the navbar expand icon is clicked and the navbar is collapsed, the solid background is removed
function toggleNavbar() {
    var navbar = document.getElementById('homepageNavBar');
    navbar.classList.toggle('bg-dark');
}


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