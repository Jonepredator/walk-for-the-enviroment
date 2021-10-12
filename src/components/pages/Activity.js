import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import styled from 'styled-components';
import Bg_img from '../assets/vectorfeet.svg';
import { IoIosArrowUp } from 'react-icons/io';
import { ImCross } from 'react-icons/im';

const InfoWrapper = styled.div`
   background-color: #251821;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 90vh;
   overflow: hidden;
   overflow-y: scroll;
   z-index: 1;
`;

const ImageContainer = styled.div`
   display: flex;
   position: fixed;
   justify-content: center;
   bottom: 10vh;
   width: 100%;
   z-index: 1;
   img {
      width: 700px;
      padding: 5rem;
   }
`;

const Container = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   z-index: 2;
`;

const PageDisplay = styled.div`
   display: flex;
   left: 5.33%;
   right: 57.33%;
   margin: 100px 0 0 20px;
   background-image: linear-gradient(to right, #ff1ab3, #c1298f, #882a6a, #542345, #251821);
   border-radius: 50px 0 0 50px;
   box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
   h2 {
      padding-left: 1rem;
      color: #FFF;
      font-weight: 500;
      font-size: 2rem;
   }
`;

const BoxContainer = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const StepContainer = styled.div`
   width: 340px;
   height: 120px;
   margin-top: 1.6rem;
   padding: 1.25rem;
   background: rgba(129, 210, 239, 0.90);
   box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 30px;
`;

const TopText = styled.div`
   background-color: transparent;
   display: flex;
   justify-content: space-between;
   span {
      background-color: transparent;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
   }
`;

const MidText = styled.div`
   margin-top: 5px;
   background-color: transparent;
   display: flex;
   align-items: center;
   h2 {
      background-color: transparent;
      color: #fff;
      font-weight: 500;
      font-size: 1.9rem;
      line-height: 1.9rem;
   }
   span {
      display: flex;
      margin-left: 10px;
      background-color: transparent;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
   }
`;

const WrapperResultButton = styled.div`
   height: 100%;
   display: flex;
   align-items: flex-end;
`;

const ResultButtonContainer = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #3F3D56;
   cursor: pointer;
   bottom: 10vh;
   border-radius: 110px 110px 0 0;
   width: 340px;
   height: 70px;
   span {
      color: #FFF;
      padding-bottom: .5rem;
      font-size: 1.1rem;
      font-weight: 500;
      letter-spacing: .1rem;
   }
`;

const ArrowUpIcon = styled(IoIosArrowUp)`
   color: #FFF;
   width: 2.9rem;
   height: 2.9rem;
   /* border: 1px solid red; */
`;

const ResultPopupWrapper = styled.div`
   display: ${({ openResult }) => openResult ? 'flex' : 'none'};
   position: fixed;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   z-index: 999;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.4);
`;
const ResultPopupContainer = styled.div`
   width: 315px;
   height: 500px;
   padding: 25px 25px 56px 30px;
   border: 1rem solid #3E2837;
   display: flex;
   flex-direction: column;
   text-align: center;
   background: #81D2EF;
   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.9);
   border-radius: 55px;
   h3 {
      color: #FFF;
      background-color: transparent;
      font-size: 1.9rem;
      font-weight: 400;
   }
   span {
      color: #FFF;
      margin-top: 25px;
      background-color: transparent;
      font-weight: 500;
      font-size: .9rem;
      letter-spacing: 0.01em;
   }
   p {
      color: #FFF;
      margin-top: 1.5rem;
      background-color: transparent;
      font-weight: 400;
      font-size: 2.4rem;
      letter-spacing: 0.01em;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   }
`;

const CloseIconWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 2rem;
   width: 100%;
`;

const CloseIcon = styled(ImCross)`
   background: transparent;
   right: 25px;
   top: 25px;
   cursor: pointer;
`;

const Activity = () => {

   const [openResult, setOpenResult] = useState(false);
   const handleCloseResult = () => {
      setOpenResult(!openResult);
   };

   return (
      <>
         <InfoWrapper>

            <ImageContainer>
               <img src={Bg_img} alt='feet' />
            </ImageContainer>

            <ResultPopupWrapper openResult={openResult} >
               <ResultPopupContainer>
                  <CloseIconWrapper>
                     <CloseIcon onClick={handleCloseResult} />
                  </CloseIconWrapper>
                  <h3>Resultat</h3>
                  <p>24 943 steg</p>
                  <span>Detta resulterar i
                     24 poäng
                     och </span>
                  <p style={{ fontSize: '3.4rem', color: '#FF7BCA', }}>24 kr</p>
                  <span>Att donera till din valda organisation</span>
               </ResultPopupContainer>
            </ResultPopupWrapper>

            <Container>
               <PageDisplay>
                  <h2>Din Aktivitet</h2>
               </PageDisplay>

               <BoxContainer>
                  <StepContainer>
                     <TopText>
                        <span>Idag</span>
                        <span>8 poäng</span>
                     </TopText>
                     <MidText>
                        <h2>8354</h2>
                        <span>steg</span>
                     </MidText>
                     <ProgressBar width={300} percent={0.8354} />
                  </StepContainer>
               </BoxContainer>

               <BoxContainer>
                  <StepContainer>
                     <TopText>
                        <span>Igår</span>
                        <span>6 poäng</span>
                     </TopText>
                     <MidText>
                        <h2>6589</h2>
                        <span>steg</span>
                     </MidText>
                     <ProgressBar width={300} percent={0.6589} />
                  </StepContainer>
               </BoxContainer>

               <BoxContainer>
                  <StepContainer>
                     <TopText>
                        <span>3 Sep</span>
                        <span>10 poäng</span>
                     </TopText>
                     <MidText>
                        <h2>10000</h2>
                        <span>steg</span>
                     </MidText>
                     <ProgressBar width={300} percent={1} />
                  </StepContainer>
               </BoxContainer>

               <WrapperResultButton>
                  <ResultButtonContainer openResult={openResult} onClick={() => setOpenResult(!openResult)}>
                     <ArrowUpIcon />
                     <span>SAMLAT RESULTAT</span>
                  </ResultButtonContainer>
               </WrapperResultButton>
            </Container>

         </InfoWrapper>
      </>
   );
};

export default Activity;
