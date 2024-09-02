import { useState } from 'react'
function Hotel() {

    const [number, setNumber] = useState(0)

    const Setter = () => {
        const value = document.getElementById('demo').value
        setNumber(value);
    }

    const [visibility, setVisibility] = useState(false)

    const Display = () => {
        setVisibility(true)
    }

    function CombinedFunction() {
        Setter();
        Display();
    }

    return (
        <div className='flex justify-center border-2 border-green-500'>
            <label>Enter Total Number:</label>
            <input type="text" id='demo' />
            <button onClick={CombinedFunction}>click</button>
            
            {
                visibility && (<div>
                    <div className='border-2 border-green-500'>
                      <h1>Chai recipe</h1>
                      <p>1. Boil {number} cups of water.</p>
                      <p>2. add {number} spoons of tea and {0.5 * number} spoon of spice.</p>
                      <p>3. add {0.5 * number} cups of milk to boil and sugar to taste.</p>
                    </div>
                    <div>
                      <h1>Coffee recipe</h1>
                      <p>1. Boil {number} cups of water.</p>
                      <p>2. add {number} spoons of tea and {2 * number} spoon of spice.</p>
                    </div>
                  </div>)
            }
               
            

               </div>
    )
}

// function Hotel() {
//     const [number, setNumber] = useState(0);

//     const handleInputChange = (event) => {
//     //   const value = event.target.value;
//     const value = document.getElementById('demo').value
//       setNumber(value);
//     };

//     const [isRecipesVisible, setIsRecipesVisible] = useState(false);

//     const handleButtonClick = () => {
//       setIsRecipesVisible(true);
//     };

//     return (
//       <>
//         <label>Enter Total Number:</label>
//         <input type="text" id="demo" onChange={handleInputChange} />
//         <button onClick={handleButtonClick}>Click</button>
//         {isRecipesVisible && (
//           <div>
//             <div>
//               <h1>Chai recipe</h1>
//               <p>1. Boil {number} cups of water.</p>
//               <p>2. add {number} spoons of tea and {0.5 * number} spoon of spice.</p>
//               <p>3. add {0.5 * number} cups of milk to boil and sugar to taste.</p>
//             </div>
//             <div>
//               <h1>Coffee recipe</h1>
//               <p>1. Boil {number} cups of water.</p>
//               <p>2. add {number} spoons of tea and {2 * number} spoon of spice.</p>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }

export default Hotel