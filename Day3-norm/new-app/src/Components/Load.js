import React, { useEffect, useState } from 'react';
// import '../Assets/Css/Load.css';
import Loader from './Loader';
import Nav from './Nav';
import Content from './Content';
import Cards from './Cards';

const Load = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Additional state to track whether to apply the loading styles
  const applyLoadingStyles = isLoading;

  return (
    <div>
      {isLoading ? (
        <div className={`wrapper ${applyLoadingStyles ? 'load-styles' : ''}`}>
          <div className="box-wrap">
            <div className="box one"></div>
            <div className="box two"></div>
            <div className="box three"></div>
            <div className="box four"></div>
            <div className="box five"></div>
            <div className="box six"></div>
          </div>
        </div>
      ) : (
        <>
          <Nav />
          <Content />
          <Cards />
        </>
      )}
    </div>
  );
};

export default Load;
