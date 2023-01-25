import styled from "styled-components";

interface GlobalProps {
  seconds?: boolean;
}

export const Container = styled.div<GlobalProps>`
  width: ${props => props.seconds ? '50px' : '170px'};
  height: ${props => props.seconds ? '80px' : '300px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const TopCard = styled.div<GlobalProps>`
  width: ${props => props.seconds ? '50px' : '170px'};
  height: ${props => props.seconds ? '40px' : '150px'};
  border-bottom: 2px solid black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #222;
  background-image: linear-gradient(to bottom, #222222, #333333);
  color: #ffffff;
`;

export const BottomCard = styled.div<GlobalProps>`
  width: ${props => props.seconds ? '50px' : '170px'};
  height: ${props => props.seconds ? '40px' : '150px'};
  border-bottom: 1px solid black;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #222;
  background-image: linear-gradient(to bottom, #222222, #111111);
  color: #ffffff;
`;

export const CardNumber = styled.span<GlobalProps>`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: ${props => props.seconds ? '50px' : '250px'};
  color: #fff;
  position: absolute;
  line-height: 100%;
`;

export const Line = styled.div<GlobalProps>`
  width: ${props => props.seconds ? '50px' : '170px'};
  height: ${props => props.seconds ? '40px' : '150px'};
  border-top: 3px solid black;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
`;
