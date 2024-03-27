import React from 'react';

import Header from './components/layouts/header'
import MainTitle from './components/layouts/mainTitle';
import Carosel from './components/layouts/carosel';
import AboutUs from './components/layouts/aboutUs';
import FeedBack from './components/layouts/feedBack';
import FormContact from './components/form/formContact'
import SocialMedia from './components/layouts/socialMedia';
import CardUsers from './components/layouts/cardUsers';

import { useUsers } from './components/contexts/usersContext';
import {deleteUser} from './components/form/formContact'





function App() {
  const { users } = useUsers()



  return (
    <>
      <Header />
      <MainTitle />
      <Carosel/> 
      <AboutUs />
      <FeedBack />
      <FormContact />
      <SocialMedia />
      {/* <CardUsers users={users} deleteUser={deleteUser}/> */}
     
    </>
  )
}

export default App
