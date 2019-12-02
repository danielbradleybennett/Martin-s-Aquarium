
 const borderColorChange = () => {
  const fishTips = document.querySelectorAll(".tip")

  for (const tip of fishTips) {
      tip.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              tip.style.border = "blue 5px solid";
          }
      )


      tip.addEventListener("mouseout", (theMouseOutEvent) => {
          tip.style.border = "";
      })
  }
}

 export default borderColorChange

