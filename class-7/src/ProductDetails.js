import {useParams, Link} from "react-router-dom";

function ProductDetails({products}) {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id));

    if (! product) {
        return null;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}<br/>
                Brand: {product.brand}<br/>
                Description: {product.description}<br/>
                Price: {product.price} $<br/></p>
            <img src={product.thumbnail} alt={product.title} />
            <br/>
            <Link to="/">Back to list</Link>
        </div>
    );
}

export default ProductDetails;
