import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { IoStatsChart } from 'react-icons/io5';
import { FaCoins } from 'react-icons/fa';

const NavContainer = styled.div`
   border-top: 2px solid #CBCDD4;
   position: sticky;
   background: #251821;
   /* margin: 0 auto; */
   height: 10vh;
   /* max-width: 768px; */
   display: flex;
   /* overflow: hidden; */
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;

   bottom: 0;
   z-index: 500;
`;

const NavMenu = styled.ul`
   display: flex;
   width: 100%;
   justify-content: space-evenly;
   flex-direction: row;
`;

const NavItems = styled.li`
   list-style: none;
   padding: .3rem;
   text-decoration: none;
`;

const NavMenuLink = styled(NavLink)`
   list-style: none;
   text-decoration: none;
   color: #fff;

   &.active{
      color: #FF1AB3;
   }
`;

const HomeIcon = styled(IoHomeOutline)`
   width: 2.1rem;
   height: 1.9rem;
`;

const StatsIcon = styled(IoStatsChart)`
   width: 2.1rem;
   height: 1.75rem;
`;

const PointsIcon = styled(FaCoins)`
   width: 2.1rem;
   height: 1.75rem;
`;

const Navbar = () => {
   return (
      <>
         <NavContainer>
            <NavMenu>
               <NavItems>
                  <NavMenuLink to='/home' activeClassName='active' >
                     <HomeIcon />
                  </NavMenuLink>
               </NavItems>

               <NavItems>
                  <NavMenuLink to='/activity' activeClassName='active' >
                     <StatsIcon />
                  </NavMenuLink>
               </NavItems>

               <NavItems>
                  <NavMenuLink to='/points' activeClassName='active' >
                     <PointsIcon />
                  </NavMenuLink>
               </NavItems>

            </NavMenu>
         </NavContainer>
      </>
   );
};

export default Navbar;
