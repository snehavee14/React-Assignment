import React, { useState, useEffect } from 'react'
import styles from '../myStyle.module.css'
import Switch from './Switch';

function AssignmentFive() {
    const [value, setValue] = useState(false);
    const [time, setTime] = useState(new Date())


    const displaytime = () => { let dt = new Date(); setTime(dt) }
    useEffect(() => {
        setInterval(displaytime, 1000)
    }, [time])

    

    return (
        <div>
            <div>
                <table>
                    <thead><th>Digital Clock</th></thead>
                    <tbody><tr><Switch
                        isOn={value}
                        onColor="#EF476F"
                        handleToggle={() => setValue(!value)}
                    /></tr></tbody>
                </table>

                <span className={styles.dot}> date is {time.toLocaleDateString()}
         time is {time.toLocaleTimeString()}</span>
            </div>
            


        </div>
    )
}

export default AssignmentFive