let render = (elementId, cupsData) => {
    let divCup = document.getElementById(elementId);
    let html = "";
    for (let item of cupsData) {
        html += `<div class="cup-cart">
            <div class="background-img"></div>
            <h2>${item.name}</h2>
            <p>Volume: ${item.volume}</p>
            <p>Material: ${item.material}</p>
            <p>Color: ${item.color}</p>
            <div class="edit-buttons">
                <button class="blue-button" id="edit">Edit</button>
                <button class="red-button" onclick="cupDelete(${item.id})">Delete</button>
            </div>
        </div>`
    };
    divCup.innerHTML = html;
};

let cupDelete = (id) => {
    for (let i = 0; i < cups.length; i++){
        if (cups[i].id === id) {
            cups.splice(i, 1); 
            break;
        }
    };
    render("cup-carts", cups);
};

