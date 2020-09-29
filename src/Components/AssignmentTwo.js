import React from 'react'
import styles from '../myStyle.module.css'; 


function AssignmentTwo() {
    const employees = [
        { id:"1", Name: "Charlie", Job: "Janitor" },
        { id:"2", Name: "Mac", Job: "Bouncer" },
        { id:"3", Name: "Dee", Job: "Aspiring actress" },
        { id:"4", Name: "Dennis", Job: "Bartender" }]


    return (
        <div className={styles.tablepadding}>
            <table border="1" className={styles.borderfortable}>
                <th>Name</th>
                <th>Job</th>
                <tbody>
                    {employees.map((emp) => <tr><td key={emp.id}>{emp.Name}</td><td>{emp.Job}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default AssignmentTwo
