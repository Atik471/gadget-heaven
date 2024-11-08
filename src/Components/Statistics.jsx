import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [productList, setProductList] = useState()

    let productStats = []

    useEffect(() => {
        fetch('/productDetails.json')
        .then(response => response.json())
        .then(data => setProductList(data))
    }, [])

    if (!productList) {
        return <p>Loading...</p>;
    }

    productStats = productList.map(i => (
        i.products.map(j => (
            {title: j.product_title, price: j.price, rating: j.rating}
        ))
    ))

    productStats = productStats.flat()

    return(
        <div className='flex flex-col justify-center items-center my-[3rem] md:my-[5rem]'>
            <h2 className='font-semibold text-xl mb-6'>Product Price Line Chart</h2>
            <ResponsiveContainer width="80%" height={400}>
                <LineChart data={productStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title"
                    angle={-45}
                    textAnchor="end" 
                    interval={0} 
                    height={200} />
                    <YAxis />
                    <Tooltip 
                    content={({ payload }) => 
                        payload && payload.length ? (
                            <div className="bg-white p-3 border-2 border-gray-200">
                                <p>Title: {payload[0].payload.title}</p>
                                <p className='text-[#8884d8]'>Price: ${payload[0].payload.price}</p>
                                <p className='text-[#82ca9d]'>Rating: {payload[0].payload.rating}</p>
                            </div>
                        ) : null
                    }/>
                    <Legend 
                    layout="horizontal"
                    align="right"
                    verticalAlign="top"
                    iconSize={10}/>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

export default Statistics;