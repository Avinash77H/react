import React from 'react'
import usLogo from '../assets/us.svg'
import frLogo from '../assets/fr.svg'
import vnLogo from '../assets/vn.svg'
import deLogo from '../assets/de.svg'

function Hover() {
  return (
    
        <div className='border-2 border-green-500 flex flex-col gap-2'>
            <span>
              <img className='w-4 inline mr-1' src={frLogo} alt="france-logo"/>
              &#8364; EUR | France
            </span>

            <span>
              <img className='w-4 inline mr-1' src={deLogo} alt="germany-logo"/>
              &#8364; EUR | Germany
            </span>

            <span>
              <img className='w-4 inline mr-1' src={usLogo} alt="Us-logo"/>
              &#36; USD | United States
            </span>

            <span>
              <img className='w-4 inline mr-1' src={vnLogo} alt="vn-logo"/>
              &#8363; VND | Vietnam
            </span>
        </div>
    
  )
}

export default Hover
