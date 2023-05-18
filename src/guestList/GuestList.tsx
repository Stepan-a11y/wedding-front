import { useEffect } from "react";
import { useStore } from "effector-react";
import { guestsStore, getDataFx } from "../model/newGuestModel";

export const GuestList = () => {
  const guests = useStore(guestsStore);

  useEffect(() => {
    getDataFx();
  }, []);

  return (
    <div>
      {guests.map((item, index) => (
        <div
          key={index}
          style={{
            border: "4px solid blue",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <h3>{item.firstName}</h3>
          <h3>{item.lastName}</h3>
          <h3>{item.status}</h3>
        </div>
      ))}
    </div>
  );
};
