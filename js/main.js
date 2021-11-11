let cups = [
    {id: 0, name: 'Cup 1', color: 'white', volume: 250, material: 'glass'}, 
    {id: 1, name: 'Cup 2', color: 'metalic', volume: 500, material: 'metal'}, 
    {id: 2, name: 'Cup 3', color: 'red', volume: 280, material: 'paper'},
    {id: 3, name: 'Cup 4', color: 'white', volume: 250, material: 'glass'}, 
    {id: 4, name: 'Cup 5', color: 'metalic', volume: 500, material: 'metal'}, 
    {id: 5, name: 'Cup 6', color: 'red', volume: 280, material: 'paper'} 
    ];

    render("cup-carts", cups);

let createBtn = document.getElementById("crtCup").addEventListener("click", (event) => {
    let create = document.getElementById("create");
    if (!create.classList.contains("visible")) {
        create.classList.add("visible");
    };
});

let closeBtn = document.getElementById("close").addEventListener("click", (event) => {
    document.getElementById("create").classList.remove("visible");
});

let createNewCup = document.getElementById("createNewCup").addEventListener("click", (event) => {
    event.stopPropagation();
    let cupName = document.getElementById("cname").value;
    let cupVolume = document.getElementById("cvolume").value;
    let cupMaterial = document.getElementById("cmaterial").value;
    let cupСolor = document.getElementById("ccolor").value;
    cups.push({id: cups.length, name: cupName, color: cupСolor, volume: cupVolume, material: cupMaterial});
    render("cup-carts", cups);
});

