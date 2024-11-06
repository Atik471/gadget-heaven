import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
    const [details, setDetails] = useState()
    const id = useParams()
    
    useEffect(() => {
        fetch(`/productId/product-${id.id[1]}.json`)
        .then(response => response.json())
        .then(data => setDetails(data))
            
    }, [id]);

    if (!details) {
        return <p>Loading...</p>;
    }

    console.log(details.product_id)


    return (
        <div className="flex">
            <div><img src={`${details.product_image}`} alt="img" /></div>
            <div>
                <h1>{details.product_title}</h1>
                <p>{details.price}</p>
                <p>{details.availability == true ? "In Stock" : "Out of Stock"}</p>
                <p>{details.description}</p>
                <ul>
                    {details.specifications.map((element, index) => (
                        <li key={index}>{element}</li>  
                    ))}
                </ul>
                
            </div>
        </div>
    );
};

export default ProductDetails;