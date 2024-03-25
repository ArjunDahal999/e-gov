
import FormWrapper from '@/components/auth/form-wrapper'
import LoginForm from '@/components/auth/login-form'
import AuthLayout from '@/layout/_authLayout'


const LoginPage = () =>
{
    return (
        <AuthLayout>
            <FormWrapper
                backButtonHref='/register'
                backButtonLabel='Go Back To Register'
                headerLable='Login'
            >
                <LoginForm />
            </FormWrapper>
        </AuthLayout>
    )
}

export default LoginPage