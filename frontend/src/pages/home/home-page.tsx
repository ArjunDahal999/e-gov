
import CarouselC from "@/components/home/carousel"

const HomePage = () =>
{

    return (
        <>
            <main className=" min-h-screen">
                <div className=" flex justify-center w-full ">
                    <CarouselC />
                </div>
                <section className=" mt-4">
                    <h1 className=" text-center text-4xl font-bold">News And Event</h1>
                </section>
            </main>
        </>
    )
}

export default HomePage