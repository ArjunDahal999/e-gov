import { Button } from '../ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Link } from 'react-router-dom'

const Content = () =>
{
    return (
        <div className="max-w-[76vw] mx-auto my-8 p-4 bg-white shadow-lg">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <img
                        alt="Profile"
                        className="w-full h-auto"
                        height="200"
                        src="https://ca.nepalembassy.gov.np/wp-content/uploads/2024/03/Photograph-Bharat-Raj-Paudyal-NEPAL-2-scaled-1-300x300.jpg"
                        style={{
                            aspectRatio: "150/200",
                            objectFit: "cover",
                        }}
                        width="150"
                    />
                    <h2 className="mt-2 text-lg font-semibold">H.E. Banshidhar Mishra</h2>
                    <p className="text-sm">Ambassador Extraordinary and Plenipotentiary</p>
                    <Button className="mt-4" variant="outline">
                        Former Ambassadors
                    </Button>
                    <Button className="mt-2" variant="outline">
                        About Nepal
                    </Button>
                </div>
                <div className="col-span-2">
                    <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
                        <h1 className="text-xl font-bold">LATEST UPDATE</h1>
                        <div className="flex space-x-2">
                            <Button variant="ghost">NOTICE</Button>
                            <Button variant="ghost">PRESS RELEASE</Button>
                            <Button variant="ghost">SPEECHES</Button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Message of H.E. Ambassador on the occasion of the National Day</h3>
                        <p className="text-sm mt-1">Posted on 28 February 2023</p>
                        <p className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        </p>
                        <Button className="mt-2" variant="outline">
                            Read More
                        </Button>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">
                            Press Release on MoU Signed on Agriculture Cooperation by Embassy of Nepal, Manama
                        </h3>
                        <p className="text-sm mt-1">Posted on 15 February 2023</p>
                        <p className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        </p>
                        <Button className="mt-2" variant="outline">
                            Read More
                        </Button>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">
                            Press Release on National Day and Constitution Day Celebration by EON, Manama
                        </h3>
                        <p className="text-sm mt-1">Posted on 01 February 2023</p>
                        <p className="text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                        </p>
                        <Button className="mt-2" variant="outline">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="col-span-2">
                    <h2 className="text-xl font-bold">About Nepal</h2>
                    <img
                        alt="Nepal"
                        className="w-full h-auto mt-2"
                        height="150"
                        src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg"
                        style={{
                            aspectRatio: "300/150",
                            objectFit: "cover",
                        }}
                        width="300"
                    />
                    <p className="text-sm mt-2">
                        Nepal is located in South Asia and shares territorial borders with India and China with an area of 147,181
                        square kilometers and a population of approximately 30 million. Kathmandu is the nation's capital and the
                        country's largest metropolis.
                    </p>
                    <Button className="mt-2" variant="outline">
                        Read More
                    </Button>
                </div>
                <div className="col-span-1 p-10">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Important Links</CardTitle>
                        </CardHeader>
                        <div>
                            <ul className=" ml-10  p-4 space-y-2">
                                <li>
                                    <Link className="text-blue-600" to="#">
                                        Nepalese Missions Overseas
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-blue-600" to="#">
                                        Ministry of External Affairs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-blue-600" to="#">
                                        Nepal Health Ministry
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-blue-600" to="#">
                                        Nepal Immigration Information
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Content