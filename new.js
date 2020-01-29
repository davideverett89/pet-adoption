const petArray = [
    {
        image: "data:image/jpeg;base64,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",
        name: "George",
        color: "Green/Brown",
        skill: "The largest species of the Late Cretaceous Pteranodon attained wingspans of up to 30 feet, much larger than any flying birds alive today.",
        type: "Dinosaur",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWE3W3J0PJiVqCrSts9-61uN1GOdrtkp1fkxpxZzbIu9lYib7&s",
        name: "Mittens",
        color: "Black",
        skill: "A cat’s cerebral cortex contains about twice as many neurons as that of dogs. Cats have 300 million neurons, whereas dogs have about 160 million.",
        type: "Cat"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGN46mZBy3G9bXiWvykE9FsFgwI1G_O7XGbpV1NZGb1vyAKyA&s",
        name: "Neely",
        color: "White",
        skill: "Cats can be lethal hunters and very sneaky, when they walk their back paws step almost exactly in the same place as the front paws did beforehand, this keeps noise to a minimum and limits visible tracks.",
        type: "Cat"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvCezvcK6s1zLjUdnh3zGr8RIAcC3a3LoeZtg699cA9b_FB04nw&s",
        name: "Vienna",
        color: "Brown",
        skill: "Upright, stiff, rapid tail movement is not wagging or friendly but indicates a dog who's rather excited and focused.",
        type: "Dog"
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Steve",
        color: "Green/Brown",
        skill: "T. rex had a mouth full of serrated teeth; the largest tooth of any carnivorous dinosaur ever found was 12 inches (30 centimeters) long.",
        type: "Dinosaur"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iky6A_w24M01mlEun6Nsy5CWh267zdm7WsIFeTm0HTjqUKc-pQ&s",
        name: "Daisy",
        color: "White",
        skill: "New puppies have heat sensors in their noses to help find their moms while their eyes and ears are closed.",
        type: "Dog",
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Dirk",
        color: "Black",
        skill: "Stroking dogs and gazing into their eyes releases the feel good hormone oxytocin for both people and dogs.",
        type: "Dog"
    },
    {
        image: "data:image/jpeg;base64,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",
        name: "Phil",
        color: "Green/Brown",
        skill: "In terms of size, the Stegosaurus was large and heavily built. On average, a fully grown Stegosaurus was around 9 metres (30ft) in length, 4 metres (14ft) in height and up to nearly 5 metric tons in weight.",
        type: "Dinosaur",
    },
    {
        image: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/b/bengal-tiger_thumb.JPG",
        name: "Button",
        color: "Orange",
        skill: "The tiger is the biggest species of the cat family. Tigers can reach a length of up to 3.3 metres (11 feet) and weigh as much as 300 kilograms (660 pounds).",
        type: "Cat",
    },
];

const printToDOM = (element, domString) => {
    document.getElementById(element).innerHTML = domString;
}

const petCard = (arr) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type.toLowerCase() !== "cat" && arr[i].type.toLowerCase() !== "dog" && arr[i].type.toLowerCase() !== "dinosaur") {
            domString += `
            <div class="pet-card">
                <h2 class="card-header">${arr[i].name.charAt(0).toUpperCase() + arr[i].name.slice(1)}</h2>
                <img src="${arr[i].image}" alt="${arr[i].name}">
                <p class="color">Color: ${arr[i].color.charAt(0).toUpperCase() + arr[i].color.slice(1)}</p>
                <p class="description">${arr[i].skill}</p>
                <footer class="card-footer other">
                    <p>${arr[i].type.charAt(0).toUpperCase() + arr[i].type.slice(1)}</p>
                </footer>
            </div>`;
        } else {
            domString += `
            <div class="pet-card">
                <h2 class="card-header">${arr[i].name.charAt(0).toUpperCase() + arr[i].name.slice(1)}</h2>
                <img src="${arr[i].image}" alt="${arr[i].name}">
                <p class="color">Color: ${arr[i].color.charAt(0).toUpperCase() + arr[i].color.slice(1)}</p>
                <p class="description">${arr[i].skill}</p>
                <footer class="card-footer ${arr[i].type.toLowerCase()}">
                    <p>${arr[i].type.charAt(0).toUpperCase() + arr[i].type.slice(1)}</p>
                </footer>
            </div>`;
        }
    }
    printToDOM("main", domString);
}

const showPets = (e) => {
    const buttonId = e.target.id;
    if (buttonId === "all-pets") {
        petCard(petArray);
    } else {
        const myPets = [];
        for (let i = 0; i < petArray.length; i++) {
            if (petArray[i].type.toLowerCase() === buttonId) {
                myPets.push(petArray[i]);
            }
        }
        petCard(myPets);
    }
}

const showOther = () => {
    let output = "";
    for (let i = 0; i < petArray.length; i++) {
        if (petArray[i].type.toLowerCase() !== "cat" && petArray[i].type.toLowerCase() !== "dog" && petArray[i].type.toLowerCase() !== "dinosaur") {
            output += `
            <div class="pet-card">
                <h2 class="card-header">${petArray[i].name.charAt(0).toUpperCase() + petArray[i].name.slice(1)}</h2>
                <img src="${petArray[i].image}" alt="${petArray[i].name}">
                <p class="color">Color: ${petArray[i].color.charAt(0).toUpperCase() + petArray[i].color.slice(1)}</p>
                <p class="description">${petArray[i].skill}</p>
                <footer class="card-footer other">
                    <p>${petArray[i].type.charAt(0).toUpperCase() + petArray[i].type.slice(1)}</p>
                </footer>
            </div>`;
        }
    }
    printToDOM("main", output);
}

const addPet = (image, name, color, type, skill) => {
    let newPet = {
        image: image,
        name: name,
        color: color,
        type: type,
        skill: skill
    }
    petArray.push(newPet);
}

const addPetToArray = () => {
    let newImage = document.getElementById("new-image").value;
    let newName = document.getElementById("new-name").value;
    let newColor = document.getElementById("new-color").value;
    let newType = document.getElementById("new-type").value;
    let newSkill = document.getElementById("new-skill").value;
    let check = [newImage, newName, newColor, newType, newSkill].some(function (val) {
        return val === " " || val === "";
    });
    if (check) {
        alert("All fields must be filled out!");
    } else {
        addPet(newImage, newName, newColor, newType, newSkill);
    }
    document.getElementById("form-div").reset();
    document.getElementById("new-skill").value = "";
}

const init = () => {
    petCard(petArray);
    event();
}

document.getElementById("cat").addEventListener("click", showPets);
document.getElementById("dog").addEventListener("click", showPets);
document.getElementById("dinosaur").addEventListener("click", showPets);
document.getElementById("other").addEventListener("click", showOther);
document.getElementById("all-pets").addEventListener("click", showPets);
document.getElementById("submit").addEventListener("click", addPetToArray);