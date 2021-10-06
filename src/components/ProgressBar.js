import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressSection = styled.section`
   margin-top: 10px;
   background: transparent;
`;
const ProgressDiv = styled.div`
   background: rgba(34, 34, 34, 0.75);
   border-radius: 50px;
   position: relative;
   align-items: flex-end;
`;

const Progress = styled.div`
   /* background: #FF7BCA; */
   /* background: #FF1AB3; */
   background-image: linear-gradient(to right, #ff1ab3, #ff1ab3, #ff1ab3, #ff6ac5, #ff7bca);
   border-radius: 50px;
 
   height: 10px;
   transition: 1.5s ease;
   transition-delay: .6s;
   margin: 0;
`;


const ProgressBar = ({ width, percent }) => {

   const [value, setValue] = useState(0);

   useEffect(() => {
      setValue(percent * width);
   }, [width, percent]);

   return (
      <>
         <ProgressSection>
            <ProgressDiv style={{ width: width }}>
               <Progress style={{ width: `${value}px` }} />
            </ProgressDiv>
         </ProgressSection>
      </>
   );
};

export default ProgressBar;
