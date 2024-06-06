    // Wait for the DOM content to be fully loaded
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
    
    var filteredDistrict = district.features.find(district => district.properties.DISTRICT === selectedDistrict);
    console.log(filteredDistrict);

    var filtereddist = L.geoJSON(filteredDistrict).addTo(map);
    

// count = 0;
    road.features.forEach(function(feature) {

            // var linelayer = L.geoJSON(feature).addTo(map);
            // count +=1;
            // console.log(count)

            //var lines = turf.feature(feature.geometry);
            // var clipped = turf.bboxClip(lines,filteredDistrict );
            
    var clipped = turf.booleanIntersects(filteredDistrict,feature);
    console.log(clipped)

    if (clipped ===true){
        var linelayer = L.geoJSON(feature,{
            style: {
                color: 'red', // Set the color to red
                weight: 2 // Set the weight to 2
            }
        }).addTo(map);
    }
    });

    // for (let i = 0; i < count; i++) {

    // var lines = turf.feature(road.features[i].geometry);
    // var clipped = turf.bboxClip(lines,filteredDistrict );
    // var linelayer = L.geoJSON(clipped).addTo(map);

    // }




    // Assuming road is your GeoJSON object

// Loop through each feature in the road GeoJSON



 

//    var output =  turf.lineIntersect(filteredDistrict, road);
//     var districtLayer = L.geoJSON(output).addTo(map);



    // var intersectedRoads = turf.lineIntersect(filteredDistrict, road);
        // var districtLayer = L.geoJSON(intersectedRoads).addTo(map);
    




});

// console.log(district.features.find(district => district.properties.DISTRICT === selectedDistrict))




});