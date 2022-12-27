import React from 'react';
import { useState } from 'react';
import './Create.css';

const Create = () => {
  const stars = [1, 2, 3, 4, 5];
  const [starColor, setStarColor] = useState('grey');
  const [currentStar, setCurrentStar] = useState(0);
  const starClick = (e) => {
    setCurrentStar(e);
    // setStarColor('yellow');
    console.log(e);
  };

  return (
    <div className="createComponent">
      <div className="createDelecious">맛집 기록페이지</div>
      <div className="createBody">
        <div className="createBodyHeader">
          <span className="titleHeader">제목</span>
          <input type="text" />
        </div>
        <textarea
          type="textarea"
          className="createContent"
          placeholder="내용을 입력해주세요"
        ></textarea>
        <div className="createStars">
          <div className="startTitle">점수</div>
          {stars.map((star, idx) => (
            <span
              className="star_icon"
              key={idx}
              id={star}
              onClick={() => {
                starClick(star);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="39"
                viewBox="0 0 14 13"
              >
                <path
                  id="star"
                  d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                  transform="translate(-2 -2)"
                  fill={star <= currentStar ? 'yellow' : 'grey'}
                />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Create;
