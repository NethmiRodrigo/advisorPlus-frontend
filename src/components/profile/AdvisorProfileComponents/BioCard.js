import React from "react";

function BioCard({
	setDetailsModal,
	name,
	// phone,
	// address,
	// occupation,
	// experience
}) {
	return (
		<div className="card bg-light mb-3">
			<div className="card-body">
				<div
					className="row"
					style={{ paddingTop: "2px", paddingBottom: "2px" }}
				>
					<div className="col-sm-3">
						<button
							type="button"
							className="rounded px-2 py-1"
							onClick={setDetailsModal}
							style={{
								marginBottom: "5px",
								border: "1px blue solid",
								color: "blue",
							}}
						>
							<i className="fas fa-edit"></i>
							<span style={{ marginLeft: "5px" }}>Edit</span>
						</button>
					</div>
				</div>
				<hr />
				<div
					className="row"
					style={{ paddingTop: "2px", paddingBottom: "2px" }}
				>
					<div className="col-sm-3">
						<h6 className="mb-0">Full Name</h6>
					</div>
					<div className="col-sm-9 text-secondary">{name}</div>
				</div>
				<hr />
				{/* <hr />
                <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                    <div className="col-sm-3">
                        <h6 className="mb-0">Contact Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {phone}
                    </div>
                </div>
                <hr />
                <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                    <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {address}
                    </div>
                </div>
                <hr />
                <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                    <div className="col-sm-3">
                        <h6 className="mb-0">Occupation</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {occupation}
                    </div>
                </div>
                <hr />
                <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                    <div className="col-sm-3">
                        <h6 className="mb-0">Experience</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {experience}
                    </div>
                </div> */}
			</div>
		</div>
	);
}

export default BioCard;
