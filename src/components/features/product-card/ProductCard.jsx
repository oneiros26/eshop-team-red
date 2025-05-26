import "./productCard.css"

function ProductCard() {

    return(
        <div className="product-card">
            <img className="image" src="https://www.fixturescloseup.com/wp-content/uploads/2023/07/Market-32-Childrens-Rocket-Ship-Shopping-Cart-Main1.jpg" alt="obrázek produktu" />
            <div className="upper-content">
                <h3 className="title">Fast car</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bottom-content">
                <p className="price"> 20 000¥ </p>
                <button className="button">+</button>
            </div>
        </div>
    )
}

export default ProductCard
