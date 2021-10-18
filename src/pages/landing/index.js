import React, { useEffect, useState } from "react";
import "./landing.css";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import img4 from "../../assets/image4.jpg";
import img5 from "../../assets/image5.jpg";
import img6 from "../../assets/image6.png";
import loader from "../../assets/1_loader.gif";

import { useDispatch } from "react-redux";
import { updateModalDataAction } from "../../redux/actions/homeActions";

export const LandingPage = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  let [images, setImages] = useState([img1, img2, img3, img4, img5, img6]);
  const dispatch = useDispatch();
  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <img width="30%" src={loader} />
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          {images.map((img, index) => {
            return (
              <div key={index} className="card m-2 card-content">
                <img
                  className="display-img"
                  onClick={() => dispatch(updateModalDataAction(true, img))}
                  src={img}
                /> 
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default LandingPage;
