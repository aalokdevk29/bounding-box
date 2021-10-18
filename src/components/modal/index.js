import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegionSelect from "react-region-select";
import { updateModalDataAction } from "../../redux/actions/homeActions";
import "./modal.css";
import FontAwesome from "react-fontawesome";

export const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.HomeReducer.showModal);
  const modalImg = useSelector((state) => state.HomeReducer.modalImg);

  const changeRegionData = (index, event) => {
    let regionClone = [...regions];
    regionClone[index].data.label = event.target.value;
    setRegions(regionClone);
  };

  const actionAddRegion = (region) => {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColour = "#36f336";
    console.log(randomNumber);
    switch (randomNumber) {
      case 0:
        randomColour = "orange";
        break;
      case 1:
        randomColour = "red";
        break;
      case 2:
        randomColour = "orange";
        break;
      case 3:
        randomColour = "cyan";
        break;

      default:
        randomColour = "#36f336";
        break;
    }
    let regionClone = [...regions];
    regionClone[region.index].data.isSaved = true;
    regionClone[region.index].data.backgroundColor = randomColour;
    regionClone[region.index].data.regionStyle = {
      border: `4px solid ${randomColour}`,
    };
    setRegions(regionClone);
  };

  const actionDeleteRegion = (regionIndex) => {
    let regionClone = [...regions];
    let updatedRegion = regionClone.filter(
      (ele) => ele.data.index != regionIndex
    );
    setRegions(updatedRegion);
  };

  const regionRenderer = (regionProps) => {
    let region = regions[regionProps.index];
    if (!region.data.isSaved) {
      return (
        <div>
          <div style={{ position: "absolute", right: "-5px", top: "-38px" }}>
            <button
              onClick={() => actionDeleteRegion(regionProps.data.index)}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
          <div
            className="d-flex"
            style={{ position: "absolute", right: "-5px", bottom: "-42px" }}
          >
            <input
              value={regionProps.data.label}
              onChange={(event) => changeRegionData(regionProps.index, event)}
              type="text"
            />
            <button
              className="btn btn-primary"
              onClick={() => actionAddRegion(regionProps)}
            >
              Save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: "-22px",
            color: "black",
            backgroundColor: region.data.backgroundColor || "#36f336",
          }}
        >
          <p className="region-label"> {region.data.label} </p>
        </div>
      );
    }
  };
  const onCloseModal = () => {
    dispatch(updateModalDataAction(false, ""));
    setRegions([]);
  };
  const onRegionChange = (regions) => {
    setRegions(regions);
  };
  const regionStyle = {
    background: "transparent",
    border: "4px solid #36f336",
  };
  const [regions, setRegions] = useState([]);
  return (
    <div>
      {showModal ? (
        <div className="modal-backdrop">
          <div className="modal-body">
            <div className="close-btn">
              <FontAwesome
                className="super-crazy-colors"
                onClick={onCloseModal}
                name="close"
                size="2x"
              />
            </div>
            <div
              style={{ maxHeight: "90vh", overflow: "hidden" }}
              className="row"
            >
              <div className=" col-12 col-md-9">
                <RegionSelect
                  regions={regions}
                  regionStyle={regionStyle}
                  constraint
                  onChange={onRegionChange}
                  regionRenderer={regionRenderer}
                >
                  <img src={modalImg} width="100%" />
                </RegionSelect>
              </div>
              <div className=" col-12 col-md-3 regions-container">
                {regions.map((element, index) => {
                  return element.data.isSaved ? (
                    <div className="modal-element" key={index}>
                      <p className="element-name">
                        {" "}
                        {element.data.label || "N/A"}
                      </p>
                      <p> {element.data.count || 0}</p>
                      <FontAwesome
                        className="super-crazy-colors"
                        onClick={() => actionDeleteRegion(element.data.index)}
                        name="close"
                        size="10px"
                        color="white"
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
