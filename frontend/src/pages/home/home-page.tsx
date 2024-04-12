
import CarouselC from "@/components/home/carousel"
import Content from "@/components/home/content"


const HomePage = () =>
{

    return (
        <>
            <main className=" min-h-screen">
                <div className=" flex justify-center w-full ">
                    <CarouselC />
                </div>
                <section className=" mt-4">
                    <Content />
                </section>
            </main>
        </>
    )
}

export default HomePage