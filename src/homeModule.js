//the home module
const loadHome = content => {
    content.innerHTML = `<h1 class="box-element">About The Restaurant of Nothingness</h1>
    <img id="home-img" src="img/empty-white-room.jpg" alt="An empty white room">
    <div id="remark" class="box-element">"A great place to do nothing!" - No one</div>
    <div id="description" class="box-element">Welcome to the Restaurant of Nothingness. Enjoy a break from the stresses of regular 
      restaurants including people, decorations, sounds, and worst of all: food.</div>`;
}

export {loadHome};