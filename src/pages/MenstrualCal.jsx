import React from 'react';
import banner2 from '../img/banner-2.png';

function MenstrualCal() {
    return (
        <div>
            <div className="about-us section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<div className="entry">
							<img src={banner2} alt="img"/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="entry">
							<div className="col-md-12 about_app_1">
								<h4>მენსტრუალური კალენდარი</h4>
								<p>თვალი ადევნე ყოველთვიურად შენს <br/>
									მენსტრუალურ ციკლს</p>
							</div>
							<div className="col-md-12 about_app_2">
								<h4>ბლოგი</h4>
								<p>მიიღეთ განახლებული ინფორმაცია ჩვენი ექიმებისგან<br/>
									თქვენს ჯანმრთელობასთან დაკავშირებით</p>
							</div>
							<div className="col-md-12 about_app_3">
								<h4>ფორუმი</h4>
								<p>ჩაერთეთ ჩვენს ანონიმურ ფორუმებზე და გაუზიარეთ<br/>
									სხვებს თქვენი გამოცდილება </p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default MenstrualCal
