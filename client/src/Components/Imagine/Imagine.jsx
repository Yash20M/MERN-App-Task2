import React from "react";
import "./imagine.css";
import earth from "../../../images/earth.svg";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import imagineImage from "../../../images/3rd.jpg";

const Imagine = () => {
  return (
    <>
      <section className="imagine">
        <div className="imagine_left">
          <div className="imagine_left_head">
            <h1 className="imagine_left_title">Also Read</h1>
            <HiOutlineChevronDoubleRight color="grey" size={28} />
          </div>

          <div className="imagine_box">
            <img src={imagineImage} alt="" />
            <div className="imagine_content_box">
              <div className="imagine_box_content_head">
                <h2>Red Phantom</h2>
                <h2>Tech Novelty</h2>
              </div>
              <div className="imagine_box_content_para">
                <p>
                  For more than 40 years , RP Transportation has provided safe,
                </p>
                <p>
                  reliable, afforfable transportation services to
                  cities,countries
                </p>
                <p>munciplaties, and other jurisdictional entities, as well </p>
                <p>as private corporation,non-profit agencies</p>
                <p>and coummunitiy organisation</p>
                <p>
                  For more than 40 years , RP Transportation has provided safe,
                </p>
                <p>
                  reliable, afforfable transportation services to
                  cities,countries
                </p>
                <p>munciplaties, and other jurisdictional entities, as well </p>
                <p>as private corporation,non-profit agencies</p>
                <p>and coummunitiy organisation</p>
              </div>
              <div className="imagine_content_more">
                <div className="imagine_content_readmore">
                  <h2>Read More</h2>
                  <HiOutlineArrowNarrowRight
                    color="white"
                    fontSize={28}
                    className="arrow_icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="imagine_right">
          <img src={earth} alt="" />
        </div>
      </section>
    </>
  );
};

export default Imagine;
