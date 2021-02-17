import { getEmployees, useEmployees } from "./employeeDataProvider.js"
import { Employee } from "./Employee.js"

const contentTarget = document.querySelector(".employees")


const _render = ( employeesCollection ) => {
 const employees = employeesCollection.map(employee => Employee(employee)).join("")
 contentTarget.innerHTML = `
  <h2>Employees</h2>
  <div class="employee__roster">
    ${ employees }
  </div>
 `
}


export const employeeList = () => {
 getEmployees()
  .then(() => {
   const employees = useEmployees()
   _render(employees)
  })
}
