import styled , {createGlobalStyle} from 'styled-components';
import fonti from './EuclidCircularB-Medium.ttf';
const GlobalStyle = createGlobalStyle`
  * {
     box-sizing: border-box;
     padding: 0px;
     margin: 0px;
     @font-face {
      font-family: 'Euclid';
      src: url(${fonti}) format('truetype');
      font-weight: 500;
      font-style: normal;
   }
   font-family: 'Euclid';
  }
`;

export const Container = styled.div`
   z-index: 1;
   width: 100%;
   margin-right: auto;
   margin-left: auto;
   padding-left: 25px;
   padding-right: 25px;
   @media screen and (max-width: 768px){
    justify-content: center;
    align-items: center;
   }
`;

export const Button = styled.button`
   border-radius: 100px;
   /* background: linear-gradient(to right, #3432AD, #5274D8); */
   padding: ${({ big }) => big ? '10px 64px' : '10px 20px'};
   font-size: ${({ fontbig }) => fontbig ? '20px' : '16px'};
   white-space: nowrap;
   outline: none;
   border: none;
   cursor: pointer;
   color: ${({fontColor}) => fontColor};
   background: ${({color}) => color};
   margin-right: 20px;

   margin-left: 10px;
   margin-top: ${({marginTop}) => marginTop};
   &:hover{
      transition: all 0.3s ease-in;
      color: #fff;
      background: #2F404B;
      /* background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')}; */
   }

   @media screen and (max-width: 850px){
      width: 60%;
      margin-bottom: 30px;
   }
`;

export default GlobalStyle;