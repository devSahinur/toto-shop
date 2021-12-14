export const ProductImage = ({product}) => {
    return (
        <div>
        <div>
          <img id="main-img" src={product.image[0].img} className="w-full" />
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div>
            <img
              src={product.image[0].img}
              className="single-img w-full cursor-pointer border border-primary"
            />
          </div>
          <div>
            <img
              src={product.image[1].img}
              className="single-img w-full cursor-pointer border"
            />
          </div>
          <div>
            <img
              src={product.image[2].img}
              className="single-img w-full cursor-pointer border"
            />
          </div>
          <div>
            <img
              src={product.image[3].img}
              className="single-img w-full cursor-pointer border"
            />
          </div>
          <div>
            <img
              src={product.image[4].img}
              className="single-img w-full cursor-pointer border"
            />
          </div>
        </div>
      </div>
    )
}
