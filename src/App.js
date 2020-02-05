import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
				<div className="container">
					<div className="header__inner">
						<div className="logo">
							<a href="#s" className="logo__link"><img className="logo__img" src="https://image.flaticon.com/icons/svg/1420/1420337.svg" alt=""/></a>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="main">
					<aside className="sidebar app__sidebar">
						<nav>
							<ul className="nav-profile">
								<li><a href="#s" className="nav-profile__link">Profile</a></li>
								<li><a href="#s" className="nav-profile__link">Messages</a></li>
								<li><a href="#s" className="nav-profile__link">News</a></li>
								<li><a href="#s" className="nav-profile__link">Music</a></li>
								<li><a href="#s" className="nav-profile__link">Settings</a></li>
							</ul>
						</nav>
					</aside>
					<div className="profile">
						<div className="profile__header profile-header">
							<img src="https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_960_720.jpg" alt=""/>
						</div>
						<div className="profile-body">
							<div className="avatar">
								<img src="" alt="" className="avatar__img"/>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
