import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ScrollIntoView from './webapp/common/helpers/ScrollIntoView';
import ScrollToTop from './webapp/common/helpers/ScrollToTop';

import { ArtistList, Signup, Signin, ArtistRead, ArtistUpdate, Logout, MyPage, AristPageContainer } from 'webapp/artist/index';
import { ArtApp, ArtRegister, ArtDetail, ArtModify } from 'webapp/art';
import { ResumeApp, ResumeModify, ResumeRegister } from 'webapp/resume/index';
import { FundingHome, FundingList, FundingUpdate, FundingRegister, FundingDetail } from 'webapp/funding/index';
import { Review, ReviewModify, ReviewRead, ReviewRegister } from 'webapp/review/index';
import { Reply, ReplyModify, ReplyRegister } from 'webapp/reply';

import { HomeVideoBg } from 'webapp/common/index';
import {QnaList, QnaRegister} from "webapp/qna/index";



const App = () => {
    return (
        <Router basename="/">
            <ScrollIntoView>
                <ScrollToTop>
                    <Switch>
                        <Route exact path={`/`} component={HomeVideoBg} />

                         {/*Artist*/}
                        <Route exact path="/artist/artist-signin" component={Signin} />
                        <Route exact path="/artist/artist-signup" component={Signup} />
                        <Route exact path="/artist/artist-list" component={ArtistList} />
                        <Route exact path="/artist/artist-read/:id" component={ArtistRead} />
                        <Route exact path="/artist/artist-update/:id" component={ArtistUpdate} />
                        <Route exact path="/artist/artist-page_list" component={AristPageContainer} />


                        {/*Resume*/}
                        <Route exact path="/resume/home" component={ResumeApp} />
                        <Route exact path="/resume/modify/:resumeId" component={ResumeModify} />
                        <Route exact path="/resume/register" component={ResumeRegister} />

                        {/*art*/}
                        <Route exact path="/art" component={ArtApp} />
                        <Route exact path="/art/register" component={ArtRegister} />
                        <Route exact path="/art/read/:id" component={ArtDetail} />
                        <Route exact path="/art/modify/:id" component={ArtModify} />

                        {/*Funding*/}
                        <Route exact path="/funding/list" component={FundingList} />
                        <Route exact path="/funding/modify/:update" component={FundingUpdate} />
                        <Route exact path="/funding/read/:read" component={FundingDetail} />
                        <Route exact path="/funding/register" component={FundingRegister} />
                        <Route exact path="/funding/home" component={FundingHome} />

                        {/*Review*/}
                        <Route exact path='/reviews/review-list' component={Review}/>
                        <Route exact path='/reviews/review-modify/:reviewId' component={ReviewModify}/>
                        <Route exact path='/reviews/review-read/:reviewId' component={ReviewRead}/>
                        <Route exact path='/reviews/review-register' component={ReviewRegister}/>

                        {/*Reply*/}
                        <Route exact path='/replies/reply-list' component={Reply}/>
                        <Route exact path='/replies/reply-modify/:replyId' component={ReplyModify}/>
                        <Route exact path='/replies/reply-register' component={ReplyRegister}/>

                        {/*Qna*/}
                        <Route exact path='/qna/qna-list' component={QnaList}/>
                        <Route exact path='/qna/qna-register' component={QnaRegister}/>

                        <Switch>
                            <privateRoute exact path="/" component={HomeVideoBg} />
                            <Route exact path="/artist/artist-logout" component={Logout} />
                            <Route exact path="/artist/artist-mypage" component={MyPage} />
                            <Redirect path="*" to="/" />
                        </Switch>
                    </Switch>
                </ScrollToTop>
            </ScrollIntoView>
        </Router>
    );
};

export default App;
