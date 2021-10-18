import { UPDATE_MODAL_DATA } from "../../actionTypes";

const initState = {
  showModal: false,
  modalImg: "",
};

const HomeReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MODAL_DATA:
      return {
        ...state,
        showModal: action.payload.show,
        modalImg: action.payload.modalImg,
      };

    default:
      return { ...state };
  }
};

export default HomeReducer;
