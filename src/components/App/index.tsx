import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from 'src/pages/MainPage';
import { InfoPage } from '@/pages/InfoPage';
import { FavoritesPage } from "@/pages/FavoritesPage";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/artinfo/:id" element={<InfoPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    );
};