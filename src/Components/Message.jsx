import PropTypes from "prop-types";

const Message = ({ msg }) => {
    const { email, message, time } = msg
    return (
        <div>
            <p className="py-1 px-3 inline-block rounded-[1rem] bg-primary text-white text-[12px] mb-2">{email}</p>
            <p className="mb-2 ml-1 text-[13px]"><strong>Posted on:</strong> {time}</p>
            <p className="text-lg border-gray-300 border-2 bg-white rounded-lg p-2 md:p-4 mb-8">{message}</p>
        </div>
    );
};

Message.propTypes = {
    msg: PropTypes.object
}

export default Message;