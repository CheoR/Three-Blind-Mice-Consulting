export const Employee = ( employee ) => {
 return `
  <li class="employee">
   <h3>${ employee.firstName } ${ employee.lastName }</h3>
   <div class="employee__computer">
    <p>Computer Assigned: ${ employee.computer.model }</p>
    <p>Year: ${ employee.computer.year }</p>
   </div>
  </li>
 `
}
