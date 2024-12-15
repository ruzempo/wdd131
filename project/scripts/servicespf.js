const pfservices = [
    {
        service: "Registration in a Tax Regime.",
        description: "Register the taxpayer in an appropriate tax regime, taking into account their economic activity and their number of economic operations."
    },
    {
        service: "Suspension and/or withdrawal of activities",
        description: "Process notification to the SAT about the suspension of activities or the withdrawal of the taxpayer."
    },
    {
        service: "Updates to the RFC",
        description: "Update the taxpayer's registered information in the RFC, such as their tax address, contact form, increase/decrease in tax obligations, etc."
    }, {
        service: "Monthly taxes",
        description: "Collect the taxpayer's income and expenses to determine the ISR and VAT tax, capture the information in the SAT Portal and generate the monthly declaration."
    },
    {
        service: "Annual taxes",
        description: "Compile the taxpayer's annual income and expenses to determine the ISR tax, capture the information in the SAT Portal and generate the annual declaration"
    },
    {
        service: "Digital stamps",
        description: "Process and update digital stamps to generate CFDI (Electronic Invoicing) documents."
    },
    {
        service: "Electronic Signature Update",
        description: "Update of the Electronic Signature through the SAT portal before its validity."
    },
    {
        service: "Billing",
        description: "Compile the necessary information for the capture, sealing and issuance of invoices."
    }
];

createServiceCards(pfservices);

function createServiceCards(servicios) {
    // document.querySelector(".parent").innerHTML = "";
    servicios.forEach(
        serv => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let descripcion = document.createElement("p");

            name.textContent = serv.service;
            descripcion.innerHTML = `<span class="label"></span> ${serv.description}`;


            card.appendChild(name);
            card.appendChild(descripcion);
            card.setAttribute = ("border", "1px solid #628203");

            document.querySelector(".pf").appendChild(card);
        }
    );

};