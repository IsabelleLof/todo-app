import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Navbar from './Navbar';

function App () {

  return (
    <div className="App" id='dark'>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={
        <TodoList />
      }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
