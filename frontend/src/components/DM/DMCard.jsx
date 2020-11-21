import React, { useState } from "react";

import { useRecoilState } from "recoil";
import { dmReceiverState } from "../../js/state-information";

export default function DMCard({ dm }) {
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);

  console.log("card", dm);
  return (
    <article>
      <div className="dm-one">
        <div>{dm[0].receiver.name}</div>
        <div>
          <span className="fontXXS">
            {dm[0].date.substring(0, 19).replace("T", " ")}
          </span>
          <div>{dm[0].message}</div>
        </div>
      </div>
    </article>
  );
}
