import { useContext } from "react";
import { toast } from "react-toastify";
import { SubmitContext } from "./Contact";

const ContactForm = () => {
    const {submit, setSubmit} = useContext(SubmitContext)

    const handeSubmit = (e) => {
        e.preventDefault()
        let formData = []
        const retreivedData = JSON.parse(localStorage.getItem("formData"));
        const now = new Date();

        formData = retreivedData != null ? [...retreivedData, {
            email: e.target.email.value,
            message: e.target.message.value,
            time: now.toLocaleString()
        }] : 
        [{
            email: e.target.email.value,
            message: e.target.message.value,
            time: now.toLocaleString()
        }]

        localStorage.setItem("formData", JSON.stringify(formData))

        toast.success("Message Submited!", {
            position: "top-right",  
            autoClose: 2000,        
            closeOnClick: true,     
            pauseOnHover: true, 
            draggable: true,
        });

        setSubmit(submit+1)
        e.target.reset();
    }

    return (
        <div className="my-[5rem] flex flex-col justify-center w-[70%] mx-auto text-left">
            <h1 className="text-3xl font-bold mb-[3rem]">Leave a message</h1>
            <form action="" className="flex flex-col items-center w-[80%] gap-5" onSubmit={handeSubmit}>
                <div className="flex w-full justify-between">
                    <h2 className="text-lg font-semibold">Email: </h2>
                    <input type="email" name="email" id="" className="border-black border-2 w-[85%] p-2 text-lg" placeholder="youremail@email.com"/>
                </div>
                <div className="flex w-full justify-between">
                    <h2 className="text-lg font-semibold">Message: </h2>
                    <textarea name="message" id="" className="border-black border-2 w-[85%] h-[6rem] p-2 text-lg" placeholder="Type your message here"></textarea>
                </div>
                <input type="submit" value="Submit" className="cursor-pointer bg-primary hover:bg-[#792db8] transition-all duration-300 text-white font-semibold mr-1 mt-6 ml-auto px-8 py-3 rounded-xl"/>
            </form>
        </div>
    );
};

export default ContactForm;