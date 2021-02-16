import { getComputers, useComputers } from "./computers/computerDataProvider.js"
import { getEmployees, useEmployees } from "./employees/employeeDataProvider.js"

console.log("Welcome to the main module")

getComputers()
 .then(()=> {
  const computers = useComputers()
  console.table(computers)
 })

 getEmployees()
  .then(() => {
   const employees = useEmployees()
   console.table(employees)
  })
  