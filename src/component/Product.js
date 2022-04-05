import React from 'react'
import phone3 from "../pictures/phone3.jpg"
import phone2 from "../pictures/phone2.jpg"
import phone5 from "../pictures/phone5.jpg"


function Product() {
  return (
    <div>
    <div className='firstrow'>

    <div className='card'>
    <h2>Infinix</h2>
    <img src={phone3} alt="" />
    <p>GHc15000</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Tecno</h2>
    <img src={phone2} alt="" />
    <p>GHc5000</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Tablet</h2>
    <img src={phone5} alt="" />
    <p>GHc17000</p>
    <button>Buy Me</button>
    </div>

    </div>



    <div className='headphones'> </div>



    <div className='headphones'> </div>
    
    
    </div>
  )
}

export default Product