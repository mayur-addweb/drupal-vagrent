import React from 'react';
import notFound from '../../../assets/image/sad-blue.jpg'
  const NotFound = () => (
  <div classNameName="not-found">
  	<section className="not-found">
      <div className="container">
        <h1>4</h1>
        <img src={notFound} alt="not-found" />
        <h1>4</h1>
        <div className="error">
          <p> Oops !!! Page Not Found.</p>
          <a href="/"> Go back to the home page.</a>
        </div>
      </div>
	  </section>


	<footer className="sub-footer bg-blue text-center">
		<span>Copyright @ 2018. All rights reserved</span>
	</footer>
</div>
  );
export default NotFound;