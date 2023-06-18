import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { extractString } from '../Components/Feed/extractString';
import iconHeart from '../assets/icons/heart.svg';
import iconFillHeart from '../assets/icons/fill-heart.svg';
import iconComment from '../assets/icons/chat-green.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import MainHeader from '../Components/Common/MainHeader';
import Comment from '../Components/Feed/Comment';
import BottomNav from '../Components/Common/BottomNav';
import {
  STitle,
  SContent,
  SUserName,
  SAccountname,
  SAuthor,
  SProfileImg,
  STitleContainer,
  SAuthorInfo,
  SHeartImg,
  SReactionContainer,
  SReactionContent,
  SReactionCount,
  SDetailFeedCard,
  SPostImage,
} from '../Styles/FeedStyle/PostStyle';
import WriteComment from '../Components/Feed/WriteComment';
import { APIDefaultImage, profileImg } from '../Components/Feed/COMMON';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { setToken, isfeedFetchToggle, isConfigModal } from '../Atom/atom';
import CommonModal from '../Components/Common/CommonModal';
import useFetchComment from '../Components/Feed/useFetchComment';
const FeedDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const feedList = location.state.item;
  const title = location.state.title;
  const content = location.state.content;

  const [commentList, setCommentList] = useState({});
  const [isFetchData, setIsFetchData] = useState(false);
  const [reactionCount, setReactionCount] = useState();

  const isToken = useRecoilValue(setToken);

  const isModalState = useRecoilValue(isConfigModal);

  const { postHeart } = useFetchComment({ postID: feedList.id });

  function goProfile(item) {
    navigate('/myprofile', { state: item });
  }
  return (
    <>
      <MainHeader type="profile" />
      <SDetailFeedCard>
        <SAuthor>
          {feedList.author.image === APIDefaultImage ? (
            <SProfileImg src={profileImg} alt="프사" onClick={() => goProfile(feedList.author)} />
          ) : (
            <SProfileImg src={feedList.author.image} alt="프사" onClick={() => goProfile(feedList.author)} />
          )}
          <STitleContainer>
            <STitle>{title}</STitle>
            <SAuthorInfo>
              <SUserName>{feedList.author.username}</SUserName>
              <SAccountname>@{feedList.author.accountname}</SAccountname>
            </SAuthorInfo>
          </STitleContainer>
        </SAuthor>
        <div>
          <SContent>{content}</SContent>
          {!feedList.image ? null : <SPostImage src={feedList.image} alt="feed" />}
        </div>
        <SReactionContainer>
          <SReactionContent>
            <SReactionCount>
              {reactionCount?.post.hearted ? (
                <SHeartImg
                  src={iconFillHeart}
                  alt="하트"
                  onClick={() => postHeart(reactionCount?.post.hearted, setReactionCount)}
                />
              ) : (
                <SHeartImg
                  src={iconHeart}
                  alt="하트"
                  onClick={() => postHeart(reactionCount?.post.hearted, setReactionCount)}
                />
              )}
              {reactionCount?.post.heartCount}
            </SReactionCount>
            <SReactionCount>
              <SHeartImg src={iconComment} alt="댓글" />
              {reactionCount?.post.comments.length}
            </SReactionCount>
          </SReactionContent>

          <SAccountname>{feedList.createdAt.slice(0, 10)}</SAccountname>
        </SReactionContainer>
      </SDetailFeedCard>

      <Comment
        feedList={feedList}
        commentList={commentList}
        setCommentList={setCommentList}
        isFetchData={isFetchData}
        setIsFetchData={setIsFetchData}
      />
      <WriteComment
        feedList={feedList}
        commentList={commentList}
        setCommentList={setCommentList}
        isFetchData={isFetchData}
        setIsFetchData={setIsFetchData}
        setReactionCount={setReactionCount}
      />
      {isModalState ? <CommonModal /> : <></>}
    </>
  );
};
// username={feedList.author.username} feedId={feedList.id} comments={feedList.comments}
export default FeedDetailPage;
