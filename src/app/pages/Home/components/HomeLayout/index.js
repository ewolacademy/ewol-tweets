import React from "react";
import TweetsList from "../TweetsList";
import TweetItem from "../TweetItem";
import "./styles.css";
import Navbar from "../../../../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="tweets-list-container">
        <TweetItem
          createMode={true} // esta prop hace que se ponga en modo publicar
          // user={} data del usuario -> {id, name, photo}
          // loading={} estado de cargando la acción de post del tweet
          // error={} estado de error en la acción de post del tweet (debe mostrarse también si esta vacío el texto)
          // onPublish={} se ejecuta cuando el usuario presiona el botón publicar. Pasa como args (body, user).
        />
        <TweetsList
        // list={} Lista de tweets como la trae firebase
        // loading={} estado de cargando la lista
        // error={} estado de error de la lista
        />
      </div>
    </>
  );
};

export default HomeLayout;
