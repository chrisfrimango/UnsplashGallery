import styled from "styled-components";
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export const Container = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Header;
