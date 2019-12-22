import styled from 'styled-components';

import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from './Styles';

export const Tile = styled.div`
  ${lightBlueBackground}
  ${subtleBoxShadow}
  padding: 10px;
  text-align: center;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
  cursor: not-allowed;
  opacity: .4;
  pointer-events: none;
`;
