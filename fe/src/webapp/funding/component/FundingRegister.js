import React, { useEffect, useRef, useState } from 'react';
import HomeMarketingSlider from 'webapp/funding/component/presentation/HeroMarketing';
import FooterOne from 'webapp/common/Footer/FooterOne';
import { saveFunding } from '../reducer/funding.reducer';
import { useDispatch, useSelector } from 'react-redux';
import FileRegister from './register/FileRegister';
import TextRegister from './register/TextRegister';
import HeaderOneMain from 'webapp/common/component/Navbar/HeaderOneMain';
import { getLocalArtist } from 'webapp/artist/reducer/artist.reducer';
const FundingRegister = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocalArtist());
    }, []);
    const param = useSelector(state => state.artists.artistsState)

    const childRef = useRef();
    let uploadedFiles = null;


    const sendTextForm = (title, content, goalPrice, hashtag) => {
        childRef.current.send();
        const data = {artistId:param.artistId, title: title, content: content, goalPrice: goalPrice, hashtag: hashtag, fundingFiles: uploadedFiles };
        dispatch(saveFunding(data));
    };

    const getUploadedFiles = (uplodedFilesResult) => {
        uploadedFiles = uplodedFilesResult;
    };

    return (
        <div>
            <HeaderOneMain />
            <HomeMarketingSlider />
            <div style={{ marginLeft: 100 }}>
                <h2>펀딩 등록</h2>
            </div>
            <hr />

            <TextRegister sendTextForm={sendTextForm}></TextRegister>
            <hr />
            <FileRegister cref={childRef} getUploadedFiles={getUploadedFiles}></FileRegister>
            <FooterOne />
        </div>
    );
};

export default FundingRegister;
