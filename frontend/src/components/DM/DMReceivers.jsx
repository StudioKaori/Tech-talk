import { useState, useEffect } from "react";
import Api from "../../api/Api";
import ReceiverCard from "./DMReceiverCard";

export default function DMReceiver() {
  const [dms, setDms] = useState([]);
  const [user, setUser] = useState("");

  const createDM = (dmData) => {
    dmData.sender = user;
    Api.post("/dms", dmData).then((res) => {
      setDms([res.data, ...dms]);
    });
  };

  const getAll = () => {
    Api.get("/directMessages/" + user.id).then((res) => setDms(res.data));
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="body_wrapper">
      {/* <dmsForm onCreateClick={createDM} />

      {dms.map((dm) => (
        <ReceiverCard
          key={dm.id}
          dm={dm}
          onUpdateClick={updateDM}
          onDeleteClick={deleteDM}
          user={user}
        />
      ))} */}
    </div>
  );
}
