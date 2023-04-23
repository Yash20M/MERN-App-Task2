import React from "react";
import "./Techno.css";
import RpLogo from "../../../images/rp.png";
import Rpbg from "../../../images/rp.svg";

const Techno = () => {
  return (
    <>
      <section className="techno">
        <div className="techno_left">
          <div className="techno_left_heading">
            <h1>
              <span>W</span>e are thinking of New Approach To Your Current
              Methods
            </h1>
            <div className="techno_left_para">
              <p>
                With PRNt's customer-centric digital experience, businesses,
                co-worker, and the community may all climb to their respective
                postion. We are focused on cutting-edge new technologies such
                bas nanotechnology, 5G, blokchain, cybersecurity, artifical
                intelligence, and other in order to enable digital
                transformation accross end-to-end customer requiement. PRTN is a
                fast growing startup brand, want to be ranked amomg the top IT
                service providers in the globe. in the order to improve the
                overall Human.
              </p>
            </div>
          </div>
        </div>
        <div className="techno_right">
          <img src={RpLogo} alt="RPImage" className="RPmainImage" />
          <img src={Rpbg} alt="bg" className="RpLogoBg" />
        </div>
      </section>
    </>
  );
};

export default Techno;
