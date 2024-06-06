const highways = [
    {
        name: "Prithvi Highway",
        description: "Prithvi Highway is a major road in Nepal. It connects the capital city of Kathmandu with the town of Pokhara. The highway is approximately 174 kilometers long.",
        image: "prithvi_highway.jpg",
        additionalDescription: "Prithvi Highway offers stunning views of the Himalayas, making it a popular route for tourists and travelers."
    },
    {
        name: "Mahendra Highway",
        description: "Mahendra Highway, also known as East-West Highway, is the longest highway in Nepal. It spans the entire width of the country, connecting Bhadrapur in the east to Mahendranagar in the west.",
        image: "mahendra_highway.jpg",
        additionalDescription: "Mahendra Highway is an essential lifeline for transportation and trade across Nepal, facilitating movement between the eastern and western regions."
    },
    {
        name: "Siddhartha Highway",
        description: "Siddhartha Highway is an important road in Nepal. It connects the cities of Butwal and Pokhara, passing through the Terai region and the hills of western Nepal.",
        image: "sidhhartha_highway.jpg",
        additionalDescription: "Siddhartha Highway is named after Siddhartha Gautama, the founder of Buddhism, and is often traveled by pilgrims visiting sacred sites."
    },
    {
        name: "Tribhuvan Highway",
        description: "Tribhuvan Highway is a highway in Nepal. It connects the capital city of Kathmandu with the eastern part of the country. The highway is named after King Tribhuvan, a former monarch of Nepal.",
        image: "tribhuvan_highway.jpg",
        additionalDescription: "Tribhuvan Highway is a vital link for trade and commerce between Kathmandu and the eastern regions, facilitating economic activities."
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const highwayList = document.getElementById('highway-list');

    highways.forEach(highway => {
        const highwayElement = document.createElement('div');
        highwayElement.classList.add('highway');
        highwayElement.innerHTML = `
            <img src="${highway.image}" alt="${highway.name}">
            <div class="highway-content">
                <h2>${highway.name}</h2>
                <p>${highway.description}</p>
                <p>${highway.additionalDescription}</p>
            </div>
        `;
        highwayList.appendChild(highwayElement);
    });
});