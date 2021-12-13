import SingleArrival from "../TopNewArrival/SingleArrival"


const products = [
    {
        id: 1,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/2jHpJws/product1.jpg",
        
    },
    {
        id: 2,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/mCdRt0s/product2.jpg"
    },
    {
        id: 3,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/M8LrQyQ/product3.jpg"
    },
    {
        id: 4,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/9rn0tSy/product4.jpg"
    },
    {
        id: 5,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/tsZybpt/product5.jpg",
        
    },
    {
        id: 6,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/2nfH6ZX/product6.jpg"
    },
    {
        id: 7,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/xg8fwz4/product7.jpg"
    },
    {
        id: 8,
        title: "Guyer chair",
        price: 45.00,
        rating: 150,
        image: "https://i.ibb.co/N2C78ws/product11.jpg"
    }
]

export const RecomendedProduct = () => {
    return (
        <div className="container pb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
                {
                    products.map((product) => <SingleArrival key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}
