const menuHTML = `
    <div class="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
    </div>
    <div id="indexMenu" class="side-menu">
        <a href="/">Home</a>
        <a href="/bindingofisaacwotl.html">Binding of Isaac</a>
        <a href="/BTD5.html">BTD5</a>
        <a href="/Gladihoppers.html">Gladihoppers</a>
        <a href="/cookieclicker.html">Cookie Clicker</a>
    </div>
`;

document.body.insertAdjacentHTML('afterbegin', menuHTML);

function toggleMenu() {
    document.getElementById("indexMenu").classList.toggle("active");
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById("indexMenu");
    const btn = document.querySelector('.hamburger');
    if (menu.classList.contains('active') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("active");
    }
});
