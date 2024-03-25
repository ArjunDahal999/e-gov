
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
import { forgotPassword } from "@/services/auth-services"
import { forgotPasswordFormSchema } from "@/schema/auth/forgot-password-schema"


const ForgotPasswordForm = () =>
{
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
        resolver: zodResolver(forgotPasswordFormSchema),
        defaultValues: {
            email: "",
        },
    })
    function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>)
    {
        setIsLoading(true)
        forgotPassword(values).then((data) =>
        {
            if (data.success)
            {
                form.reset()
                setSuccessMessage(data.message)
                setErrorMessage('')
            } else
            {
                console.log(data)
                setErrorMessage(data.message)
                setSuccessMessage('')
            }
        }).finally
        {
            setIsLoading(false)
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
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

export default ForgotPasswordForm