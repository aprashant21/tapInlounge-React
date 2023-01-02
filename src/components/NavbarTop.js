import React from 'react'

const NavbarTop = () => {
  return (
    <div className='bg-[#F89808] w-100 h-6'>
        <div className='flex flex-row'>
            <div className='basis-1/2 text-white'>
                <img alt="time svg" src='/images/time.svg' className='h-4 m-1 text-white fill-current'/>
            </div>
            <div className='basis-1/2 text-white'>
                <img alt="contact svg" src='images/contact.svg' className='h-4 m-1 text-white fill-current'/>
            </div>
            <div className='text-right basis-1/2 mr-10 text-white'>
                Register
            </div>
        </div>
        
    </div>
  )
}

export default NavbarTop