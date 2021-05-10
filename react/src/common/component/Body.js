import React from 'react';
import { Link } from 'react-router-dom';

const Body =()=>{

    return (
        <body>
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        Me
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to={'/users/user-register'}>회원가입</Link>
                        </li>
                        <li>
                        <Link to={'/users/user-login'}>로그인</Link>
                        </li>
                        <li>
                        <Link to={'/users/user-list'}>회원목록</Link>
                        </li>
                        <Link to={'/qbs/qna-register'}>Q&A</Link>
                        <li>
                            <Link to={'/board/news'}>Board</Link>
                        </li>
                        <li>
                            <Link to={'/board/seoul-cctv'}>서울시 유동인구</Link>
                        </li>
                        <li>
                            <Link to={'/counter/counter'}>Counter</Link>
                        </li>
                         <li>
                       <Link to={'/counter/slice-container'}>슬라이스 카운터</Link>  
                     </li>
                        <li>
                            <Link to={'/counter/redux-counter'}>ReduxCounter</Link>
                        </li>
            <li>
            <Link to={'/todos/todo-app'}>TodoApp</Link> 
            </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid bg-1 text-center">
            <h3 className="margin">Who Am I?</h3>
            <img src="https://www.w3schools.com/bootstrap/bird.jpg" className="img-responsive_img-circle_margin_display_inline" alt="Bird" width="350" height="350"/>
            <h3>I'm an adventurer</h3>
        </div>
        <div className="container-fluid bg-2 text-center">
            <h3 className="margin">What Am I?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a href="#" className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-search"></span> Search
            </a>
        </div>
        <div className="container-fluid bg-3 text-center">
            <h3 className="margin">Where To Find Me?</h3>
            <br />
            <div className="row">
                <div className="col-sm-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="https://www.w3schools.com/bootstrap/birds1.jpg" className="img-responsive margin width100pro" alt="Image" />
                </div>
                <div className="col-sm-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="https://www.w3schools.com/bootstrap/birds2.jpg" className="img-responsive margin width100pro" alt="Image" />
                </div>
                <div className="col-sm-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src="https://www.w3schools.com/bootstrap/birds3.jpg" className="img-responsive margin width100pro" alt="Image" />
                </div>
            </div>
        </div>
    </body>
        
        )
}

export default Body;