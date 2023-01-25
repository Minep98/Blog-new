import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: linear-gradient(
        179.77deg,
        #6b6b6b 36.45%,
        rgba(163, 163, 163, 0.622265) 63.98%,
        rgba(255, 255, 255, 0) 99.8%
      );
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      
    }
    &-category {
     
    }
   
    &-title {
      font-weight: bold;
      line-height: 1.5;
      display: block;
      font-size: 22px;
      color: white;
    }
    &-feature{
      background: #3d3d3d;
      -webkit-animation: my 700ms infinite;
      -moz-animation: my 700ms infinite; 
      -o-animation: my 700ms infinite; 
      animation: my 700ms infinite;
      @-webkit-keyframes my {
      0% { color: #F8CD0A; } 
      50% { color: #fff;  } 
      100% { color: #F8CD0A;  } 
    }
    @-moz-keyframes my { 
      0% { color: #F8CD0A;  } 
      50% { color: #fff;  }
      100% { color: #F8CD0A;  } 
    }
    @-o-keyframes my { 
      0% { color: #F8CD0A; } 
      50% { color: #fff; } 
      100% { color: #F8CD0A;  } 
    }
    @keyframes my { 
      0% { color: #F8CD0A;  } 
      50% { color: #fff;  }
      100% { color: #F8CD0A;  } 
    } 
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
`;
const PostFeatureItem = () => {
  return (
    <PostFeatureItemStyles>
      <PostImage
        url="/Girl.png"
        alt="unsplash"
        > 
      </PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <PostCategory className="post-feature">Featured </PostCategory>
          <PostMeta></PostMeta>
        </div>
        <PostTitle >
          Game Instructions and Tips Nobody The Turnarou 
        </PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
