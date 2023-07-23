import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Avatar.css';
import avatarimage from '../assets/avatar.png';

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarimage} alt="avatar" className={avatarClass} />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
