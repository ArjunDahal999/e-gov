
import FormWrapper from '@/components/auth/form-wrapper'
import ResetPasswordForm from '@/components/auth/reset-password-form'
import AuthLayout from '@/layout/_authLayout'


const ResetPasswordPage = () =>
{
    return (
        <AuthLayout>
            <FormWrapper
                backButtonHref='/login'
                backButtonLabel='Go Back To login'
                headerLable='Reset Password'
            >
                <ResetPasswordForm />
            </FormWrapper>
        </AuthLayout>
    )
}

export default ResetPasswordPage