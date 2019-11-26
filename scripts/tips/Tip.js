
const tipComponent = (tips) => {
return `
  <div class="tip">
    <h1 class="tipTitle"> ${tips.title}<h1>
    <p class ="tipTips"> ${tips.tips}</p>
  </div> `
}

export default tipComponent