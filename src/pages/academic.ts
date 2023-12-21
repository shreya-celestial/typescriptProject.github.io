import { users } from "../data";
import { academicTab, usersTable } from "../elements";
import { getId } from "../idState";
import { hideButton, resetTabStyles, setTabStyle } from "../utils"

export const academicPage = () => {
    resetTabStyles();
    const id = getId();
    if(id)
    {
        setTabStyle(academicTab)
        hideButton()
        usersTable.innerHTML = `
            <tr>
                <th>College Name</th>
                <th>Degree</th>
                <th>Pass Out year</th>
                <th>Address</th>
            </tr>
        `;
        const user = users.find(user => user.id === id)!
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.academic.collegeName}</td>
            <td>${user.academic.degree}</td>
            <td>${user.academic.passoutyear}</td>
            <td>${user.academic.addressCollege}</td>
        `;
        usersTable.appendChild(newRow)
    }
}