import React from 'react';
import { Link } from 'react-router-dom'
import 'features/common/style/Navi.scss'

export default function Navigation() {

  return (
    <div class="gnb">
      <div>
      <ul>
        <li><Link to="/home"><span>Home</span></Link></li>
        <li><Link to="/users/login"><span>로그인</span></Link></li>
        <li><Link to="/users/join" ><span>회원가입</span></Link></li>
        <li><Link to="/diary/diary" ><span>다이어리</span></Link></li>
        <li><Link to="/review/review"><span>리뷰</span></Link></li>
        <li><Link to="/history/history"><span>히스토리</span></Link></li>
        <li><Link to="/todo/about" ><span>추천</span></Link></li>
        <li><Link to="/task/task" ><span>할일 목록</span></Link></li>
        <li><Link to="/calendar/calendar" ><span>달력</span></Link></li>
        <li><Link to="/admin/adminLogin" ><span>admin</span></Link></li>
      </ul>
      </div>
    </div>
  );
}