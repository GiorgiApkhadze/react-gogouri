import React from 'react';
import logoImg from '../../img/logo.png';
import playstore1 from '../../img/playstore1.png';
import appsotore from '../../img/appstore.png';
import banner from '../../img/banner.png';

function header() {
  return (
    <div>
      <div className="header-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
              <div className="entry" data-aos="slide-up">
                <h2>
                  პლატფორმა შენი ფიზიკური და <br />
                  მენტალური ჯანმრთელობისთვის
                </h2>
                <p>
                  გოგოური ახალი ქართული აპლიკაციაა რომელიც ემსახურება ქალებში რეპროდუქციული და მენტალური განათლების
                  ამაღლებას
                </p>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <div data-aos="zoom-in">
                      <img src={playstore1} alt="img" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div data-aos="zoom-in">
                      <img src={appsotore} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="entry entry-img" data-aos="zoom-in">
                <img src={banner} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
