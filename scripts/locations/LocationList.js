import LocationComponent from "./Location.js"
import { useLocation } from "./LocationDataProvider.js"


const LocationListComponent = () => {

  // Get a reference to the `<article class="locationList">` element
  const contentElement = document.querySelector(".locations")
  const places = useLocation()

  let allLocationHTML = ""
  for (const location of places) {
    
    const locationHTML = LocationComponent(location)
    allLocationHTML += locationHTML
    
  }



  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="locationList">
          ${places.map((currentLocation) => {return LocationComponent(currentLocation)}).join("")}
      </section>
  `
}

export default LocationListComponent