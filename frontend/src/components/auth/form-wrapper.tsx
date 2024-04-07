import
{
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

interface FormWrapperPropsType
{
    children: React.ReactNode,
    headerLable: string,
    backButtonLabel: string,
    backButtonHref: string,
}


const FormWrapper = ({ children, headerLable, backButtonHref, backButtonLabel }: FormWrapperPropsType) =>
{
    return (
        <Card className=" w-[400px] max-sm:m-2  border-cyan-300/60">
            <CardHeader>
                <CardTitle className=" text-center">{headerLable}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Link className=" text-center  w-full" to={backButtonHref}>
                    <Button variant={"link"}> {backButtonLabel}</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default FormWrapper