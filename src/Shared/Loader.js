import React from 'react';
import Loader from 'react-loader-spinner'
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 10;

  ${props => props.global && css`
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
  `}
`;

export default function({ global }) {
  return (
    <Wrapper global={global}>
      <Loader
        type="Oval"
        color="#fff"
        height={100}
        width={100}
      />
    </Wrapper>
  );
}
