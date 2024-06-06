var map = L.map('map').setView([28.1780,84.0524],6);

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var baseLayers = {
      "OpenStreetMap": OpenStreetMap_Mapnik,
      "Open Topo Map": OpenTopoMap
};

const wmsurl = 'http://localhost:8080/geoserver/wms';


var NationalBoundaryLayer = L.tileLayer.wms(wmsurl, {
     layers: 'webmap:NationalBoundary',
     format: 'image/png',
     transparent: true
 });
 NationalBoundaryLayer.addTo(map);

 var ProvincialBoundaryLayer = L.tileLayer.wms(wmsurl, {
    layers: 'webmap:ProvincialBoundary',
    format: 'image/png',
    transparent: true
});
ProvincialBoundaryLayer.addTo(map);

 var DistrictBoundaryLayer = L.tileLayer.wms(wmsurl, {
    layers: 'webmap:DistrictBoundary',
    format: 'image/png',
    transparent: true
});
DistrictBoundaryLayer.addTo(map);

var MunicipalBoundaryLayer = L.tileLayer.wms(wmsurl, {
    layers: 'webmap:MunicipalBoundary',
    format: 'image/png',
    transparent: true
});
MunicipalBoundaryLayer.addTo(map);


var districtLayer = L.geoJSON(district);
var roadlayer = L.geoJSON(road);

var overlays = {
    "National Boundary": NationalBoundaryLayer,
    "Provincial Boundary": ProvincialBoundaryLayer,
    "District Boundary": DistrictBoundaryLayer,
    "Municipal Boundary": MunicipalBoundaryLayer,
    // 'testlayer': myLayer,
    // 'Districts': districtLayer,
    'Roads': roadlayer
};

L.control.layers(baseLayers, overlays).addTo(map);

