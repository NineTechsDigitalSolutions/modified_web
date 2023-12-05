import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Main, Admin, Home, Login, Contact, About,PublishWithUsContent } from './pages';
import { Profile, MyBooks } from './components';
import BlogSection from "./components/Main/Home/BlogSectionOld";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='PublishWithUsContent' element={<PublishWithUsContent />} />
          <Route path='blog' element={<BlogSection />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='profile' element={<Profile />} />
          <Route path='mybooks' element={<MyBooks />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
