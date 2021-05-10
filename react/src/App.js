import logo from './logo.svg';
import 'App.css';
import {Route} from 'react-router';
import {ArticleList, ArticleWrite, ArticleDetail, ArticleUpdate} from 'article/index' 
import {NewsBoard, SeoulCCTV} from 'board/index'
import {Home, Head, Body, Footer} from 'common/index'
import {Counter, CounterContainer, CounterSliceContainer, ReduxCounter} from 'counter/index'
import {AddTodo, TodoApp, Todos} from 'todos/index'
import {UserRegister, UserLogin, UserList} from 'users/index'
import { QnaList, QnaRegister } from 'qbs/index';

const App = () => {
    return (
        <div className="App">
            <Route exact="exact" path='/' component={Home}></Route>

            <Route exact="exact" path='/board/seoul-cctv' component={SeoulCCTV}></Route>
            <Route exact="exact" path='/counter/counter' component={Counter}></Route>
            <Route exact path='/counter/redux-counter' component={CounterContainer}></Route>
            <Route exact path='/counter/slice-container' component={CounterSliceContainer}></Route>
            <Route exact="exact" path="/board/news" component={NewsBoard}></Route>
            <Route exact="exact" path='/article/article-detail' component={ArticleDetail}></Route>
            <Route exact="exact" path='/article/article-list' component={ArticleList}></Route>
            <Route exact="exact" path='/article/article-update' component={ArticleUpdate}></Route>
            <Route exact="exact" path='/article/article-write' component={ArticleWrite}></Route>

            {/* <Route exact="exact" path='/user/login-form' component={LoginForm}></Route>
            <Route exact="exact" path='/user/sign-up' component={SignUp}></Route>
            <Route exact="exact" path='/user/user-detail' component={UserDetail}></Route> */}

            <Route exact path='/users/user-login' component={UserLogin}></Route>
            <Route exact path='/users/user-register' component={UserRegister}></Route>
            <Route exact path='/users/user-list' component={UserList}></Route>

            <Route exact path='/qbs/qna-register' component={QnaRegister}></Route>
            <Route exact path='/qbsr/qna-list' component={QnaList}></Route>


            <Route exact path='/todos/add-todo' component={AddTodo}></Route>
            <Route exact path='/todos/todo-app' component={TodoApp}></Route>
            <Route exact path='/todos/to-dos' component={Todos}></Route>
 
            

            <Route exact="exact" path='/common/body' component={Body}></Route>
            <Route exact="exact" path='/common/footer' component={Footer}></Route>
            <Route exact="exact" path='/common/head' component={Head}></Route>
        
        </div>
    );
}

export default App;
