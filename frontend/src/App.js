import React from 'react';
import {Home}from 'features/common';
import { CheckList, ForgotPassword, UserLogin, UserRegister} from 'features/user'
import {Route, Routes} from 'react-router-dom'; //21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>
import { Diary } from 'features/diary';
import { Review } from 'features/review';
import { History } from 'features/history';
import { About } from 'features/todo';
import { Calendar } from 'features/calendar';
import { AdminLogin, AdminPage } from 'features/admin';
import { AppTasks } from 'features/task';
import { QnA, QnaList } from 'features/qna';

//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.
//yarn add craco-alias @craco/craco


const App= () => {
  return (
    <div className="App">
        <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/home' element= {<Home/>}/>
              <Route path='/users/login' element={<UserLogin/>}/>
              <Route path='/users/removePwd' element={<ForgotPassword/>}/>
              <Route path='/users/join' element={<UserRegister/>}/>
              <Route path='/diary/diary' element={<Diary/>}/>
              <Route path='/review/review' element={<Review/>}/>
              <Route path='/history/history' element={<History/>}/>
              <Route path='/users/checkList' element={<CheckList/>}/>
              <Route path='/todo/about' element={<About/>}/>
              <Route path='/calendar/calendar' element={<Calendar/>}/>
              <Route path='/task/task' element={<AppTasks/>}/>
              <Route path='/admin/adminLogin' element={<AdminLogin/>}/>
              <Route path='/admin/admin' element={<AdminPage/>}/>
              <Route path='/qna/QnA' element={<QnA/>}/>
              <Route path='/qna/QnAList' element={<QnaList/>}/>
           
              
          </Routes>
          
    </div>
  );
}
      

export default App;