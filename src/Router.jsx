import { useState } from 'react';
import './App.css';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';
import TodoGrid from './TodoGrid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Router() {
    return (
        <>
        <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/todo">TodoGrid</Link>{' '}
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoGrid />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
        </>
    );
}

export default Router;