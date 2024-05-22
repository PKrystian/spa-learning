import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import axios from "axios";

function App() {
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
        <div className="App">
            <div className="App-header">
                <Router>
                    <Routes>
                        <Route path="/" element={<ProductList products={products} />} />
                        <Route path="details/:id" element={<ProductDetails products={products} />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
