import React from 'react';
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

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state);


  // useEffect(() => {
  //   // first
  //   const isAuthLocal = localStorage.getItem(localStorageKeys.isAuthenticated);
  //   // localStorage.setItem(, "true");
  //   if (isAuthLocal){
  //     // dispatch()
  //   }

  //     return () => {
  //       // second
  //     }
  // }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

        <Route path='/dashboard' element={<AuthGuard component={<Dashboard />} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />

      </Routes>
      <ToastContainer limit={3} />
    </BrowserRouter>
  );
}

export default App;
