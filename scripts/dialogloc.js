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
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  document.querySelector("#button--nihil").addEventListener(
      "click",
      theClickEvent => {
          const theDialog = document.querySelector("#details--nihil")
          theDialog.showModal()
      }
  )



document.querySelector("#button--africa").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--africa")
      theDialog.showModal()
  }
)

document.querySelector("#button--sparrow").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--sparrow")
      theDialog.showModal()
  }
)

document.querySelector("#button--shadowfell").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--shadowfell")
      theDialog.showModal()
  }
)

document.querySelector("#button--waterdeep").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--waterdeep")
      theDialog.showModal()
  }
)

document.querySelector("#button--gondor").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--gondor")
      theDialog.showModal()
  }
)

document.querySelector("#button--daggerfell").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--daggerfell")
      theDialog.showModal()
  }
)

document.querySelector("#button--mordor").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--mordor")
      theDialog.showModal()
  }
)

document.querySelector("#button--rivendell").addEventListener(
  "click",
  theClickEvent => {
      const theDialog = document.querySelector("#details--rivendell")
      theDialog.showModal()
  }
)



}






export default initializeDetailButtonEvents

