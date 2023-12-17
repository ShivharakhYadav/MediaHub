import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Login from './pages/Auth/Login';
import { save_user, showLoading, show_Notification } from './store/actions/userActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { ToastContainer } from 'react-toastify';
import AuthGuard from './pages/Auth/AuthGuard';
import Dashboard from './pages/Dashboard';
import { localStorageKeys } from './utils/constants';
import Register from './pages/Auth/Register';
import { getUser } from './services/userServices';
import { jwtDecode } from 'jwt-decode';
import Loading from './components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import SingleUserProfile from './components/SingleUserProfile';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: any) => state?.isAuthenticated);
  console.log("isAuthenticated App--->", isAuthenticated)
  useEffect(() => {
    (async () => {
      let token = localStorage.getItem(localStorageKeys.mediaHub_AccessToken);
      console.log("token--->", token)
      if (token !== "undefined" && token) {
        dispatch(showLoading(true))
        let decoded = jwtDecode(token) as any;
        let test = await getUser(decoded?._id);
        console.log("test--->",test)
        if (test?.success) {
          dispatch(save_user(test.data));
        }
        dispatch(showLoading(false))
        // console.log(test);
      }
    })()
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path='/login' element={<AuthGuard component={<Login />} />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path='/register' element={<AuthGuard component={<Register />} />} />
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

        <Route path='/' element={<AuthGuard component={<Dashboard />} />} />
        <Route path='/profile' element={<AuthGuard component={<SingleUserProfile />} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />

      </Routes>
      <ToastContainer limit={3} />
      <Loading />
    </BrowserRouter>
  );
}

export default App;
