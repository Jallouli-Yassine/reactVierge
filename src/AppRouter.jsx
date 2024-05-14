import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar.jsx';
import { NotFound } from './components/notfound.jsx';


const AppRouter = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<NavigationBar />}>
                <Route path="*" element={<NotFound />} />

                </Route>


            </Routes>
        </Router>


    );
};

export default AppRouter;
