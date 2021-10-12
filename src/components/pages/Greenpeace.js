import React from 'react';
import styled from 'styled-components';
import GpLogo from '../assets/gp-logo.svg';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
   background-color: #251821;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 90vh;
`;

const OrganisationBox = styled.div`
   display: flex;
   align-self: center;
   align-items: center;
   justify-content: center;
   margin: 3rem 0 2rem 0;
   width: 314px;
   height: 50px;
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

const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 80%;
   h4 {
      margin: 1rem 0 .2rem 0;
      color: #FFF;
      width: 100%;
      font-size: 1.2rem;
      font-weight: 700;
   }
   p {
      font-size: 1rem;
      color: #FFF;
   }
`;

const Button = styled(NavLink)`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 85px;
   height: 30px;
   background: linear-gradient(180deg, #92C8FA 0%, #358CAB 100%);
   box-shadow: 0px 4px 4px rgba(128, 128, 128, 0.4);
   border-radius: 50px;
   margin: 1.5rem;
   text-decoration: none;
   p {
      background: transparent;
      color: #F8F3F6;
      font-size: 14px;
      letter-spacing: 0.06em;
   }
`;

const Greenpeace = () => {
   return (
      <Container>
         <OrganisationBox >
            <img src={GpLogo} alt='gp-logo' />
         </OrganisationBox>
         <TextWrapper>
            <h4>Organisation</h4>
            <p>Greenpeace Norden upprättades 1999 genom en sammanslutning av de nationella Greenpeace-kontoren i Danmark, Sverige, Finland och Norge. Kontoren gick samman för att öka slagkraften och effektiviteten genom ett bättre nordiskt samarbete.</p>
            <h4>Insamlingspolicy</h4>
            <p>Det är privatpersoner som du som möjliggör vårt arbete för en grönare planet. Vi tar inte emot bidrag från varken stater eller företag, vilket ger oss en oberoende röst som endast talar för miljöns intressen.</p>
         </TextWrapper>
         <Button to='/thanku'>
            <p>Donera</p>
         </Button>
      </Container>
   );
};

export default Greenpeace;
