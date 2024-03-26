import React from 'react';
import Header from './components/layouts/header'
import FormContact from './components/form/formContact'
import CardUsers from './components/layouts/cardUsers';
import { useUsers } from './components/contexts/usersContext';
import {deleteUser} from './components/form/formContact'
import Carousel from './components/layouts/carrousel';


function App() {
  const { users } = useUsers()



  return (
    <>
      <Header />
      <Carousel/>
      <FormContact />
      <CardUsers users={users} deleteUser={deleteUser}/>
     
    </>
  )
}

export default App
