const LocationComponent = (location) => {
  return `
      <div class="location">
          <div>
              <img class="location__image" src="${location.img}" alt="">
          </div>
          <div class="location__name">${location.City}</div>
          <button id="button--${location.City}">Details</button>

          <dialog class="dialog--location" id="details--${location.City}">
              <div>Info: ${location.species}</div>
              <div>City: ${location.location}</div>
              <div>Tips: ${location.size}</div>
              

              <button class="button--close">Close Dialog</button>
          </dialog>
      </div>
  `
}

export default LocationComponent