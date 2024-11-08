import Products from './Products';
import Categories from './Categories'

const Home = () => {
    return (
        <>
            <div className='mb-[3rem] md:mb-[12rem] mt-[1rem] md:mt-[6rem] w-[92%] md:w-[80%] m-auto text-center'>
                <h1 className='mb-[2.5rem] font-bold text-2xl md:text-3xl'>Explore Cutting-Edge Gadgets</h1>
                <div className="flex-grow grid md:grid-cols-4 grid-cols-1 gap-6">
                    <div className='col-span-1'><Categories></Categories></div>
                    <div className='md:col-span-3'><Products></Products></div>
                </div>
            </div>
        </>
    );
};

export default Home;