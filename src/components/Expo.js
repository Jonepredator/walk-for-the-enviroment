import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   padding-left: 1rem;
   h2{
      padding-right: .5rem;
      color: #FFF;
      font-weight: 500;
      font-size: 2rem;
   }
`;

const Expo = () => {
   const d = new Date();
   const weekday = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
   const months = ['Jan', 'Feb', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

   const day = weekday[d.getDay()];
   const month = months[d.getMonth()];
   const date = d.getDate();

   return (
      <Wrapper>
         <h2>{day}</h2>
         <h2>{date}</h2>
         <h2>{month}</h2>
      </Wrapper>
   );
};

export default Expo;