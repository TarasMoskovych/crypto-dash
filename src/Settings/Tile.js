import styled from 'styled-components';

import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from './../Shared/Styles';

export const Tile = styled.div`
  ${lightBlueBackground}
  ${subtleBoxShadow}
  padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
