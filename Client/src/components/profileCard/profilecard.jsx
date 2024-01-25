import React from 'react'
import ProfileImage from '../../assets/media.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
function profilecard() {
  return (
    <div className='flex w-[300px]  bg-white mt-6 rounded-lg shadow-xl'>
   <div className='border rounded-lg width-[20px] m-1 ml-1 '>
   <img src={ProfileImage}  className='' />

    </div>

    <div className='mt-1 w-full ml-10 space-y-1'>
        <p className='font-semibold '>John Deo</p>
        <p className='m font-thin ml-5'>ceo</p>

        <div className='flex space-x-3 mt-4'>
            <div>
                <img src={facebook} alt="" />
            </div>
            <div>
                <img src={instagram} alt="" />
            </div>
            <div>
                <img src={twitter} alt="" />
            </div>
        </div>

        </div>
      
 


    </div>
  )
}

export default profilecard