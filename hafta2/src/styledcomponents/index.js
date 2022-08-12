import Styled from 'styled-components';

const UsernameDiv = Styled.div`
   box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 50px;
  /* border: 1px solid rgb(255, 0, 0); */
  /* margin: 5px; */
  margin-bottom: 5px;
  padding: 10px;
`;

const PasswordDiv = Styled.div`
box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 50px;
  /* border: 1px solid rgb(70, 16, 219); */
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 5px;
`;

const SubmitButton = Styled.div`
 box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 50px;
  /* border: 1px solid rgba(185, 20, 89, 0.123); */
  margin: 0 auto;
  padding: 10px;
  text-align: center;

`;
export { SubmitButton, UsernameDiv, PasswordDiv };
