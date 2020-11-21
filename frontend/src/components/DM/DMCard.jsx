import React from "react";

import { useRecoilState } from "recoil";
import { dmReceiverState, userState } from "../../js/state-information";

export default function DMCard({ dm }) {
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [user, setUser] = useRecoilState(userState);

  return dm[0].receiver.id === user.id ? (
    <article>
      <div className="dm-one">
        <div>{dm[0].receiver.name}</div>
        <div className="dm-text-wrapper">
          <div className="margin-left">
            <span className="fontXXS">
              {dm[0].date.substring(0, 19).replace("T", " ")}
            </span>
            <div className="dm-text">{dm[0].message}</div>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <article>
      <div className="dm-one">
        <div> </div>
        <div className="dm-text-wrapper">
          <div className="margin-right">
            <span className="fontXXS">
              {dm[0].date.substring(0, 19).replace("T", " ")}
            </span>
            <div className="dm-text">{dm[0].message}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
