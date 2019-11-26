import { useTip } from "./TipDataProvider.js"


import tipComponent from "./Tip.js"


const TipListComponent = () => {

  
  const contentElement = document.querySelector(".martinTips")
  const tips = useTip()

  let allTipHTML = ""
  for (const martinTips of tips) {
    const TipHTML = tipComponent(martinTips)
    allTipHTML += TipHTML
    
  }



 
  contentElement.innerHTML += `
      <section class="martinTips">
          ${allTipHTML}
      </section>
  `
}

export default TipListComponent