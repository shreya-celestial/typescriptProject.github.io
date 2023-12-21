import { user, users } from "../data"
import { usersTable } from "../elements"
import { hideButton } from "../utils";

export const usersEmploymentPage = () => {
    hideButton()
    usersTable.innerHTML = `
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
        usersTable.appendChild(newRow)
    })
}