import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import { TbMoodEmpty } from "react-icons/tb";

const Products = () => {
    const [products, setProducts] = useState()
    const location = useLocation()

    useEffect(() => {
        axios.get('/productDetails.json')
        .then((response) => setProducts(response.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, [])

    let count = 0

    return (
        <div className="grid grid-cols-3 gap-4 border-2 border-primary/10 rounded-xl p-4">
            {
                products?.map((p) => (
                    location.pathname === "/" ? 
                        p.products?.map((pr) => (
                            9 > count++ && <Product key={pr.product_id} pr={pr}/>
                            
                        ))
                        :
                        `/:${p.category_name}` === location.pathname &&
                        p.products?.map((pr) => (
                            9 > count++ && <Product key={pr.product_id} pr={pr}/>
                        ))
                    )
                ) 
            }
            {count == 0 && 
                <div className="text-center mt-[5rem] mb-[8rem] col-span-3">
                    <TbMoodEmpty className="mx-auto text-[5rem] font-extrabold text-red-600 mb-[2rem]"></TbMoodEmpty>
                    <h1 className="text-[3rem] font-extrabold text-red-500">No product in this category</h1>
                </div>
            }
        </div>
    );
};

export default Products;