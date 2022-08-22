import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/navbar';
import Chatbox  from './Components/chatbox/chat-box/chatbox';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Chatbox/>
    </div>
  );
}

export default App;
