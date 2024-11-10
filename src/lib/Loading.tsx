import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => (height ? height : "auto")};
`;

type ILoadingProps = {
  height?: string;
};

const Loading: React.FC<ILoadingProps> = ({ height }) => (
  <Container height={height}>
    <CircularProgress color="secondary" />
  </Container>
);

type IContainerProps = {
  height?: string;
};

export default Loading;
