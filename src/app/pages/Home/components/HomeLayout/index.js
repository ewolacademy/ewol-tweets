import React from "react";
import TweetsList from "../TweetsList";
import TweetItem from "../TweetItem";
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
  return (
    <div className="tweets-list-container">
      <TweetItem
        createMode
        user={problemsMock[0]?.user}
        onPublish={console.log}
      />
      <TweetsList {...problems} list={problemsMock} />
    </div>
  );
};

export default HomeLayout;
