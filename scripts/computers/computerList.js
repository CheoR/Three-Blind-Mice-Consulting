import { getComputers, useComputers } from "./computerDataProvider.js"
import { Computer } from "./Computer.js"

const contentTarget = document.querySelector(".computers")

const _render = (computerCollection) => {
 const computers = computerCollection.map((computer) => Computer(computer)).join("")

 contentTarget.innerHTML = `
  <h2>Computers</h2>
  <ul class="computerList">
   ${ computers }
  </ul>
 `
} // render


 export const computerList = () => {

 getComputers()
  .then(()=> {
   const computers = useComputers()
   _render(computers)
  })
 } // computerList