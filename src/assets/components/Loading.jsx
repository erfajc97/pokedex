import React from 'react';

const Loading = () => {
    return (
      <div className="container_loading_page">
        {/* <div className="container_logo_loading"> */}

        <img
          className="logo_loading   "
          src={"https://i.gifer.com/5Q0v.gif"}
          alt="logo_loading"
        />
        {/* </div> */}
        <div className="container_title_loading_page">
          <h2 className="title_loading_page animate__animated animate__rubberBand ">
            LOADING POKEDEX ...
          </h2>
        </div>
      </div>
    );
};

export default Loading;