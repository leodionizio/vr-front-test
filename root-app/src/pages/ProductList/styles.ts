import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px; 
  justify-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
