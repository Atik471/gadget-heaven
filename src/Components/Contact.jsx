import { createContext, useState } from "react";
import ContactForm from "./ContactForm";
import Messages from "./Messages";

export const SubmitContext = createContext()

const Contact = () => {
    const [submit, setSubmit] = useState(1)

    
    const submitValue = {submit, setSubmit}

    return (
        <div>
            <SubmitContext.Provider value={submitValue}>
                <ContactForm></ContactForm>
                <hr className=" border-gray-300 my-8 w-[80%] mx-auto" />
                <Messages></Messages>
            </SubmitContext.Provider>
        </div>
    );
};

export default Contact;