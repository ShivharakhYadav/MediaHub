import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthGuard = ({ component }: { component: any }) => {
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  console.log("isAuthenticated----->", isAuthenticated);

  const navigate = useNavigate();
  const pathName = window.location.pathname;

  useEffect(() => {
    if (isAuthenticated) {
      pathName === '/' && navigate('/dashboard');
    } else {
      pathName !== '/' && navigate('/');
    }
  }, [component]);

  return <>{component}</>;
};

export default AuthGuard;