import React from "react";
import styled from "styled-components";

const TitleH4 = styled.h4`
  text-transform: capitalize;
  text-align: center;
  color: #f0ecef;
`;

type IErrorProps = {
  message: string;
};

const Error: React.FC<IErrorProps> = ({ message }) => (
  <TitleH4>{message}</TitleH4>
);

export default Error;
