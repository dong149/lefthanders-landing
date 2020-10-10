import React, { useState } from 'react';

const Profile = (props) => {
  const { content } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      className="profile"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="profile-text-wrap">
        <div className="profile-name">{content.name}</div>
        <div className="profile-position">{content.position}</div>
      </div>
      <div
        className="profile-content"
        style={{ backgroundImage: `url(${content.src})` }}
        alt={content.name}
      ></div>
      <div className={hover ? 'description-hover' : 'description'}>
        {content.description}
      </div>
    </div>
  );
};

export default Profile;