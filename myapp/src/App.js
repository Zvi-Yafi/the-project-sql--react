import {
  BrowserRouter,
  Route,
  Routes,
 
} from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Deshbord from "./deshbord";
import Info from "./Info";
import Logout from './Logout'
import Todos from './Todos'
import Posts from "./Posts";
import Albums from './Albums';
import Photos from "./Photos";
import Post from "./Post";
import Comments from './Comments'
function App() {

  return (
    <div className="App">
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Deshbord />}>
            <Route path="/Home" element={<Home />}>
            <Route path="/Home/info" element={<Info />} />
            <Route path="/Home/Todos" element={<Todos />} />
            <Route path="/Home/Posts" element={<Posts  />} />
            <Route path="/Home/Posts/:postID" element={<Post />} >
            <Route path="/Home/Posts/:postID/comments" element={<Comments />} />
            </Route>
            <Route path="/Home/Alboms" element={<Albums />} />
            <Route path="/Home/Alboms/:photoID" element={<Photos />} />
            </Route>
            <Route path="Home/Logout" element={<Logout />} />
            <Route path="Home/login" element={<Login />} />

             <Route path="*" element={<h1>Error</h1>} />
          </Route>
         
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
