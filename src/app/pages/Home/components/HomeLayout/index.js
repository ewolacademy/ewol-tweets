import React, { useContext } from "react";
import TweetsList from "../TweetsList";
import TweetItem from "../TweetItem";
import AppContext from "../../../../contexts/AppContext";
import "./styles.css";

const problemsMock = [
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
    user: {
      name: "Gabio",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/ewol-twitter.appspot.com/o/users%2FZNFyTUU2lwpaCufAGnaR%2Fprofile.jpeg?alt=media&token=19790562-e8c6-4e61-9415-4e6a0f0dc2ac",
    },
  },
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
    user: {
      name: "Juan",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/ewol-twitter.appspot.com/o/users%2FZNFyTUU2lwpaCufAGnaR%2Fprofile.jpeg?alt=media&token=19790562-e8c6-4e61-9415-4e6a0f0dc2ac",
    },
  },
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
    user: {
      name: "Gabio",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/ewol-twitter.appspot.com/o/users%2FZNFyTUU2lwpaCufAGnaR%2Fprofile.jpeg?alt=media&token=19790562-e8c6-4e61-9415-4e6a0f0dc2ac",
    },
  },
  {
    title: "test",
    body: "hola",
    created_at: new Date(),
    user: {
      name: "Gabio",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/ewol-twitter.appspot.com/o/users%2FZNFyTUU2lwpaCufAGnaR%2Fprofile.jpeg?alt=media&token=19790562-e8c6-4e61-9415-4e6a0f0dc2ac",
    },
  },
];

const HomeLayout = ({ problems }) => {
  const { data: appData } = useContext(AppContext);
  return (
    <div className="tweets-list-container">
      <TweetItem createMode user={appData.user} onPublish={console.log} />
      <TweetsList {...problems} list={problemsMock} />
    </div>
  );
};

export default HomeLayout;
