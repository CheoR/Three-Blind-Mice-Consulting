import { getEmployees, useEmployees } from "../employees/employeeDataProvider.js"
import { getCustomers, useCustomers } from "./customerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "../assignments/employeeCustomerProvider.js"

import { Customer } from "./Customer.js"

const contentTarget = document.querySelector(".customers")


const _render = ( customers, employees, assignments ) => {
 /*
  1. loop through employees
    a. for each employee
      i. filter out records from assignments that match employee's id
      ii. for each record in result
        iia. use coustomer id to find the customer object in customers table
        iib. return object
      iii. return list of customer objcts employee had an assignment at
    b. return employe object with employee and customer information
 */
  const customerEmployeesAssignment = customers.map((customer) => {
    const employeeAssignments = assignments.filter((assignment) => assignment.customerId === customer.id ) // assignments.filter
    const employeeList = employeeAssignments.map((assignment) => {
      return employees.find((employee) => employee.id === assignment.employeeId)
    })  // employeeAssignments.map
    // debugger
    const customerElement = Customer(customer, employeeList)
    
    return customerElement
  }).join("") // customerEmployeesAssignment

  contentTarget.innerHTML = `
    <h2>Customers</h2>
    <div class="customer__roster">
      ${ customerEmployeesAssignment }
    </div>
  `
} // _render


export const customerList = () => {
 getCustomers()
  .then(getEmployees)
  .then(getEmployeeCustomers)
  .then(() => {
   const employees = useEmployees()
   const customers = useCustomers()
   const assignments = useEmployeeCustomers()
  
   _render(customers, employees, assignments)
  })
}
