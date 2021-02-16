export const Employee = ( employee ) => {
 return `
  <li class="employee">
   <p>Employee: ${ employee.firstName } ${ employee.lastName }</p>
   <p>Computer Assigned: ${ employee.computerId }</p>
  </li>
 `
}
