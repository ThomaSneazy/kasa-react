import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./ErrorPage.scss"
import { Link } from 'react-router-dom';
import MainWrapper from '../../components/MainWrapper/MainWrapper';

function ErrorPage() {
  return (
    <>
    <MainWrapper>
    <Navbar />
    <div className='error__container'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
    </MainWrapper>
    <Footer />
    </>
    )
}

export default ErrorPage
