import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import "./styles.css";
import Button from "../../../../components/Button";

const RELATIVE_TIME_UPDATE = 1000 * 60;

const TweetItem = ({
  body,
  createMode = false,
  created_at,
  user,
  onPublish,
}) => {
  const [bodyValue, setBodyValue] = useState("");
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

  if (!user) return;

  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <img src={user.photo} alt={`${user.name}-profile`} />
        <span>{user.name}</span>
      </div>
      {createMode ? (
        <textarea
          className="tweet-body"
          placeholder="Escribe algo..."
          onChange={(e) => setBodyValue(e.target.value)}
        ></textarea>
      ) : (
        <div className="tweet-body">
          <span>{body}</span>
        </div>
      )}
      <div className="tweet-footer">
        {createMode ? (
          <Button onClick={() => onPublish({ body: bodyValue, user })}>
            Publicar
          </Button>
        ) : (
          <span>{relativeTime}</span>
        )}
      </div>
    </div>
  );
};

export default TweetItem;
