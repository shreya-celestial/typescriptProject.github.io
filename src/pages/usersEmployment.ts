import { user, users } from "../data"
import { usersEmploymentTable } from "../elements"
import { showTable } from "../utils"

export const usersEmploymentPage = () => {
    showTable(usersEmploymentTable)
    usersEmploymentTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Company Name</th>
        </tr>
    `;
    users.map((user: user):void=>{
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.name}</td>
            <td>${user.employment.currentCompany}</td>
        `;
        usersEmploymentTable.appendChild(newRow)
    })
}