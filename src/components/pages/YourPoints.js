import React from 'react';
import { FaCoins } from 'react-icons/fa';
import GpLogo from '../assets/gp-logo.svg';
import NsfLogo from '../assets/nsf-logo.svg';
import WwfLogo from '../assets/wwf-logo.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const InfoWrapper = styled.div`
   background-color: #251821;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 90vh;
   overflow: hidden;
   overflow-y: scroll;
`;

const Container = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
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

const MoneyPointsBox = styled.div`
   display: flex;
   align-self: center;
   align-items: center;
   justify-content: space-around;
   margin-top: 1.6rem;
   margin-bottom: 3rem;
   width: 259px;
   height: 70px;
   background: #EEEAED;
   border-radius: 50px;
   p {
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;
      line-height: 2.25rem;
   }
`;

const CoinsIcon = styled(FaCoins)`
   color: #FF1AB3;
   width: 1.6rem;
   height: 1.6rem;
`;

const OrganisationBox = styled.div`
   display: flex;
   align-self: center;
   align-items: center;
   justify-content: center;
   width: 314px;
   height: 90px;
   background: #F6F6F6;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 50px;
   img {
      width: 200px;
      background: transparent;
   }
   p {
      background: transparent;
      right: 1.6rem;
   }
`;

const Button = styled(NavLink)`
   display: flex;
   align-self: center;
   justify-content: center;
   align-items: center;
   width: 85px;
   height: 21px;
   background: linear-gradient(180deg, #92C8FA 0%, #358CAB 100%);
   box-shadow: 0px 4px 4px rgba(128, 128, 128, 0.4);
   border-radius: 50px;
   margin: .5rem 0 2rem 0;
   text-decoration: none;
   z-index: 20;
   p {
      background: transparent;
      color: #F8F3F6;
      font-size: .9rem;
      letter-spacing: 0.06em;
   }
`;


const YourPoints = () => {
   return (
      <>
         <InfoWrapper>
            <Container>
               <PageDisplay>
                  <h2>Dina Poäng</h2>
               </PageDisplay>

               <MoneyPointsBox>
                  <CoinsIcon />
                  <p>24 p = 24 kr</p>
               </MoneyPointsBox>

               <OrganisationBox >
                  <img src={GpLogo} alt='gp-logo' />
               </OrganisationBox>
               <Button to='/greenpeace'>
                  <p>Välj</p>
               </Button>

               <OrganisationBox>
                  <img src={NsfLogo} alt='nsf-logo' />
               </OrganisationBox>
               <Button to='/naturskyddsforeningen'>
                  <p>Välj</p>
               </Button>

               <OrganisationBox>
                  <img src={WwfLogo} alt='wwf-logo' style={{ width: 80, }} />
                  <p>Världsnaturfonden </p>
               </OrganisationBox>
               <Button to='wwf'>
                  <p>Välj</p>
               </Button>

            </Container>
         </InfoWrapper>
      </>
   );
};

export default YourPoints;
