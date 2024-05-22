import {useState} from "react";
import ProductItem from "./ProductItem";

function ProductList({products}) {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredProducts = products.filter(product => product.title.includes(filter));

    return (
        <div>
            <h1>List of products</h1>
            <label>
                Filter by product title:
                <input type="text" value={filter} onChange={handleFilterChange} />
            </label>
            <ul>
                {filteredProducts.map(product =>
                    <ProductItem
                        id={product.id}
                        title={product.title}
                        brand={product.brand}
                    />
                )}
            </ul>
        </div>
    );
}

export default ProductList;
