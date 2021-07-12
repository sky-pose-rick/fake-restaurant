//the menu module
const loadMenu = content => {
    content.innerHTML = `<h1>Menu of The Restaurant of Nothingness</h1>
        <div class="box-element menu-item">
            <div class="menu-title">Nothing</div>
            <div class="menu-desciption">No information available.</div>
        </div>
        <div class="box-element menu-item">
            <div class="menu-title">Red Nothing</div>
            <div class="menu-desciption">Trust us, it is red.</div>
        </div>`
}

export {loadMenu};