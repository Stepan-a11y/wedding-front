import axios from "axios";

export type GuestParams = {
  firstName: string;
  lastName: string;
  status: string;
};

export const postGuestData = (payload: GuestParams) => {
  axios
    .post("http://localhost:3001/api/newguest", payload)
    .then((response) => response.data);
};
