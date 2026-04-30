const menuHTML = `
    <div class="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
    </div>
    <div id="indexMenu" class="side-menu">
        <a href="/" style="--i:1" class="menu-btn">Home</a>
        <button onclick="window.location.href='/bindingofisaacwotl.html'" style="--i:2" class="menu-btn">Binding of Isaac</button>
        <button onclick="window.location.href='/BTD5.html'" style="--i:3" class="menu-btn">BTD5</button>
        <button onclick="window.location.href='/Gladihoppers.html'" style="--i:4" class="menu-btn">Gladihoppers</button>
        <button onclick="window.location.href='/cookieclicker.html'" style="--i:5" class="menu-btn">Cookie Clicker</button>
    </div>
`;

document.body.insertAdjacentHTML('afterbegin', menuHTML);

function toggleMenu() {
    document.getElementById("indexMenu").classList.toggle("active");
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById("indexMenu");
    const btn = document.querySelector('.hamburger');
    if (menu && menu.classList.contains('active') && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("active");
    }
});
