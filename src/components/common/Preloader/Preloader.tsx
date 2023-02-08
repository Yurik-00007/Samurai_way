import React from 'react';
import preloader from "../../../assets/images/Wedges-7.1s-189px (2).svg";

const Preloader = () => {
    return (
        <div /*style={{backgroundColor: "white"}}*/>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;