import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AuthenticationPageStyles= styled.div`
    min-height: 100vh;
   padding: 40px;
   .logo{
    margin: 0 auto 20px;
   }
   .heading{
    text-align: center;
    color: ${props => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
   }
   .form{
    max-width: 800px;
    margin: 0 auto;
   }
   .have-account{
    margin-bottom: 20px;
    a{
        display: block;
        color: ${props => props.theme.primary};
        font-weight: 500;
    }
   }

`;


const AuthenticationPage = ({children}) => {
    return (
        <AuthenticationPageStyles>
             <div className='container'>
                <NavLink to="/">
                    <img srcSet='/logo1.png 2x' alt="monkey-blogging" className='logo'></img>
                </NavLink>
                <h1 className='heading'>Blog game</h1>
                {children}
            </div>
        </AuthenticationPageStyles>
    );
};

export default AuthenticationPage;