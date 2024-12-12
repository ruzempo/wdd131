// Product Array

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


// Call function to fill products
fillproducts(products);


// function to fill the select with the array content
function fillproducts(listaP) {

    for (const producto of listaP) {
        const opcion = document.createElement("option");
        opcion.value = producto.id;
        opcion.text = producto.name;
        document.querySelector("#sproductos").appendChild(opcion);
    }

}