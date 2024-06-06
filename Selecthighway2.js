document.addEventListener('DOMContentLoaded', function () {
    // Get the select element
    var select = document.getElementById('district');
    
    // Extract unique district names from the GeoJSON data
    var districtNames = [...new Set(district.features.map(feature => feature.properties.DISTRICT))];

    // Populate the select element with options
    districtNames.forEach(function (districtName) {
        var option = document.createElement('option');
        option.textContent = districtName;
        option.value = districtName;
        select.appendChild(option);
    });

    document.getElementById('showHighwayButton').addEventListener('click', function() {
        var selectedDistrict = select.value;
        console.log(selectedDistrict);
        
        var filteredDistrict = district.features.find(feature => feature.properties.DISTRICT === selectedDistrict);
        console.log(filteredDistrict);

        // Remove any existing district layer
        if (window.filtereddist) {
            map.removeLayer(window.filtereddist);
                    }

        // Add the selected district to the map
        window.filtereddist = L.geoJSON(filteredDistrict).addTo(map);
        
        // Fit the map view to the selected district
        var districtBounds = window.filtereddist.getBounds();
        map.fitBounds(districtBounds);

        var intersectingRoads = [];
        function onEachFeature(feature, layer) {
            if (feature.properties && feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }
        // Loop through each road feature
        road.features.forEach(function(feature) {
            // Check if the road intersects with the selected district
            var intersects = turf.booleanIntersects(filteredDistrict, feature);
            console.log(intersects);
            
            if (intersects) {
                function addpopup(feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name);
                    }
                }
                // If there's an intersection, add the road to the map with a specific style
                var linelayer = L.geoJSON(feature, {
                    style: {
                        color: 'red', // Set the color to red
                        weight: 2 // Set the weight to 2
                    },
                    onEachFeature: addpopup
                }).addTo(map);
                intersectingRoads.push(feature);
            }
        });

        var highwayListDiv = document.getElementById('highwayList');
        highwayListDiv.innerHTML = ''; 

        // Create a Set to store unique highway names
        var uniqueHighways = new Set();

        intersectingRoads.forEach(function(road) {
            var highwayName = road.properties.NAME;

            // Check if the highway name is not already in the Set
            if (highwayName !== null && !uniqueHighways.has(highwayName)) {
                // Create a new div element for the highway
                var highwayItem = document.createElement('div');
                highwayItem.textContent = highwayName;
                highwayItem.classList.add('highwayItem'); 
                highwayListDiv.appendChild(highwayItem);

                // Add the highway name to the Set
                uniqueHighways.add(highwayName);
            }
        });
    });
});
