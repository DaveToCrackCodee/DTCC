import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname, navigate]);

  return null;
};

export default ScrollToTop;
