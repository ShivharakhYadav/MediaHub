import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthGuard = ({ component }: { component: any }) => {
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  console.log("isAuthenticated----->", isAuthenticated);

  const navigate = useNavigate();
  const pathName = window.location.pathname;
  console.log("pathname", pathName)
  useEffect(() => {
    if (isAuthenticated) {
      pathName === '/login' && navigate('/')
    } else {
      if (pathName === "/register") {
        navigate('/register');
      } else {
        pathName !== '/login' && navigate('/login');
      }
    }
  }, [component]);

  return <>{component}</>;
};

export default AuthGuard;
