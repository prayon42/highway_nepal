// JavaScript for populating district options and highway list dynamically

// Sample data for district options and highways
const districts = ['District A', 'District B', 'District C', 'District D'];
const highways = {
    'District A': ['Highway 1', 'Highway 2'],
    'District B': ['Highway 3', 'Highway 4'],
    'District C': ['Highway 5', 'Highway 6'],
    'District D': ['Highway 7', 'Highway 8']
};

// Function to populate district options
function populateDistrictOptions() {
    const districtSelect = document.getElementById('district');
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });
}

// Function to populate highway list based on selected district
function populateHighwayList(selectedDistrict) {
    const highwayList = document.getElementById('highway-list');
    highwayList.innerHTML = '';
    highways[selectedDistrict].forEach(highway => {
        const listItem = document.createElement('li');
        listItem.textContent = highway;
        highwayList.appendChild(listItem);
    });
}

// Event listener for district selection change
document.getElementById('district').addEventListener('change', function() {
    const selectedDistrict = this.value;
    populateHighwayList(selectedDistrict);
});

// Call function to populate district options on page load
populateDistrictOptions();
