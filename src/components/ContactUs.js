import React from 'react';

const ContactUs = (props) => {
  return (
    <div className="contactus">
      <div className="contactus-text-wrap">
        <div className="contactus-address">
          <div className="description-hover description">
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
            왼손잡이들은 최소한의 인원으로 일상 속의 문제들을 저희들만의
            방법으로 풀어나가는 팀입니다.
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
          왼손잡이들
          <br />
          서울특별시 강남구 논현로 87길 41,321호
        </div>
        <div className="contactus-email">leftecommerce@gmail.com</div>
      </div>
    </div>
  );
};

export default ContactUs;
