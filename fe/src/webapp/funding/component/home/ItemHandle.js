import React from "react";
import {  useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import { getFundingDetail} from "webapp/funding/reducer/funding.reducer";

const ItemHandle = ({ title, hashtag, fundingId ,image}) => {
  
  
    const dispatch = useDispatch()
    const selectContent = fundingId =>{
        dispatch(getFundingDetail(fundingId))
}

    


    return(
      <div className="col-md-3 mfp-iframe-holder " >
             <Link to ={`/funding/read/${fundingId}`} onClick={async()=>selectContent(fundingId)}>
          <div className="portfolio-item"  style={{ overflow:"hidden",display:"flex", width:300,height:350}}>
          <img src={image.map(img =>(`http://localhost:8080/funding_file/display?fileName=${img.uuid}_${img.fname}`))[0]}/>
        <div className="portfolio-info white-bg">
          <div className="centrize">
            <div className="v-center dark-color">
              <h3>{title}</h3>
              <p>{hashtag}</p>
            </div>
          </div>  
        </div>
        </div>
        </Link>
    </div>
   
  );
}

export default ItemHandle;
