const menuHTML = `
    <div class="hamburger" onclick="toggleMenu()">
        <span></span><span></span><span></span>
    </div>
    <div id="indexMenu" class="side-menu">
        <a href="/" style="--i:1">Home</a>
        <span class="menu-item" style="--i:2">Binding of Isaac</span>
        <span class="menu-item" style="--i:3">BTD5</span>
        <span class="menu-item" style="--i:4">Gladihoppers</span>
        <span class="menu-item" style="--i:5">Cookie Clicker</span>
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
