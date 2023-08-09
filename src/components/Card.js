import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import {ThreeDots} from "react-loader-spinner";
const Card = () => {
  const [data, setdata] = useState([]);
const [loading, setloading] = useState(true);
  useEffect(() =>{
    async function getData()
    {

    }
    getData();
  },[])
  
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {loading ? <div className='w-full flex justify-center items-center h-96'> <ThreeDots height ={40} color="white"/></div> :
data.map((e, i)=>{
  return(
    <div key = {i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer'>
<img className='h-72' src = {e.image} />
<h1>
  <span className='text-gray-500'>Name:</span>{e.title}
</h1>
<h1 className='flex items-center'>
  <span className='text-gray-500 mr-1'>Rating:</span>
  <ReactStars size = {20}  half = {true} value = {5} edit ={false}/>
</h1>
<h1>
  <span className='text-gray-500'>Year:</span> {e.year}
</h1>
      </div>
  )
})
}
    </div>
  )
}

export default Card