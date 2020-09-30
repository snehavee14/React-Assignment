import React, { Component } from 'react'
import styles from '../myStyle.module.css'

export class AssignmentFour extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: ""
        }
    }

    DisplayNumber = (e) => {

        if (e === "=") {
            this.setState({ result: (eval(this.state.result) || "") + "" })
        }
        else if (e === "Clear") {
            this.setState({ result: "" })
        }
        else {
            this.setState({
                result: this.state.result + e
            })
        }
    }


    render() {
        return (
            <div>


                <button className={styles.resultbtnalignment}>{this.state.result}</button><br />
                <button onClick={(e) => { this.DisplayNumber(e.target.name) }} className={styles.clearbtnalignment} name="Clear">Clear</button><button onClick={(e) => { this.DisplayNumber(e.target.name) }} className={styles.numberalignment} name="*">X</button><button className={styles.numberalignment} onClick={(e) => { this.DisplayNumber(e.target.name) }} name="/">/</button><br />
                <button className={styles.numberalignment} name="7" onClick={(e) => { this.DisplayNumber(e.target.name) }}>7</button><button onClick={(e) => { this.DisplayNumber(e.target.name) }} className={styles.numberalignment} name="8">8</button><button onClick={(e) => { this.DisplayNumber(e.target.name) }} className={styles.numberalignment} name="9">9</button><button className={styles.numberalignment} onClick={(e) => { this.DisplayNumber(e.target.name) }} name="-">-</button><br />
                <button className={styles.numberalignment} name="4" onClick={(e) => { this.DisplayNumber(e.target.name) }}>4</button><button className={styles.numberalignment} name="5" onClick={(e) => { this.DisplayNumber(e.target.name) }}>5</button><button className={styles.numberalignment} name="6" onClick={(e) => { this.DisplayNumber(e.target.name) }}>6</button><button className={styles.numberalignment} name="+" onClick={(e) => { this.DisplayNumber(e.target.name) }}>+</button><br />
                <button className={styles.numberalignment} name="1" onClick={(e) => { this.DisplayNumber(e.target.name) }}>1</button><button className={styles.numberalignment} name="2" onClick={(e) => { this.DisplayNumber(e.target.name) }}>2</button><button className={styles.numberalignment} name="3" onClick={(e) => { this.DisplayNumber(e.target.name) }}>3</button><button className={styles.numberalignment} name="=" onClick={(e) => { this.DisplayNumber(e.target.name) }}>=</button>

            </div>
        )
    }
}

export default AssignmentFour
