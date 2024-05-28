import styled from '@emotion/styled';

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  /* background-color: blue; */
  height: 72px;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  height: 54px;
  border: ${props =>
    props.fieldValid ? '1px solid #07a107' : '1px solid rgba(18, 20, 23, 0.2)'};
  border-radius: 12px;
  padding: 16px 18px 16px 18px;

  &:focus {
    border: ${props =>
      props.fieldValid ? '1px solid #07a107' : '1px solid var(--primary)'};
  }
  /* &:activ {
    border: '2px solid #036303';
  }
*/
  /* &:hover {
    border: 1px solid rgba(14, 15, 15, 0.3);
  } */
`;

export const InfoInput = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  text-align: center;
`;

export const IconBox = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
`;
