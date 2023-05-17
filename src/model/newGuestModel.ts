import { createEffect } from "effector";
import { GuestParams, postGuestData } from "../api/postNewGuest";

export const sentDataFx = createEffect((params: GuestParams) =>
  postGuestData(params)
);
