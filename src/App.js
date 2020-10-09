import React from 'react';
import ContactUs from './components/ContactUs';
import Divider from './components/Divider';
import Profile from './components/Profile';
import Videos from './components/Videos';
import './styles/styles.scss';
function App() {
  return (
    <div className="home">
      <div className="logo">
        <img
          className="logo-title"
          src="/lefthanders.png"
          alt="왼손잡이들 로고"
        />
        <span className="logo-since">since 2019</span>
      </div>
      <Divider title="services." />
      {contents.map((data, i) => {
        return <Videos content={data} key={i} />;
      })}
      <Divider title="members." />
      {profileContents.map((data, i) => {
        return <Profile content={data} key={i} />;
      })}
      <Divider title="contact us." />
      <ContactUs />
    </div>
  );
}
const contents = [
  {
    title: '롤링페이퍼',
    since: '2020.08',
    src: '/rollingpaper.mp4',
    type: 'video',
    description:
      '코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로,  ',
  },
  {
    title: '막차',
    since: '2019.10',
    src: '/makkcha.mp4',
    type: 'video',
    description:
      '코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로,  ',
  },
];

const profileContents = [
  {
    name: '류동훈',
    position: 'CEO',
    src: '/profile/seohyeon.jpeg',
    type: 'image',
    description:
      '코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로,  ',
  },
  {
    name: '류동훈',
    position: 'CEO',
    src: '/profile/seohyeon.jpeg',
    type: 'image',
    description:
      '코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로, 코로나 19를 맞아 새롭게 개발하게 된 서비스로,  ',
  },
];

export default App;
