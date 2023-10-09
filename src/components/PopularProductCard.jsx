import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name , price, rating}) => {
  return (
   <div className='flex flex-1 flex-col w-full max-sm:w-full'>
    <img src={imgURL} alt={name}
    className=' w-72 h-72' />
    <div className=' mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="star"
        width={24}
        height={24} />
        <p className='text-xl font-palanquin text-slate-gray'>{rating}</p>
    </div>
    <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
    <p className='text-xl font-montserrat text-coral-red leading-normal text '>{price}</p>
   </div>
  )
}

export default PopularProductCard
