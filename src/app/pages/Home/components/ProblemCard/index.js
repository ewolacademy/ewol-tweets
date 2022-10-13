import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";

const RELATIVE_TIME_UPDATE = 1000 * 60;

const ProblemCard = ({ body, created_at }) => {
  moment.locale("es");
  const [relativeTime, setRelativeTime] = useState(
    moment(created_at).fromNow()
  );
  const intervalId = setInterval(
    () => setRelativeTime(moment(created_at).fromNow()),
    RELATIVE_TIME_UPDATE
  );
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <div>
        <span>{body}</span>
        <div>
          <span>{relativeTime}</span>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
