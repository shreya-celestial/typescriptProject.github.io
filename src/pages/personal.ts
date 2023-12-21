import { users } from "../data"
import { personalTab, usersTable } from "../elements"
import { getId } from "../idState"
import { hideButton, resetTabStyles, setTabStyle } from "../utils"

export const personalPage = () => {
    resetTabStyles()
    const id = getId()
    if(id){
        setTabStyle(personalTab)
        hideButton()
        usersTable.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Mobile No</th>
            </tr>
        `;
        const user = users.find(user => user.id === id)!
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.name}</td>
            <td>${user.personal.address}</td>
            <td>${user.personal.mobile}</td>
        `;
        usersTable.appendChild(newRow)
    }
}

