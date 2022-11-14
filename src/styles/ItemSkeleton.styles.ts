import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  .button {
    border-radius: 0 0 20px 20px;
  }

  .img {
    height: 250px;
    border-radius: 20px 20px 0 0;
  }

  .div {
    padding: 1rem;
  }

  .P {
    overflow-y: auto;
    height: 5rem;
    margin-top: auto;
  }
`;
