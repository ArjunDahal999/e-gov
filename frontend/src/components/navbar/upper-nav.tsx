

import { Logo } from '@/assets/images'
import { Link } from 'react-router-dom'

const UpperNav = () =>
{
    return (
        <>
            <div className=" flex justify-center pb-6 items-center space-x-4">
                <Link to={'/'} >  <img src={Logo} className=' size-40 object-contain' /></Link>
                <div className="">
                    <h1 className=' font-bold text-xl'>Government of Nepal</h1>
                    <h1 className=' text-blue-600 font-bold'> Ministry of Physical Infrastructure and Transport</h1>
                    <h1> Department of Transport Management</h1>
                    <h1 className=' text-red-500'>Online Driving License System</h1>
                </div>
            </div>
        </>
    )
}

export default UpperNav