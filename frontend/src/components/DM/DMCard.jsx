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
          {dm[0].date}
          <div>{dm[0].message}</div>
        </div>
        <div>{dm[0].sender.name}</div>
      </div>
    </article>
  );
}
