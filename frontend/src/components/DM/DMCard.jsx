import React from "react";

import { useRecoilState } from "recoil";
import { dmReceiverState, userState } from "../../js/state-information";

export default function DMCard({ dm }) {
  const [dmReceiver, setDmReceiver] = useRecoilState(dmReceiverState);
  const [user, setUser] = useRecoilState(userState);

  return dm[0].receiver.id === user.id ? (
    <article>
      <div className="dm-one">
        <div className="dm-receiver">
          <i className="fas fa-user-alt"></i>
          <br />
          {dm[0].receiver.name}
        </div>
        <div className="dm-text-wrapper">
          <div className="margin-left">
            <div className="dm-text radius-left">{dm[0].message}</div>
            <span className="fontXXS dm-date dm-date-left">
              {dm[0].date.substring(0, 19).replace("T", " ")}
            </span>
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
            <div className="dm-text radius-right">{dm[0].message}</div>
            <span className="fontXXS dm-date dm-date-right">
              {dm[0].date.substring(0, 19).replace("T", " ")}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
