
import FormWrapper from '@/components/auth/form-wrapper'
import RegisterForm from '@/components/auth/register-form'
import AuthLayout from '@/layout/_authLayout'


const RegisterPage = () =>
{
    return (
        <AuthLayout>
            <FormWrapper
                backButtonHref='/login'
                backButtonLabel='Go Back To Register'
                headerLable='Register'
            >
                <RegisterForm />
            </FormWrapper>
        </AuthLayout>
    )
}

export default RegisterPage