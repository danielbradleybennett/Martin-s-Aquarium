/* const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  document.querySelector("#button--bitey").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--bitey")
          theDialog.showModal()
      }
  )



document.querySelector("#button--Ariel").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Ariel")
      theDialog.showModal()
  }
)

document.querySelector("#button--Levi").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Levi")
      theDialog.showModal()
  }
)

document.querySelector("#button--Dangles").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Dangles")
      theDialog.showModal()
  }
)

document.querySelector("#button--Kray").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Kray")
      theDialog.showModal()
  }
)

document.querySelector("#button--Bubbles").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--Bubbles")
      theDialog.showModal()
  }
)

} */



 // Get a reference to all buttons that start with "button--"
 const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }


 const allDetailButtons = document.querySelectorAll("button[id^='button--']")
// console.log(allDetailButtons)
 // Add an event listener to each one
 for (const btn of allDetailButtons) {
     btn.addEventListener(
         "click",
         theEvent => {
             console.log("hi mo")
             const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
             const theDialog = document.querySelector(dialogSiblingSelector)
             theDialog.showModal()
         }
     )
 }


 }

export default initializeDetailButtonEvents

