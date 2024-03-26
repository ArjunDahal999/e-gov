
import FormWrapper from '@/components/auth/form-wrapper'
import LoginForm from '@/components/auth/login-form'
import AuthLayout from '@/layout/_authLayout'
import { useAuthStore } from '@/store/store'
import { useNavigate } from 'react-router-dom'


const LoginPage = () =>
{
    const navigate = useNavigate()
    const authStore = useAuthStore().userData
    if (!authStore)
    {
        navigate('/login')
    }
    return (
        <>
            <AuthLayout>
                <FormWrapper
                    backButtonHref='/register'
                    backButtonLabel='Go Back To Register'
                    headerLable='Login'
                >
                    <LoginForm />
                </FormWrapper>
            </AuthLayout>
        </>
    )
}

export default LoginPage