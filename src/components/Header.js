import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material';
const Header = () => {
  return (
    <div className='text-3xl flex justify-between text-red-500 p-3 font-bold border-b-2 border-gray-300'>

    <span>Filmy
   <span className='text-white'>Verse</span></span>
   <h1 className='text-lg flex items-center cursor-pointer'>
    <Button><AddIcon className='mr-1' color='secondary'/><span className='text-white'>Add New</span></Button>
    </h1>
   </div>
  )
}

export default Header