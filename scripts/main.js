import initializeDetailButtonEvents from './dialog.js'
import borderColorChange from './TipsBorder.js'
import { useFish } from './FishDataProvider.js'


initializeDetailButtonEvents()
borderColorChange()
const allOFTheFish = useFish()

console.log("all of the fish:", allOFTheFish)

for (const fish of allOFTheFish) {
  console.log("individual fish object:", fish)

}
