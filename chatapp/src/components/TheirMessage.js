import React from "react";
 
const TheirMessage=({lastMessage,message})=>{
    const isFirstMessageByUser=!lastMessage || lastMessage.sender.userName !== message.sender.userName;
    return(

    <div className="message-row">
        {isFirstMessageByUser && (<div className="message-avatar" style={{backgroundImage:`url(${message?.sender?.avatar})`}}/>)}
        {
        message?.attachments?.length>0 ?(
            <img src={message.attachments[0].file} alt="message-attachement" className="message-image" style={{marginLeft:isFirstMessageByUser?'4px':'48px'}}
            />):(
                <div className="message" style={{float:'left',color:'white',backgroundColor:'#CABCDC',marginLeft:isFirstMessageByUser?'4px':'48px'}}>
                    {message.text}
                </div>
            )

        }
    </div>
    )

}
export default TheirMessage;