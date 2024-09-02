import {useState} from 'react'
function GetValue(){
    const[number,setNumber] = useState('');

    

    console.log(number)
    const handleValue = ()=>{
        const answer = document.getElementById('textInput').value;
        setNumber(answer);
    }


    return(
        <>
            <input type="text" id='textInput'></input>
            <button onClick={handleValue} >click</button>
        </>
    )
}

export default GetValue