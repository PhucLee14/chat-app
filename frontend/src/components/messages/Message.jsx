import React from "react";

const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chet-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="D:\OneDrive\Uni\3rd\HK2\API\chat_app\frontend\public\meow.jpg"
                    />
                </div>
            </div>
            <div className={"chat-bubble text-white bg-blue-500"}>Hi there</div>
            <div className="chat-footer opacity-50 text-rs flex gap-1 items-center">
                12:42
            </div>
        </div>
    );
};

export default Message;
