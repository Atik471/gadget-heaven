import Products from './Products';
import Categories from './Categories'

const Home = () => {
    return (
        <>
            <div className='my-[5rem] w-[80%] m-auto text-center'>
                <h1 className='mb-[2.5rem] font-bold text-3xl'>Explore Cutting-Edge Gadgets</h1>
                <div className="flex-grow grid grid-cols-4 gap-6">
                    <div className='col-span-1'><Categories></Categories></div>
                    <div className='col-span-3'><Products></Products></div>
                </div>
            </div>
        </>
    );
};

export default Home;