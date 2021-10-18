import { UPDATE_MODAL_DATA } from "../../actionTypes";

export const updateModalDataAction = (show, imgUrl) => {
  return { type: UPDATE_MODAL_DATA, payload: { show: show, modalImg: imgUrl } };
};
