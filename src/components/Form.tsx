import React, { useRef } from 'react';

const Form = ({handleChange}: any) => {
    
    const inputRef = useRef<HTMLInputElement>(null);

    let styles = {
        wrapper: {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            padding: "25px 35px" 
        },
        innerWrapper: {
            display: 'flex',
            flexDirection: 'column'
        },
        title: {
            margin: '0px'
        }
    }
    
    return ( 
    <div style={styles.wrapper}>
        <div style={styles.innerWrapper as React.CSSProperties}>
            <h2 style={styles.title}>City</h2>

            <input 
            className='d-blockl'
            ref={inputRef}
            type="text" 
            placeholder='Enter your city'
            ></input>

            <button onClick={() => handleChange(inputRef.current !== null ? inputRef.current.value : "" )}> Search </button>
        </div>
    </div>
    )
};



export default Form;