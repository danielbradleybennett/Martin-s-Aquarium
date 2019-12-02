import { useTip } from "./TipDataProvider.js"


import tipComponent from "./Tip.js"


const TipListComponent = () => {

  
  const contentElement = document.querySelector(".fishTips")
  const tips = useTip()

  let allTipHTML = ""
  for (const martinTips of tips) {
    const TipHTML = tipComponent(martinTips)
    allTipHTML += TipHTML
    
  }



 
  contentElement.innerHTML += `
      
          ${allTipHTML}
     
  `
}

export default TipListComponent