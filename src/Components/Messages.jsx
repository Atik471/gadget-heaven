import { TbMoodEmpty } from "react-icons/tb";
import Message from "./Message";



const Messages = () => {
    const retreivedData = JSON.parse(localStorage.getItem("formData"));

    return (
        <div className="w-[92%] md:w-[80%] mx-auto mb-[4rem] p-4 md:p-8 rounded-2xl bg-gray-200">
            <h1 className="text-3xl font-bold mb-[2rem] md:mb-[3rem]">Messages</h1>
            {
                retreivedData != null ? retreivedData.map((item, index) => (
                    <Message key={index} msg={item}></Message>
                )) :
                <div className="text-center mt-[5rem] mb-[8rem]">
                    <TbMoodEmpty className="mx-auto text-[5rem] font-extrabold text-red-600 mb-[2rem]"></TbMoodEmpty>
                    <h1 className="text-[2rem] font-bold text-red-600">No messages yet</h1>
                </div>
            }
        </div>
    );
};

export default Messages;