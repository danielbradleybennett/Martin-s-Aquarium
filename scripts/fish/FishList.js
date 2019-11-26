import { useFish } from "./FishDataProvider.js"

/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import FishComponent from "./Fish.js"


const FishListComponent = () => {

  // Get a reference to the `<article class="fishList">` element
  const contentElement = document.querySelector(".fishList")
  const fishes = useFish()

  let allFishHTML = ""
  for (const fish of fishes) {
    const fishHTML = FishComponent(fish)
    allFishHTML += fishHTML
    
  }



  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishListSection">
          ${allFishHTML}
      </section>
  `
}

export default FishListComponent