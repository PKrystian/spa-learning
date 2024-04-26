import {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <div>
            <h1>List of products</h1>
            <ul>
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        title={product.title}
                        brand={product.brand}
                    />
                )}
            </ul>
        </div>
    );
}

export default ProductList;