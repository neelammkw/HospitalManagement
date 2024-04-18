import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography biography-about">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Biography</h3>
          <p>Who We Are</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis 
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
            
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            assumenda exercitationem accusamus sit repellendus quo optio dolorum
            corporis corrupti. Quas similique vel minima veniam tenetu
            voluptas illo qui ipsum mollitia. Libero, assumenda?
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;