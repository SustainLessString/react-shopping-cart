import styled from "@emotion/styled";

// MUI
import { IconButton } from "@mui/material";

export const Wrapper = styled.div`
  background-color: light;
  /* margin: 40px; */
  /* display: flex; */
  /* align-items: flex-end; */
`;

export const StyledButton = styled(IconButton)`
  margin: 0 auto;
  text-anchor: end;
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
