


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Recife Brazil",
        location: "Brazil",
        dedicated: "2000, December, 15",
        area: 37200,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/400x250/recife-brazil-temple-lds-700211-wallpaper.jpg"
    },
    {
        templeName: "Frankfurt  Germany",
        location: "Frankfurt, Germany",
        dedicated: "2023, April, 2",
        area: 37200,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-3-2278181.jpg"
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Japan",
        dedicated: "2019, April, 7",
        area: 12437,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    }
    // Add more temple objects here...
];

createTempleCard(temples);

// Filtros para el menu
//Old option
const oldtemples = document.querySelector("#old");
oldtemples.addEventListener(
    "click", () => {
        createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) < "1900"));
        document.querySelector("#subtitle").innerHTML = `<h2>Old</h2>`;
    });

//New option
const newtemples = document.querySelector("#new");
newtemples.addEventListener(
    "click", () => {
        createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) > "2000"));
        document.querySelector("#subtitle").innerHTML = `<h2>New</h2>`;
    }
);

//Large option
const largetemples = document.querySelector("#large");
largetemples.addEventListener(
    "click", () => {
        createTempleCard(temples.filter(temple => temple.area > 90000));
        document.querySelector("#subtitle").innerHTML = `<h2>Large</h2>`;
    }
);

// Small option
const smalltemples = document.querySelector("#small");
smalltemples.addEventListener(
    "click", () => {
        createTempleCard(temples.filter(temple => temple.area < 10000));
        document.querySelector("#subtitle").innerHTML = `<h2>Small</h2>`;
    }
);

// All temples
const alltemples = document.querySelector("#all");
alltemples.addEventListener(
    "click", () => {
        createTempleCard(temples);
        document.querySelector("#subtitle").innerHTML = `<h2>Home</h2>`;
    }
);

function createTempleCard(filteredTemples) {
    document.querySelector(".parent").innerHTML = "";
    filteredTemples.forEach(
        temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);
            card.setAttribute("border", "Solid 3px gray");

            document.querySelector(".parent").appendChild(card);
        }
    );
};