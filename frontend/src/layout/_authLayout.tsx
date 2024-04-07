import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) =>
{
    return (
        <div className=" h-[70vh] flex justify-center items-center">
            {children}
        </div>
    )
}

export default AuthLayout