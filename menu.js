// This contains the HTML for your menu
const menuHTML = `
    <div class="hamburger" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div id="indexMenu" class="side-menu">
        <a href="/">Home</a>
        <a href="/bindingofisaacwotl.html">Binding of Isaac</a>
        <a href="/BTD5.html">BTD5</a>
        <a href="/Gladihoppers.html">Gladihoppers</a>
        <a href="/links.html">Soon</a>
    </div>
`;

// Injects the menu into the page
document.body.insertAdjacentHTML('afterbegin', menuHTML);

// Menu toggle logic
function toggleMenu() {
    const menu = document.getElementById("indexMenu");
    menu.classList.toggle("active");
}

// Close menu if user clicks outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById("indexMenu");
    const btn = document.querySelector('.hamburger');
    if (menu && !menu.contains(event.target) && btn && !btn.contains(event.target)) {
        menu.classList.remove("active");
    }
});
