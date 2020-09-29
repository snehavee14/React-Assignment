import React, { Component } from 'react'
import styles from '../myStyle.module.css';

export class AssignmentThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: null,
            employees: [],
            fName: "",
            job: ""
        };
        this.add = this.add.bind(this);
       

    }
    add() {
        const { fName, job, employees } = this.state;

        let employeObj = {
            fName,
            job
        };
        employees.push(employeObj);
        this.setState({
            employees,
            fName: "",
            job: ""
        });
       
    }

   
    delete(index) {
        const { employees } = this.state;
        employees.splice(index, 1);
        this.setState({ employees, currentIndex: null });
    }

    render() {
        const { employees } = this.state;
        return (


            <div className={styles.AlignToLeft}>
                <div className={styles.tablepadding}>
                    <span>Add an employee with a name and job to the table</span><br />
                    <table border="1">
                        <thead>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Remove</th>
                        </thead>
                        <tbody>
                            {employees.map((row, index) => {
                                return (
                                    <tr>
                                        <td>{row.fName}</td>
                                        <td>{row.job}</td>
                                        <td><input type="button" onClick={this.delete.bind(this, index)} value="Delete"/></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table><br />
                    <div>
                        <span><b>Add New Employee</b></span><br />
                        <label className={styles.paddingforlabel}>Name</label><br />
                        <input type="text" onChange={e => {
                            this.setState({ fName: e.target.value });
                        }} value={this.state.fName}></input><br />
                        <label className={styles.paddingforlabel}>Job</label><br />
                        <input type="text" onChange={e => {
                            this.setState({ job: e.target.value });
                        }} value={this.state.job}></input><br />
                        <input type="button" value="Submit" onClick={this.add}></input>

                    </div>

                </div>
            </div>
        )
    }
}

export default AssignmentThree


