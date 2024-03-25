
import { FormErrorMessage } from '@/components/auth/form-error-message'
import { FormSuccessMessage } from '@/components/auth/form-success-message'
import FormWrapper from '@/components/auth/form-wrapper'
import AuthLayout from '@/layout/_authLayout'
import { activateAccount } from '@/services/auth-services'
import { useEffect, useState } from 'react'
import { useLocation, redirect } from 'react-router-dom'
import { toast } from "sonner"
import { ScaleLoader } from "react-spinners";

const ActivatePage = () =>
{

    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    useEffect(() =>
    {

        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        const email = searchParams.get('email');
        const data = { email, token }
        activateAccount(data).then((data: any) =>
        {
            if (data.success)
            {
                toast.success("Account Activated")
                setSuccessMessage(data.message);
                redirect('/')
            } else
            {
                setErrorMessage(data.message);
            }
        })
        console.log(token)
    }, [])
    return (
        <AuthLayout>
            <FormWrapper
                backButtonHref='/login'
                backButtonLabel='Go Back To Login'
                headerLable='Activate Account'
            >
                <div className=" flex justify-center items-center w-full">
                    {!successMessage && !errorMessage && <ScaleLoader color="#36d7b7" />}
                    {successMessage && <FormSuccessMessage message={successMessage} />}
                    {errorMessage && <FormErrorMessage message={errorMessage} />}
                </div>
            </FormWrapper>
        </AuthLayout>
    )
}

export default ActivatePage