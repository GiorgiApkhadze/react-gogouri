import React from 'react'

function Banner() {
    return (
        <div>
            <div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 col-sm-12">
						<div className="entry" data-aos="slide-up">
							<h2>პლატფორმა შენი ფიზიკური და 
								მენტალური ჯანმრთელობისთვის</h2>
							<p>გოგოური ახალი ქართული აპლიკაციაა რომელიც ემსახურება ქალებში
								რეპროდუქციული და მენტალური განათლების ამაღლებას</p>
								<div className="row mt-5">
									<div className="col-md-4">
										<div  data-aos="zoom-in">
											<img src="img/playstore1.png" alt=""/>
										</div>
									</div>
									<div className="col-md-4">
										<div  data-aos="zoom-in">
											<img src="img/appstore.png" alt=""/>
										</div>
									</div>
								</div>
							
						</div>
					</div>
					<div className="col-md-6 col-sm-12">
						<div className="entry entry-img" data-aos="zoom-in">
							<img src="img/banner.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>



       
    )
}

export default Banner
