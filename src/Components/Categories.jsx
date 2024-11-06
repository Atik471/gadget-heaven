import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css"

const Categories = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get('/categories.json')
            .then((response) => setCategories(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex flex-col p-6 gap-6 rounded-xl bg-white">
            <NavLink to={"/"} className={"category"}>All Product</NavLink>
            {
                categories?.map((cat) => (
                    <NavLink key={cat.category_id} to={`/:${cat.category_name}`} className={"category"}>{cat.category_name}</NavLink>
                ))
            }
        </div>
    );
};

export default Categories;