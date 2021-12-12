import { SingleCategories } from "./SingleCategories"

const category = [
    {
        id: 1,
        title: "Bedroom",
        image: "https://i.ibb.co/4WpN0dc/category-1.jpg"
    },
    {
        id: 2,
        title: "Sofa",
        image: "https://i.ibb.co/KjJQ2XR/category-5.jpg"
    },
    {
        id: 3,
        title: "Office",
        image: "https://i.ibb.co/VmJ9Kdc/category-3.jpg"
    },
    {
        id: 4,
        title: "Outdoor",
        image: "https://i.ibb.co/BBvtTrN/category-4.jpg"
    },
    {
        id: 5,
        title: "Mattress",
        image: "https://i.ibb.co/jrLWbvr/category-2.jpg"
    },
    {
        id: 6,
        title: "Dinings",
        image: "https://i.ibb.co/qs2Wgw7/category-6.jpg"
    },
]

export const Categories = () => {
    return (
        <div className="container pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
            {/* <!-- single category --> */}

            {
                category.map((data) => <SingleCategories key={data.id} data={data} />)
            }

        </div>
    </div>
    )
}
