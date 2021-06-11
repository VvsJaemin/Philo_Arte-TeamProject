import React, { useEffect} from "react";
import HomeMarketingSlider from "webapp/funding/component/presentation/HeroMarketing";
import FooterOne from  "webapp/common/Footer/FooterOne";
import { useDispatch, useSelector } from "react-redux";
import {  getFundingList } from "../reducer/funding.reducer";
import HomeList from "../component/home/HomeList";
import { getLocalArtist } from "webapp/artist/reducer/artist.reducer";
import HeaderOneMain from 'webapp/common/component/Navbar/HeaderOneMain';

const FundingHome = () => {
  const pageResult= useSelector(state=>state.fundings.pageResult)
  const dispatch = useDispatch()
  const page = pageResult.page
  useEffect((e)=>{
    dispatch(getFundingList(page))
  },[])
  useEffect(() => {
    getLocalArtist();
}, []);
  return(
  <>
    <HeaderOneMain />

    <HomeMarketingSlider/>
    <HomeList
      tagline="Let's participate Funding"
      title="당신이 함께 할 수 있는 펀딩리스트"
      backfont="FUND"
      classes="no-bottom-line"
      data={pageResult.dtoList}
      filter={true}
      hashtag={[
        "전체보기",
        "그림",
        "조형",
        "조각",
        "건축",
        "의상",
        "소품",
      ]}
    />
    <FooterOne />
  </>
);
    }
export default FundingHome;
