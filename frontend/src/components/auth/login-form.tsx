import { loginFormSchema } from "@/schema/auth/login-schema"
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
import { loginToAccount } from "@/services/auth-services"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/store"


const LoginForm = () =>
{
    const authStore = useAuthStore()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    function onSubmit(values: z.infer<typeof loginFormSchema>)
    {
        setIsLoading(true)
        loginToAccount(values).then((data) =>
        {
            if (data.success)
            {
                form.reset()
                setSuccessMessage(data.message)
                console.log(data)
                authStore.actions.setUserData(data.user)
                authStore.actions.setAccessToken(data.token)
                navigate('/')
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
        < Form {...form}>
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
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormItem>
                    <Link className=" text-sm  hover:underline" to={'/forgot-password'}>Forgot Password</Link>
                </FormItem>
                <FormSuccessMessage message={successMessage} />
                <FormErrorMessage message={errorMessage} />
                <Button disabled={isLoading} variant={"outline"} className=" w-full" type="submit">Submit</Button>
            </form>
        </Form >
    )
}

export default LoginForm