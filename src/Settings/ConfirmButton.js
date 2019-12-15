import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';
import { fontSize1, greenBoxShadow, color3 } from './../Shared/Styles';

const ConfirmButton = styled.div`
  color: ${color3};
  ${fontSize1}
  cursor: pointer;
  margin: 20px;
  padding: 5px;
    &:hover {
      ${greenBoxShadow}
    }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) =>
        <CenterDiv>
          <ConfirmButton onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButton>
        </CenterDiv>
      }
    </AppContext.Consumer>
  );
}
