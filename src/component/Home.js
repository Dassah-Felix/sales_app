import React from 'react'
import phone from "../pictures/pics/phone4.jpg"
import head from "../pictures/pics/head4.jpg"
import drive from "../pictures/pics/drive4.jpg"
import cover from "../pictures/pics/cover4.jpg"

import { Link } from 'react-router-dom'

function Home() {
  return (
<div className='fixed'>

    <div className='firstrow'>

    <div className='card'>
    <h2>Smartphones </h2>
    <img src={phone} alt="" />
    <p>welcome to house of smart phones. Buy at cool price</p>
    <button><Link to = "/product">View More </Link> </button>
    </div>

    <div className='card'>
    <h2>head</h2>
    <img src={head} alt="" />
    <p>welcome to house of smart phones. Buy at cool price</p>
    <button>View More</button>
    </div>
    </div>

    <div className='second-row'>

    <div className='card'>
    <h2>cover</h2>
    <img src={cover} alt="" />
    <p>welcome to house of smart phones. Buy at cool price</p>
    <button>View More</button>
    </div>

    <div className='card'>
    <h2>drive</h2>
    <img src={drive} alt="" />
    <p>welcome to house of smart phones. Buy at cool price</p>
    <button>View More</button>
    </div>
    </div>
 
</div>
  )
}

export default Home