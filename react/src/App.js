import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollIntoView from "./webapp/common/helpers/ScrollIntoView";
import ScrollToTop from "./webapp/common/helpers/ScrollToTop";

import {ResumeList, ResumeModify, ResumeRead, ResumeRegister} from 'webapp/resume/index'
import {FundingList, FundingModify, FundingRead, FundingRegister} from 'webapp/funding/index'
import {ItemList, ItemModify, ItemRead, ItemRegister} from 'webapp/item/index'
import {ReviewList, ReviewModify, ReviewRead, ReviewRegister} from 'webapp/review/index'
import {WorkList, WorkModify, WorkRead, WorkRegister} from 'webapp/work/index'
import { HomeVideoBg } from "webapp/common/index";
import { BoardList, BoardPage, BoardRegister, MainPage, PerformanceInput } from "webapp/testupload";


const App=()=> {
  
  return (
    <Router basename="/">
      <ScrollIntoView>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path={`/`}
              component={HomeVideoBg}
            />
              {/*Resume*/}
              <Route exact path='/resumes/resume_list' component={ResumeList}/>
            <Route exact path='/resumes/resume_modify' component={ResumeModify}/>
            <Route exact path='/resumes/resume_read' component={ResumeRead}/>
            <Route exact path='/resumes/resume_register' component={ResumeRegister}/>

            {/*Funding*/}
            <Route exact path='/fundings/funding_list' component={FundingList}/>
            <Route exact path='/fundings/funding_modify' component={FundingModify}/>
            <Route exact path='/fundings/funding_read' component={FundingRead}/>
            <Route exact path='/fundings/funding_register' component={FundingRegister}/>

            {/*Item*/}
            <Route exact path='/items/item_list' component={ItemList}/>
            <Route exact path='/items/item_modify' component={ItemModify}/>
            <Route exact path='/items/item_read' component={ItemRead}/>
            <Route exact path='/items/item_register' component={ItemRegister}/>
         
            {/*Review*/}
            <Route exact path='/reviews/review_list' component={ReviewList}/>
            <Route exact path='/reviews/review_modify/:id' component={ReviewModify}/>
            <Route exact path='/reviews/review_read/:id' component={ReviewRead}/>
            <Route exact path='/reviews/review_register' component={ReviewRegister}/>

               {/*Work*/}
               <Route exact path='/works/work_list' component={WorkList}/>
               <Route exact path='/works/work_modify' component={WorkModify}/>
               <Route exact path='/works/work_read' component={WorkRead}/>
               <Route exact path='/works/work_register' component={WorkRegister}/>

                {/*upload*/}
                <Route exact path='/boards/board_list' component={BoardList}/>
               <Route exact path='/boards/board_register' component={BoardRegister}/>
               <Route exact path='/boards/main' component={MainPage}/>
               <Route exact path='/boards/board_page' component={BoardPage}/>
               <Route exact path='/boards/performance' component={PerformanceInput}/>
          </Switch>
        </ScrollToTop>
      </ScrollIntoView>
    </Router>
  );
}

export default App;
