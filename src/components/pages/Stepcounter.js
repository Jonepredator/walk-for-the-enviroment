import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { MdNaturePeople } from 'react-icons/md';
import { ImInfo } from 'react-icons/im';
import { RiFootprintFill } from 'react-icons/ri';
import { BiDonateHeart } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import SmallShoes from '../assets/small_shoes.svg';
import CountUp from 'react-countup/';
import Expo from '../Expo';

const StepCounter = ({ day, date, month }) => {

   const [openInfoBox, setOpenInfoBox] = useState(false);
   const [openEmission, setOpenEmission] = useState(false);

   const handleCloseInfo = () => {
      setOpenInfoBox(!openInfoBox);
   };

   const handleCloseEmission = () => {
      setOpenEmission(!openEmission);
   };

   return (
      <>
         <InfoWrapper>

            <InfoPopupWrapper openInfoBox={openInfoBox}>
               <InfoPopup>
                  <CloseIconWrapper>
                     <CloseInfoIcon onClick={handleCloseInfo} />
                  </CloseIconWrapper>
                  <h3>Hur fungerar<br />Gå För Miljön?</h3>
                  <br />
                  <span>Att välja att gå istället för många andra färdsätt så bevarar du naturen. Med denna app kan du hjälpa på flera sätt genom att även donera till organisationer utan att öppna plånboken alls.</span>
                  <StepInfo>
                     <StepIcon />
                     <span>För varje 1000 steg du tar ger dig 1 poäng som motsvarar 1 krona.  Max 20 000 steg per dag.</span>
                  </StepInfo>
                  <DonationInfo>
                     <DonationIcon />
                     <span>Du kan donera till tre olika  organstioner som främjar klimatet.
                     </span>
                  </DonationInfo>
               </InfoPopup>
            </InfoPopupWrapper>

            <EmissionPopupWrapper openEmission={openEmission} >
               <EmissionPopup>
                  <CloseIconWrapper>
                     <CloseInfoIcon onClick={handleCloseEmission} />
                  </CloseIconWrapper>
                  <h3>Vad du har gjort för<br />miljön idag?</h3>
                  <span>För att du har valt att gå istället för att ta bilen så har du minskat dina
                     utsläpp med:</span>
                  <p>1000 g CO2</p>
                  <span>vilket har resulterat i att du räddat </span>
                  <p>0.003 kvm</p>
                  <span>is ifrån att smälta.</span>
               </EmissionPopup>
            </EmissionPopupWrapper>

            <Container>
               <InfoIconWrapper >
                  <InfoPopupIcon openInfoBox={openInfoBox} onClick={() => setOpenInfoBox(!openInfoBox)} />
               </InfoIconWrapper>

               <PageDisplay>
                  <Expo />
                  <h2>{day}</h2>
                  <h2>{date}</h2>
                  <h2>{month}</h2>
               </PageDisplay>

               <StepCounterWrapper>
                  <StepCounterBox>
                     <RingOuter>
                        <img src={SmallShoes} alt='small-shoes' />

                        <CountUp
                           end={8354}
                           duration={5.5}
                           delay={.6}
                        />
                        <p>STEG</p>
                     </RingOuter>
                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="250px" height="250px">
                        <defs>
                           <linearGradient id="GradientColor" gradientTransform="rotate(45)">
                              <stop offset="50%" stopColor="#FF1AB3" />
                              <stop offset="100%" stopColor="#83C4FF" />
                           </linearGradient>
                        </defs>
                        <circle cx="125" cy="125" r="116.5" strokeLinecap="round" />
                     </svg>
                  </StepCounterBox>
               </StepCounterWrapper>

               <ButtonWrapper>
                  <PointsButton to='/activity' activeClassName='active'>
                     <PointsIcon />
                     <CountUp
                        end={8}
                        duration={3.1}
                        delay={.6}
                     />
                     <p>Poäng</p>
                  </PointsButton>
                  <InfoButton openEmission={openEmission} onClick={() => setOpenEmission(!openEmission)} >
                     <InfoIcon />
                     <span>Dina minskade<br />utsläpp</span>
                  </InfoButton>
               </ButtonWrapper>
            </Container>
         </InfoWrapper>
      </>
   );
};

export default StepCounter;

const InfoWrapper = styled.div`
   background-color: #251821;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 90vh;
   overflow: hidden;
   overflow-y: scroll;
`;

const Container = styled.section`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   /* border: 2px solid green; */
`;

const PageDisplay = styled.div`
   display: flex;
   margin: 14px 0 0 20px;
   background-image: linear-gradient(to right, #ff1ab3, #c1298f, #882a6a, #542345, #251821);
   border-radius: 50px 0 0 50px;
   box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);

`;

const StepCounterWrapper = styled.div`
   display: flex;
   margin-top: 4.5rem;
   justify-content: center;
   align-items: center;
   p{
      color: #81D2EF;
      font-size: 1.125rem;
      letter-spacing: .1rem;
   }
   span{
      font-weight: 500;
      font-size: 3.1rem;
   }
`;

