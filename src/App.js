import React, { useState } from 'react';
import ContactUs from './components/ContactUs';
import Divider from './components/Divider';
import Profile from './components/Profile';
import Services from './components/Services';
import './styles/styles.scss';
function App() {
  const [hover, setHover] = useState(false);
  return (
    <div className="home">
      <div
        className="logo"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img
          className="logo-title"
          src="/lefthanders.png"
          alt="왼손잡이들 로고"
        />
        <span className="logo-since">since 2019</span>
        <div className={hover ? 'description-hover' : 'description'}>
          안녕하세요
          <br />
          <br />
          {/* 왼손잡이는 전체 인구의 10%에 불과합니다.
          90%에 맞춰진 일상 속에서 왼손잡이들은 많은 불편함들을 마주합니다.

          저는 왼손잡이입니다. 남들은 느낄 수 없는 불편함들을 저는 자주 마주하곤 합니다.

          그런 불편함들을 통해 저는 일상 속에서 저희가 당연시 여기는 것들 속에 있는 많은 불편함들과
          가치들을 발견하게 되었습니다.

          저희는 '왼손잡이들'을 일상 속에서 새로운 가치를 발견하는 것을 사랑하는 사람들이라 정의합니다.
          
          저희와 함께  */}
          왼손잡이들은 최소한의 인원으로 일상 속의 문제들을 저희들만의 방법으로
          풀어나가는 팀입니다.
          <br />
          <br />
          왼손잡이들은 서비스를 진심으로 사랑하는 사람들이 모인 팀이며,
          사람들에게 좋은 서비스를 제공하는 것을 추구합니다.
          <br />
          <br />
          서비스를 진정으로 사랑하는 기획자, 개발자, 디자이너 분들의 참여를
          환영합니다.
          <div className="sign">
            <img className="sign-img" src="/류동훈.png" alt="류동훈 싸인" />
          </div>
        </div>
      </div>
      <Divider title="services." />
      {contents.map((data, i) => {
        return <Services content={data} key={i} />;
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
    title: 'deathnote.gg',
    since: '2021',
    src: '/deathnote_gg.png',
    type: 'image',
    description:
      'Type : 웹 서비스\n\nStatus : 프로토 타입\n\n현재 천천히 개발 진행중인 왼손잡이들의 새로운 야심작입니다. LOL을 굉장히 즐겨하는데, 그러던 와중 떠오른 아이디어로 프로토타입까지는 개발을 마친 상태입니다. \n\nLOL을 조금이라도 해보았던 사람은 정말 좋아할만한 서비스입니다.\n\n2021년 1월에 런칭을 목표로 하고 있습니다.',
  },
  {
    title: '롤링페이퍼',
    since: '2020.08',
    src: '/rollingpaper.mp4',
    type: 'video',
    description:
      'User : 약45만명\n\nType : 웹 서비스\n\nStatus : 베타 서비스\n\n어릴 적부터 간직해왔던 롤링페이퍼 온라인화의 꿈을 실현한 서비스입니다.\n\n롤링페이퍼는 현대 사회의 삭막함 속의 새로운 커뮤니케이션 도구로의 역할을 현재 수행중이고, 지속적으로 업데이트 중입니다.',
  },
  {
    title: '막차',
    since: '2019.10',
    src: '/makkcha.mp4',
    type: 'video',
    description:
      'User : 약5만명\n\nType : 앱 서비스\n\nStatus : 정식 서비스\n\n막차는 우리의 일상 속에서 빈번하게 등장하는 불편함입니다. \n그리고 그 불편함은 막차를 찾는 과정에서 존재하였습니다. \n\n빈번하게 존재하는 불편함이지만, 아직 제대로 해결되지 않은 이 문제를 저희만의 방식으로 풀어내고 싶었습니다.',
  },
];

const profileContents = [
  {
    name: '류동훈',
    position: 'Leader',
    src: '/profile/donghun.jpg',
    type: 'image',
    description: '작성 중입니다.',
  },
  {
    name: '공채원',
    position: 'Developer',
    src: '/profile/chaewon.jpeg',
    type: 'image',
    description:
      '저는 사람들이 하늘을 나는 것을 동경하고, 우주로 나아가는 것을 동경하고, 미지의 땅, 미지의 세계, 불가능한 꿈, 이런 것들을 동경하고 사랑했으면 좋겠습니다. 그래서 도전하고 또 도전하면서, 끊임없이 인간의 한계를 시험하고 인식의 지평을 넓혀갔으면 좋겠습니다.\n\n지금은 웹 엔지니어이지만, 스스로가 직업에 갇힐 필요는 없다고 생각합니다. 언젠가는 제 자신을 모험가나 탐험가로, 혹은 탐구자나 개척자로 소개하게 되었으면 합니다.',
  },
  {
    name: '차서현',
    position: 'Designer',
    src: '/profile/seohyeon.jpeg',
    type: 'image',
    description:
      '서비스를 기획하고 디자인하는 것에 관심이 많은 주니어 디자이너입니다. 새로운 것을 배우기 위해 끊임없이 도전하는 것을 즐겨해요 :)',
  },
  {
    name: '강성찬',
    position: 'Advisor',
    src: '/profile/seongchan.jpeg',
    type: 'image',
    description: '작성 중입니다.',
  },
];

export default App;
