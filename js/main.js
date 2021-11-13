let getCups = () => JSON.parse(localStorage.getItem("cups"));
let setCups = (cups) => localStorage.setItem("cups", JSON.stringify(cups));

setCups([
    {id: 0, name: 'tea', color: 'red', volume: 250, material: 'glass'}, 
    {id: 1, name: 'coffee', color: 'green', volume: 300, material: 'metal'}, 
    {id: 2, name: 'wiskey', color: 'red', volume: 280, material: 'paper'},
    {id: 3, name: 'beer', color: 'blue', volume: 250, material: 'glass'}, 
    {id: 4, name: 'cola-cola', color: 'green', volume: 400, material: 'metal'}, 
    {id: 5, name: 'vodka', color: 'red', volume: 280, material: 'paper'} 
]);

render("cup-carts", getCups());

let filtredCup = (searchTerm) => getCups().filter((cup) => 
    cup.name.indexOf(searchTerm) >= 0 || cup.color.indexOf(searchTerm) >= 0 || cup.material.indexOf(searchTerm) >= 0 || `${cup.volume}`.indexOf(searchTerm) >= 0);

let createBtn = document.getElementById("crtCup").addEventListener("click", () => {
    let create = document.getElementById("create");
    if (!create.classList.contains("visible")) {
        create.classList.add("visible");
    };
});

let findCup = (currentId, cupsParam = null) => {
    let cups = cupsParam || getCups();
    for (let i = 0; i < cups.length; i++){
        if (cups[i].id === currentId) {
            return cups[i];
        }
    };
};

let editeBtn = document.getElementsByClassName("edtCup");
let edit = document.getElementById("edit");
for (let e of editeBtn) {
    e.addEventListener("click", (event) => {
        let currentId = +event.target.attributes[1].value;
        if (!edit.classList.contains("visible")) {
            edit.classList.add("visible");
        };
        let currentCup = findCup (currentId);
        document.getElementById("eid").value = currentCup.id;
        document.getElementById("ename").value = currentCup.name;
        document.getElementById("evolume").value = currentCup.volume;
        document.getElementById("ematerial").value = currentCup.material;
        document.getElementById("ecolor").value = currentCup.color;
    });
};

let editCup = document.getElementById("editCup").addEventListener("click", (event) => {
    event.stopPropagation();
    let cups = getCups();
    let cupName = document.getElementById("ename").value;
    let cupVolume = +document.getElementById("evolume").value;
    let cupMaterial = document.getElementById("ematerial").value;
    let cupСolor = document.getElementById("ecolor").value;
    let cupId = +document.getElementById("eid").value;
    let currentCup = findCup(cupId);
    currentCup.name = cupName;
    currentCup.volume = cupVolume;
    currentCup.material = cupMaterial;
    currentCup.color = cupСolor;
    setCups(cups);
    render("cup-carts", cups);
    document.getElementById("edit").classList.remove("visible");
});

let closeBtnCreate = document.getElementById("createClose").addEventListener("click", () => {
    document.getElementById("create").classList.remove("visible");
});

let closeBtnEdit = document.getElementById("editClose").addEventListener("click", () => {
    document.getElementById("edit").classList.remove("visible");
});

let createNewCup = document.getElementById("createNewCup").addEventListener("click", (event) => {
    event.stopPropagation();
    let cups = getCups();
    let cupName = document.getElementById("cname").value;
    let cupVolume = document.getElementById("cvolume").value;
    let cupMaterial = document.getElementById("cmaterial").value;
    let cupСolor = document.getElementById("ccolor").value;
    cups.push({id: cups.length, name: cupName, color: cupСolor, volume: +cupVolume, material: cupMaterial});
    setCups(cups);
    render("cup-carts", cups);
    document.getElementById("create").classList.remove("visible");
});

let count = document.getElementById("count").addEventListener("click", () => {
    let totalCount = document.getElementById("totalCount");
    totalCount.classList.add("visible-count");
    let searchTerm = document.getElementById("search").value;
    let sumVol = 0;
    for (let vol of filtredCup(searchTerm)) {
        sumVol += vol.volume;
    };
    totalCount.innerHTML = `Total volume: ${sumVol} ml`
});

let sortCup = document.getElementById("sort").addEventListener("click", (event) => {
    let isChecked = event.target.checked;
    let cups = getCups();
    if (isChecked) {
        cups.sort((a, b) => a.volume - b.volume);
    } else {
        cups.sort((a, b) => a.id - b.id);
    };
    render("cup-carts", cups);
});


let find = document.getElementById("search").addEventListener("keyup", (event) => {
    let searchTerm = event.target.value;
    let filtredCups = filtredCup(searchTerm);
    render("cup-carts", filtredCups);
});

// let find1 = document.getElementById("search").addEventListener("click", (event) => {
//     let searchTerm = event.target.value;
//     let filtredCups = filtredCup(searchTerm);
//     render("cup-carts", filtredCups);
// });