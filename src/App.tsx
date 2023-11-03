import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Login from './pages/Auth/Login';
import { show_Notification } from './store/actions/userActions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from './pages/Auth/AuthGuard';
import Dashboard from './pages/Dashboard';
import { localStorageKeys } from './utils/constants';
import Register from './pages/Auth/Register';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: any) => state?.isAuthenticated);



  useEffect(() => {
    // if(isAuthenticated)
    let token = localStorage.getItem(localStorageKeys.mediaHub_AccessToken);
    if (token) {
      // let servicee
    }
    // localStorage.get
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

        <Route path='/' element={<AuthGuard component={<Dashboard />} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />

      </Routes>
      <ToastContainer limit={3} />
    </BrowserRouter>
  );
}

export default App;
