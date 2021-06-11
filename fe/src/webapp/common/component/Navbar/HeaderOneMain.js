import React, { useEffect } from 'react';
// DATA Files
import dataNavLogin from 'webapp/common/data/Navbar/main-navbar-login.json';
import dataNavbar from 'webapp/common/data/Navbar/main-navbar-data.json';

// components
import HeaderOne from 'webapp/common/Header/HeaderOne';

import { getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
import { useSelector } from 'react-redux';

const HeaderOneMain = () => {

    const artistState = useSelector(state=> state.artists.artistsState);
    useEffect(()=>{
        getLocalArtist()
    })
    return (
        <>
            <div>
                <HeaderOne data={ artistState?.username != undefined && artistState?.username != "" ? dataNavLogin : dataNavbar} />
            </div>
        </>
    );
};
export default HeaderOneMain;
