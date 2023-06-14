// import React, { useState } from 'react';
import styled from 'styled-components';
import profileImg from '../../assets/img/profile-img.png';
import iconChat from '../../assets/icons/chat.png';
import iconShare from '../../assets/icons/share.png';
import Button from '../Common/Button';

export default function MainProfile() {
  return (
    <SProfileLayout>
      <SProfileImgBox>
        <SFollowLink to="/followers">
          <strong>followerCount</strong>
          <p>followers</p>
        </SFollowLink>
        <img src={profileImg} alt="" />
        <SFollowLink to="/followings">
          <strong>followingCount</strong>
          <p>followings</p>
        </SFollowLink>
      </SProfileImgBox>

      <SProfileInfo>
        <strong>username</strong>
        <p>accountname</p>
        <p>intro</p>
      </SProfileInfo>

      <SBtnBox>
        <SChatBtn />
        <Button width="120px">isfollow</Button>
        <SShareBtn />
      </SBtnBox>
    </SProfileLayout>
  );
}

const SProfileLayout = styled.section`
  box-shadow: inset 0 0 20px red;
  background-color: var(--black);
  padding: 30px 0 26px;
  font-family: var(--default-font);
`;

const SProfileImgBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 41px;
  align-items: center;
  box-shadow: inset 0 0 20px red;

  img {
    width: 110px;
  }
`;

const SFollowLink = styled.div`
  text-align: center;

  strong {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: var(--white);
  }

  p {
    margin-top: 6px;
    font-weight: 400;
    font-size: 10px;
    color: var(--gray);
  }
`;

const SProfileInfo = styled.div`
  text-align: center;
  margin: 16px 0 24px;

  strong {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 6px;
    color: var(--white);
  }

  p {
    margin: 5px 0 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: var(--darkgray);
  }

  p:last-child {
    font-size: 14px;
    line-height: 19px;
    color: var(--gray);
  }
`;

const SBtnBox = styled.div`
  box-shadow: inset 0 0 20px red;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

const SChatBtn = styled.button`
  background: url(${iconChat}) no-repeat center/ 15px 15px;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border-gray);
  border-radius: 50%;
`;

const SShareBtn = styled(SChatBtn)`
  background: url(${iconShare}) no-repeat center/ 20px 20px;
`;
