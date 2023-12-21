import { users } from "../data"
import { personalTab, personalTable } from "../elements"
import { getId } from "../idState"
import { resetTabStyles, setTabStyle, showTable } from "../utils"

export const personalPage = () => {
    resetTabStyles()
    const id = getId()
    if(id){
        setTabStyle(personalTab)
        showTable(personalTable)
        personalTable.innerHTML = `
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
        personalTable.appendChild(newRow)
    }
}

