
import ForgotPasswordForm from '@/components/auth/forgot-password-form'
import FormWrapper from '@/components/auth/form-wrapper'
import AuthLayout from '@/layout/_authLayout'


const ForgotPassowordPage = () =>
{
    return (
        <AuthLayout>
            <FormWrapper
                headerLable='Forgot Password'
                backButtonHref='/login'
                backButtonLabel='Go Back To Login'
            >
                <ForgotPasswordForm />
            </FormWrapper>
        </AuthLayout>
    )
}

export default ForgotPassowordPage