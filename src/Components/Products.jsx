import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState()
    const location = useLocation()

    useEffect(() => {
        axios.get('/productDetails.json')
        .then((response) => setProducts(response.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, [])

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                products?.map((p) => (
                    location.pathname === "/" ? 
                        p.products?.map((pr) => (
                            <Product key={pr.product_id} pr={pr}/>
                        ))
                        :
                        `/:${p.category_name}` === location.pathname &&
                        p.products?.map((pr) => (
                            <Product key={pr.product_id} pr={pr}/>
                        ))
                    )
                )
            }
        </div>
    );
};

export default Products;