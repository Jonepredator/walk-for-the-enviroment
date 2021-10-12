import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Bg_img from '../assets/bg_darkmode.svg';
import Leaf from '../assets/leaf.svg';

const Test = styled.div`
   position: fixed;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   z-index: 999;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
`;

const Wrapper = styled.div`
   display: flex;
   margin: 0 auto;
   background-color: #251821;
   flex-direction: column;
   align-self: center;
   align-items: center;
   max-width: 768px;
   height: 100vh;
   z-index: 200;
`;

const Header = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2vh;
   h1 {
      font-style: normal;
      font-weight: 200;
      font-size: 3.2rem;
      line-height: 75px;
      color: #fff;
   }
   img{
      align-items: flex-end;
      height: 80px;
      width: 80px;
      position: relative;
      right: -265px;
      bottom: -40px;
   }
`;

const BgWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   img {
      width: 700px;
   }
`;

const Button = styled(NavLink)`
   display: flex;
   margin-top: 2rem;
   width: 240px;
   height: 53px;
   background: linear-gradient(180deg, #92C8FA 0%, #358CAB 100%);
   box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.4);
   border-radius: 25px;
   text-decoration: none;
      span {
         color: #F8F3F6;
         margin: auto;
         font-style: normal;
         font-weight: bold;
         font-size: 24px;
         line-height: 36px;
         letter-spacing: 0.06em;
      }
`;

const Welcome = () => {
   return (
      <Test>
         <Wrapper>
            <Header>
               <img src={Leaf} alt="leaf" />
               <h1>Gå för miljön</h1>
            </Header>

            <BgWrapper>
               <img src={Bg_img} alt='background_trees' />
            </BgWrapper>

            <Button to='/home'>
               <span>GÅ MED</span>
            </Button>

         </Wrapper>
      </Test>
   );
};

export default Welcome;
