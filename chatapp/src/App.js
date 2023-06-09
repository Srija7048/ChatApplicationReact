import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import Loginform from './components/loginform';
const App=()=>{
    if(!localStorage.getItem('userName')) return <Loginform/>
    return (
        <ChatEngine
            height="100vh"
            projectID="1884b41e-c10c-4cab-b6d4-1613ba455524"
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
            
        />
    )
}
export default App;