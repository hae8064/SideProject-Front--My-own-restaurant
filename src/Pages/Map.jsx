import React from 'react';
import { useEffect } from 'react';
import { Inner } from './styles';

const Map = () => {
  // 처음 렌더링시 서버로 API 요청
  useEffect(() => {}, []);
  return (
    <Inner>
      <div className="Title">주변 맛집 리스트</div>
    </Inner>
  );
};

export default Map;
