import { createEffect, createStore } from "effector";
import { GuestParams, getGuestData, postGuestData } from "../api/postNewGuest";

type GuestData = GuestParams[];

export const getDataFx = createEffect(() => getGuestData());

export const sentDataFx = createEffect((params: GuestParams) =>
  postGuestData(params)
);

export const guestsStore = createStore<GuestData>([]).on(
  getDataFx.doneData,
  (_, result) => result
);
