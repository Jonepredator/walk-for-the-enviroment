import React from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import { MdNaturePeople } from 'react-icons/md';
import Bg_img from '../assets/bg_darkmode.svg';
import styled from 'styled-components';
import Leaf from '../assets/leaf.svg';

const Wrapper = styled.div`
   background-color: #251821;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 90vh;
   overflow-y: none;
`;

const Header = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2vh;
   h1 {
      color: #FFF;
      font-style: normal;
      font-weight: 200;
      font-size: 3.2rem;
   }
   img {
      align-items: flex-end;
      height: 80px;
      width: 80px;
      position: relative;
      right: -265px;
      bottom: -40px;
   }
`;

const InfoDisplay = styled.div`
   margin-top: 1.5rem;
   width: 322px;
   height: 340px;
   background: rgba(129, 210, 239, 0.90);
   box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 50px;
   padding: 1.25rem;
   z-index: 200;
   h2 {
      background-color: transparent;
      color: #FFF;
      margin-top: 1.25rem;
      font-style: normal;
      font-weight: bold;
      font-size: 2.25rem;
   }
   span {
      background-color: transparent;
      color: #FFF;
      font-size: 1.5rem;
      font-weight: 500;
   }
`;

const DonationSection = styled.section`
   display: flex;
   align-items: center;
   margin-top: .5rem;
   background: transparent;
   z-index: 10;
   p {
      background: transparent;
      font-size: 2.25rem;
      font-weight: 500;
      color: #FFF;
   }
`;
const DonationIcon = styled(BiDonateHeart)`
   background: transparent;
   color: #FF1AB3;
   margin-right: 1rem;
   width: 2.5rem;
   height: 2.5rem;
`;

const EmissionSection = styled.section`
   display: flex;
   align-items: center;
   margin-top: .5rem;
   background: transparent;
   p {
      background: transparent;
      font-size: 2.25rem;
      font-weight: 500;
      color: #FFF;
   }
`;
const EmissionIcon = styled(MdNaturePeople)`
   background: transparent;
   color: #FF1AB3;
   margin-right: 1rem;
   width: 2.5rem;
   height: 2.5rem;
`;

const BgWrapper = styled.div`
   display: flex;
   position: relative;
   justify-content: center;
   bottom: 20vh;
   width: 100%;
   z-index: 1;
   img {
      width: 700px;
      z-index: 1;
   }
`;



const ThankU = () => {
   return (
      <Wrapper>
         <Header>
            <img src={Leaf} alt="leaf" />
            <h1>Gå för miljön</h1>
         </Header>

         <InfoDisplay>
            <h2>Tack!</h2>
            <span>Alla hjältar bär inte<br />mantel.</span>
            <DonationSection>
               <DonationIcon />
               <p>: 24kr</p>
            </DonationSection>
            <EmissionSection>
               <EmissionIcon />
               <p>: -4kg CO2</p>
            </EmissionSection>
         </InfoDisplay>

         <BgWrapper>
            <img src={Bg_img} alt='background_trees' />
         </BgWrapper>

      </Wrapper>
   );
};

export default ThankU;
