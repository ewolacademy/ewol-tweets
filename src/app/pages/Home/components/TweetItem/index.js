import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import "./styles.css";
import Button from "../../../../components/Button";
import autosize from "../../../../../utils/libs/autosize.min";

const RELATIVE_TIME_UPDATE = 1000 * 60;

const TweetItem = ({
  body,
  createMode = false,
  created_at,
  user,
  onPublish,
}) => {
  const [bodyValue, setBodyValue] = useState("");
  const [bodyFocus, setBodyFocus] = useState(false);
  moment.locale("es");
  const [relativeTime, setRelativeTime] = useState(
    moment(created_at).fromNow()
  );
  const intervalId = setInterval(
    () => setRelativeTime(moment(created_at).fromNow()),
    RELATIVE_TIME_UPDATE
  );

  useEffect(() => {
    autosize(document.querySelector(".tweet-container textarea"));
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  if (!user) return;

  return (
    <div className={`tweet-container${bodyFocus ? " focus" : ""}`}>
      <div className="tweet-header">
        <img
          src={user.photo?.base64 ?? user.photo}
          alt={`${user.name}-profile`}
        />
        <span>{user.name}</span>
      </div>
      {createMode ? (
        <textarea
          auto
          className="tweet-body"
          placeholder="Escribe algo..."
          onFocus={() => setBodyFocus(true)}
          onBlur={() => setBodyFocus(false)}
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
