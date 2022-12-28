import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Create.css';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import useGeolocation from '../hooks/useGeolocation.ts';

const Create = () => {
  const { naver } = window;
  const naverLocation = useGeolocation();
  const stars = [1, 2, 3, 4, 5];
  const [starColor, setStarColor] = useState('grey');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [currentStar, setCurrentStar] = useState(0);
  const [imgFile, setImgFile] = useState('');
  const [location, setLocation] = useState([]);
  const imgRef = useRef();

  // useEffect(() => {
  //   naver.maps.Service.reverseGeocode(
  //     {
  //       location: new naver.maps.LatLng(
  //         // lat === undefined ? 37.3849483 : lat2,
  //         // lng === undefined ? 127.1229117 : lng2
  //         37.3849483,
  //         127.1229117
  //       ),
  //     },
  //     function (status, response) {
  //       if (status !== naver.maps.Service.Status.OK) {
  //         return alert('Something Wrong!');
  //       }

  //       const result = response.result;
  //       setLocation(result.items[0].address);
  //     }
  //   );
  // }, []);

  const starClick = (e) => {
    setCurrentStar(e);
    // setStarColor('yellow');
    console.log(e);
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  //위치 등록 버튼
  const onLocationButton = () => {
    naver.maps.Service.reverseGeocode(
      {
        location: new naver.maps.LatLng(
          // lat === undefined ? 37.3849483 : lat2,
          // lng === undefined ? 127.1229117 : lng2
          naverLocation.coordinates.lat.toFixed(4),
          naverLocation.coordinates.lng.toFixed(4)
        ),
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something Wrong!');
        }

        const result = response.result;
        setLocation(result.items[0].address);
      }
    );
  };

  //저장 버튼 클릭 이벤트
  const onCreateButton = () => {
    //제목, 내용, 점수를 입력 안했으면 생성 불가능
  };

  return (
    <div className="createComponent">
      <div className="createDelecious">맛집 기록</div>
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
                  fill={star <= currentStar ? '#FFD400' : 'grey'}
                />
              </svg>
            </span>
          ))}
        </div>
        <div className="createLocation">
          <button className="createLocationButton" onClick={onLocationButton}>
            위치등록
          </button>
          <div className="createLocationText">
            {location.length === 0 ? '등록된 위치 없음' : location}
          </div>
        </div>
        <div className="createInput">
          <label className="createLabelInput" for="createFileImg">
            이미지첨부
          </label>
          <input
            onChange={saveImgFile}
            ref={imgRef}
            type="file"
            id="createFileImg"
            style={{ display: 'none' }}
          />
          <img className="createImg" src={imgFile ?? imgFile} />
        </div>
        <div className="createBottom">
          <Link to="/home">
            <button className="createCancelButton">취소</button>
          </Link>
          <button className="createSaveButton">저장</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