const StepCounterBox = styled.div`
   width: 250px;
   height: 250px;
   color: #FFF;
   svg{
      position: relative;
      top: -250px;
   }
   circle{
      fill: none;
      stroke: url(#GradientColor);
      stroke-width: 17px;
      stroke-dasharray: 729;
      stroke-dashoffset: 729;
      animation: anim 5s alternate ease-in-out forwards;
      animation-delay: .6s;
   }
   @keyframes anim{
      100%{
         stroke-dashoffset: 120;
      }
   }
`;

const RingOuter = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   border-radius: 50%;
   border: 1.1rem solid #A79CA3;
`;

const ButtonWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
   justify-content: center;
   align-items: center;
   /* border: 2px solid black; */
`;

const PointsIcon = styled(FaCoins)`
   margin-left: .6rem;
   color: #FF1AB3;
   width: 1.56rem;
   height: 1.56rem;
`;

const InfoIcon = styled(MdNaturePeople)`
   margin-left: .6rem;
   color: #FF1AB3;
   width: 1.9rem;
   height: 1.9rem;
`;

const PointsButton = styled(NavLink)`
   display: flex;
   align-items: center;
   margin-bottom: 2rem;
   width: 172px;
   height: 55px;
   background: #EEEAED;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 2rem;
   text-decoration: none;
   p{
      color: #000;
      margin-left: 1rem;
      font-weight: normal;
      font-size: 1rem;
      letter-spacing: 0.06rem;
   }
   span {
      color: #000;
      margin-left: 1.8rem;
      font-weight: normal;
      font-size: 1rem;
      letter-spacing: 0.06rem;
   }
`;

const InfoButton = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 2rem;
   width: 172px;
   height: 55px;
   background: #EEEAED;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 2rem;
   text-decoration: none;
   list-style: none;
   cursor: pointer;
      span {
         color: #000;
         margin-right: 10px;
         background-color: transparent;
         font-weight: normal;
         font-size: 14px;
         line-height: 21px;
         letter-spacing: 0.05em;
   }
`;

const InfoIconWrapper = styled.div`
   background: transparent;
   display: flex;
   justify-content: flex-end;
   width: 100%;
   margin-top: 56px;
   padding-right: 25px;
`;

const InfoPopupIcon = styled(ImInfo)`
   background: transparent;
   width: 30px;
   height: 30px;
   cursor: pointer;
   color: #84c4ff;
`;

//popup wrapper styling
const InfoPopupWrapper = styled.div`
   display: ${({ openInfoBox }) => openInfoBox ? 'flex' : 'none'};
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

const CloseIconWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 2rem;
   width: 100%;
`;

const CloseInfoIcon = styled(ImCross)`
   background: transparent;
   right: 25px;
   top: 25px;
   cursor: pointer;
`;

const InfoPopup = styled.div`
   width: 315px;
   height: 500px;
   padding: 25px 25px 56px 30px;
   background: #D8D1D6;
   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.9);
   border-radius: 32px;
   h3 {
      background-color: transparent;
      font-size: 22px;
   }
   span {
      background-color: transparent;
      font-weight: 500;
      font-size: 12px;
   }
`;

const StepInfo = styled.div`
   background-color: transparent;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-top: 15px;
   span {
      margin-left: .5rem;
      font-size: 12px;
   }
`;

const StepIcon = styled(RiFootprintFill)`
   background-color: transparent;
   color: #FF1AB3;
   margin-right: 5px;
   padding: 2px;
   width: 110px;
   height: 45px;
   border: 1px solid #FF1AB3;
   border-radius: 50%;
`;

const DonationInfo = styled.div`
   background-color: transparent;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-top: 15px;
   span {
      margin-left: .5rem;
      font-size: 12px;
   }
`;

const DonationIcon = styled(BiDonateHeart)`
   background-color: transparent;
   color: #FF1AB3;
   margin-right: 5px;
   padding: 2px;
   width: 80px;
   height: 45px;
   border-radius: 50%;
   border: 1px solid #FF1AB3;
`;

//Emission popup
const EmissionPopupWrapper = styled.div`
   display: ${({ openEmission }) => openEmission ? 'flex' : 'none'};
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

const EmissionPopup = styled.div`
   width: 315px;
   height: 500px;
   padding: 25px 25px 56px 30px;
   display: flex;
   flex-direction: column;
   text-align: center;
   background: #D8D1D6;
   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.9);
   border-radius: 32px;
   h3 {
      background-color: transparent;
      font-size: 1.5rem;
      font-weight: 500;
   }
   span {
      margin-top: 1.5rem;
      background-color: transparent;
      font-weight: 500;
      font-size: 0.75rem;
   }
   p {
      margin-top: 1.5rem;
      background-color: transparent;
      font-weight: 500;
      font-size: 1.5rem;
   }
`;