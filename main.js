const petArray = [
    {
        image: "data:image/jpeg;base64,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",
        name: "Merle",
        color: "black",
        "Special Skill": "smart",
        "Type of Pet": "cat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Neely",
        color: "brown",
        "Special Skill": "stupid",
        "Type of Pet": "cat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Vienna",
        color: "brown",
        "Special Skill": "annoying",
        "Type of Pet": "dog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Daisy",
        color: "black",
        "Special Skill": "wise",
        "Type of Pet": "dog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Dirk",
        color: "blue",
        "Special Skill": "big",
        "Type of Pet": "dog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Button",
        color: "white",
        "Special Skill": "strong",
        "Type of Pet": "cat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];

// const cats = (isACat) => {
//     return isACat["Type of Pet"] === "cat";
// }
// const dogs = (isADog) => {
//     return isADog["Type of Pet"] === "dog";
// }
const dogsFilter = petArray.filter(function(isADog) {
    return isADog["Type of Pet"] === "dog";
});
const catsFilter = petArray.filter(function(isACat) {
    return isACat["Type of Pet"] === "cat";
});

const showCats = () => {
    let layout = "";
    for (let i = 0; i < catsFilter.length; i++) {
        layout += `
    <div class="subdiv">
        <div class="card">
            <h1 class="card-header">${catsFilter[i].name}</h1>
            <img src="${catsFilter[i].image}" alt="${catsFilter[i].name}">
            <p class="color">Color: ${catsFilter[i].color}</p>
            <p class="description">Description: ${petArray[i].description}</p>
            <footer class="card-footer">Species: ${catsFilter[i]["Type of Pet"]}</footer>
        </div>
    </div>`;
    }
    mainDiv.innerHTML = layout;
}

const showDogs = () => {
    let layout = "";
    for (let i = 0; i < dogsFilter.length; i++) {
        layout += `
    <div class="subdiv">
        <div class="card">
            <h1 class="card-header">${dogsFilter[i].name}</h1>
            <img src="${dogsFilter[i].image}" alt="${dogsFilter[i].name}">
            <p class="color">Color: ${dogsFilter[i].color}</p>
            <p class="description">Description: ${petArray[i].description}</p>
            <footer class="card-footer">Species: ${dogsFilter[i]["Type of Pet"]}</footer>
        </div>
    </div>`;
    }
    mainDiv.innerHTML = layout;
}

const showAll = () => {
    let layout = "";
    for (let i = 0; i < petArray.length; i++) {
        layout += `
    <div class="subdiv">
        <div class="card">
            <h1 class="card-header">${petArray[i].name}</h1>
            <img src="${petArray[i].image}" alt="${petArray[i].name}">
            <p class="color">Color: ${petArray[i].color}</p>
            <p class="description">Description: ${petArray[i].description}</p>
            <footer class="card-footer">Species: ${petArray[i]["Type of Pet"]}</footer>
        </div>
    </div>`
    }
    mainDiv.innerHTML = layout;
}

document.getElementById("cats").addEventListener("click", showCats);
document.getElementById("dogs").addEventListener("click", showDogs);
document.getElementById("all-pets").addEventListener("click", showAll);
const submitButton = document.getElementById("submit");
const mainDiv = document.getElementById("main");

// catsButton.addEventListener("click", showCats);
// dogsButton.addEventListener("click", showDogs);
// allPetsButton.addEventListener("click", showAll);

const addPet = (image, name, color, skill, type, description) => {
    let newPet = {
        image: image,
        name: name,
        color: color,
        "Special Skill": skill,
        "Type of Pet": type,
        "description": description
    }
    petArray.push(newPet);
}

const addPetToArray = () => {
    let newImage = document.getElementById("new-image").value;
    let newName = document.getElementById("new-name").value;
    let newColor = document.getElementById("new-color").value;
    let newSkill = document.getElementById("new-skill").value;
    let newType = document.getElementById("new-type").value;
    let newDes = document.getElementById("description").value;
    let check = [newImage, newName, newColor, newSkill, newType, newDes].some(function (val) {
        console.log(newDes.length);
        return val === " " || val === "";
    });
    if (check) {
        console.log("Whoops");
    } else {
        addPet(newImage, newName, newColor, newSkill, newType, newDes);
        console.log(petArray);
    }
    document.getElementById("form-div").reset();
    document.getElementById("description").value = "";
}

submitButton.addEventListener("click", addPetToArray);
