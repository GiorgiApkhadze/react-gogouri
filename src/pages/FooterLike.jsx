import React from 'react'
import img1 from '../img/page1.png';
import img2 from '../img/page2.png';
import img3 from '../img/page3.png';
import img4 from '../img/page4.png';

function FooterLike() {
    return (
        <div>
					<div className="services section">
			<div className="container">
				<div className="title-section">
					
					<h4>რას აკეთებს გოგოური?</h4>
					<h6 className="mt-3">გოგოური ახალი ქართული აპლიკაციაა რომელიც ემსახურება <br/>
						ქალებში რეპროდუქციული და მენტალური განათლების ამაღლებას</h6>
						<button className="button mt-5" >გადმოწერე აპლიკაცია</button>
				</div>
			</div>
		</div>

		<div className="counter section bkg_img">
			<div className="container ">
				<div className="">
					<div className="row">
						<div className="col-md-3" >
							<div className="entry">
								<img src={img1} alt=""/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="entry">
								<img  src={img2} alt=""/>
							</div>
						</div>
						<div className="col-md-3" >
							<div className="entry">
								<img  src={img3} alt=""/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="entry">
								<img src={img4} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    	</div>
    )
}

export default FooterLike
