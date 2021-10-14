import React from 'react';
import './Page10.css';
import WTA from '../../assets/img/WTAPage10.png';
import qst from '../../assets/img/qstPage10.png';
import QDB from '../../assets/img/QDBPage10.png';
import OLYMPIC from '../../assets/img/OLYMPICPage10.png';
import FIFA from '../../assets/img/FIFAPage10.png';
import ATP from '../../assets/img/ATPPage10.png';

function Page10() {
	return (
		<div className=" Page10">
			<div className="container">
				<div className="row nne">
					<div className="col-md-2">
						<div className="client-images">
							<img className="img-coffee" src={WTA} />
						</div>
					</div>
					<div className="col-md-2">
						<div className="client-images">
							<img className="img-coffee" src={qst} />
						</div>
					</div>
					<div className="col-md-2">
						<div className="client-images">
							<img className="img-coffee" src={QDB} />
						</div>
					</div>
					<div className="col-md-2">
						<div className="client-images">
							<img className="img-coffee" src={OLYMPIC} />
						</div>
					</div>
					<div className="col-md-2">
						<div className="client-images">
							<img className="img-coffee" src={FIFA} />
						</div>
					</div>
					<div className="col-md-2">
						<div className="client-images">
							<img className="img-coffee" src={ATP} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page10;
