
// Mock data
var mockParks = [
  {
    name: "Park 1 name",
    description: "Park 1 description",
    designation: "Park 1 designation",
    url: "Park 1 url",
    directionsUrl: "Park 1 directionsUrl",
    weatherInfo: "Park 1 weatherInfo",
    images: "Park 1 images",
    coordinates: "Park 1 coordinates",
  },
  {
    name: "Park 2 name",
    description: "Park 2 description",
    designation: "Park 2 designation",
    url: "Park 2 url",
    directionsUrl: "Park 2 directionsUrl",
    weatherInfo: "Park 2 weatherInfo",
    images: "Park 2 images",
    coordinates: "Park 2 coordinates",
  },
]

class API {
  getParks () {
    return mockParks;
  }
}

export let NPSAPI = new API();
