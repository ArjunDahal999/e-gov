import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import
{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { FormSuccessMessage } from "./form-success-message"
import { FormErrorMessage } from "./form-error-message"
import { resetPassword } from "@/services/auth-services"
import { redirect, useLocation } from "react-router-dom"
import { resetPasswordFormSchema } from "@/schema/auth/reset-password-schema"
import { toast } from "sonner"


const ResetPasswordForm = () =>
{
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
        resolver: zodResolver(resetPasswordFormSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: ""
        },
    })


    function onSubmit(values: z.infer<typeof resetPasswordFormSchema>)
    {
        setIsLoading(true)
        const data = {
            ...values,
            email,
            token
        }
        console.log(data)
        resetPassword(data).then((data) =>
        {
            if (data.success)
            {
                toast.success("Password Reset Successfully")
                setSuccessMessage(data.message);
                redirect('/login')

            } else
            {
                setErrorMessage(data.message);
            }
        })
        setIsLoading(false)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormSuccessMessage message={successMessage} />
                <FormErrorMessage message={errorMessage} />
                <Button disabled={isLoading} variant={"outline"} className=" w-full" type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default ResetPasswordForm