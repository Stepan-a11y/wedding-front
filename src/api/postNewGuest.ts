import axios from "axios";

export type GuestParams = {
  firstName: string;
  lastName: string;
  status: string;
};

export const postGuestData = (payload: GuestParams) => {
  axios
    .post("https://wed-back.onrender.com/api/newguest", payload)
    .then((response) => response.data);
};
