import styled from "styled-components";

interface ContainerProps {
  color: "primary" | "secondary";
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.color === "primary" ? "#000000" : "#f6f6f6"};
  display: flex;
  align-items: center;
  justify-content: center;
`;
