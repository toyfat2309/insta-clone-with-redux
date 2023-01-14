import './App.css';
import HomePage from './features/homepage/HomePage';
import ModalToUploadPost from './features/postupload/ModalToUploadPost';
import { Routes, Route } from 'react-router-dom'
import Signin from './features/signin/Signin';
import Signup from './features/signup/Signup';
import ViewComments from './features/viewcomments/ViewComments';
import ActiveUserProfile from './features/userprofile/ActiveUserProfile';
import Explore from './features/explore/Explore';
import EditProfile from './features/updateprofile/EditProfile';
import AllFriendSuggestion from './features/friendsuggestion/AllFriendSuggestion';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  
  return (
    <>
      <ModalToUploadPost />
      <Routes >
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />} >
          <Route path='/feeds' element={<HomePage />} />
          <Route path='/profile' element={<ActiveUserProfile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/friendsuggestion' element={<AllFriendSuggestion />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
