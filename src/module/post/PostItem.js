import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      border-radius: 16px;
    }
    
    &-title {
      font-weight: bold;
      line-height: 1.5;
      display: block;
      font-size: 18px;
      margin-bottom: 8px;
    }
    &-category{
      margin-bottom: 10px;
    }
  }
`;

const PostItem = () => {
  return (
    <PostItemStyles>
      <PostImage url="/valley.png"
          alt=""></PostImage>
      
      <PostCategory className='post-category'>New</PostCategory>
      <PostTitle>
      Game Instructions and Tips Nobody The Turnarou 
      </PostTitle>
     <PostMeta></PostMeta>
    </PostItemStyles>
  );
};

export default PostItem;
