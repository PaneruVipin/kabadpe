const UserAppoinmentDetail = ({ showPopup, setPopup, collectorInfo }) => {
  return (
    <>
      <div
        onClick={() => setPopup(false)}
        className={showPopup ? "pop-up-box-10 popupactive" : "pop-up-box-10"}
      >
        <div
          className="user-info-pop-up-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h5>Waste Collector</h5>
          {collectorInfo?.KabadCollector ? (
            <div className="waste-coll-logo-user-det-flex-bx">
              <div className="left-waste-col-logo">
                <img
                  src={collectorInfo?.KabadCollector?.profileImage}
                  alt=""
                  onError={(e) =>
                    (e.currentTarget.src = "/images/temp/temp-user-profile.png")
                  }
                />
                <div className="stars-flex-bx">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <div className="tick-check">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
              </div>

              <div className="user-det-bx">
                <h6>
                  Name : <span>{collectorInfo?.KabadCollector?.fullname}</span>
                </h6>
                <h6>
                  Phone No. :{" "}
                  <span>{collectorInfo?.KabadCollector?.phoneNumber}</span>
                </h6>
                {/* <h6>Address : <span>3810 B/20 krishna nagar 110005 near mobile shop</span> </h6> */}

                <div className="verify-det-box">
                  {collectorInfo?.KabadCollector?.policeVerification ? (
                    <h6>Police verified</h6>
                  ) : null}

                  {collectorInfo?.KabadCollector?.aadharBack ||
                  collectorInfo?.KabadCollector?.aadharFront ? (
                    <h6>Aadhar Verified</h6>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <p>Collector Not Assigned</p>
          )}

          <h5>Organization</h5>

          {collectorInfo?.Franchise ? (
            <div className="org-logo-info-flex-bx">
              <div className="left-org-logo">
                <img
                  src={
                    collectorInfo?.Franchise?.id == "kabadpe"
                      ? "./images/logos/logo-small.jpg"
                      : collectorInfo?.Franchise?.franchiseLogo
                  }
                  alt=""
                />
                <div className="tick-check">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
              </div>

              <div className="org-info">
                <h6>
                  Company : <span>{collectorInfo?.Franchise?.companyName}</span>
                </h6>
                {collectorInfo?.Franchise?.fullname ? (
                  <h6>
                    Manager : <span>{collectorInfo?.Franchise?.fullname}</span>
                  </h6>
                ) : null}

                {collectorInfo?.Franchise?.gst ? (
                  <h6 className="gst-text">
                    GST : <span>{collectorInfo?.Franchise?.gst}</span>
                  </h6>
                ) : null}

                <h6></h6>
              </div>
            </div>
          ) : (
            <p>Company Not Assigned</p>
          )}

          <div onClick={() => setPopup(false)} className="pop-user-info-close">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAppoinmentDetail;
