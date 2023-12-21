import { users } from "../data";
import { academicTab, academicTable } from "../elements";
import { getId } from "../idState";
import { resetTabStyles, setTabStyle, showTable } from "../utils"

export const academicPage = () => {
    resetTabStyles();
    const id = getId();
    if(id)
    {
        setTabStyle(academicTab)
        showTable(academicTable)
        academicTable.innerHTML = `
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
        academicTable.appendChild(newRow)
    }
}