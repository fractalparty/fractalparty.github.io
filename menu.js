// menu.js
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
        <a href="/cookieclicker.html">Cookie Clicker</a>
    </div>
`;

// Add the menu to the very top of the <body>
document.body.insertAdjacentHTML('afterbegin', menuHTML);

function toggleMenu() {
    const menu = document.getElementById("indexMenu");
    menu.classList.toggle("active");
}

// Close menu if clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById("indexMenu");
    const btn = document.querySelector('.hamburger');
    if (menu.classList.contains('active')) {
        if (!menu.contains(event.target) && !btn.contains(event.target)) {
            menu.classList.remove("active");
        }
    }
});
