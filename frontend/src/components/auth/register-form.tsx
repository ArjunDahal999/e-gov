import { registerFormSchema } from "@/schema/auth/register-schema"
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
import { registerAccount } from '@/services/auth-services'
import { useState } from "react"
import { FormSuccessMessage } from "./form-success-message"
import { FormErrorMessage } from "./form-error-message"

const RegisterForm = () =>
{
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })
    const onSubmit = async (data: z.infer<typeof registerFormSchema>) =>
    {
        console.log(data)
        registerAccount(data).then((data) =>
        {
            if (data.success)
            {
                form.reset()
                setSuccessMessage(data.message)
                setErrorMessage('')
            } else
            {
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
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {successMessage && <FormSuccessMessage message={successMessage} />}
                {errorMessage && <FormErrorMessage message={errorMessage} />}

                <Button disabled={isLoading} variant={"outline"} className=" w-full" type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default RegisterForm