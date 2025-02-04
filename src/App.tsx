import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import InteractiveFeatures from './components/InteractiveFeatures';
import AuthorPage from './components/about/AuthorPage';
import MissionPage from './components/about/MissionPage';
import ProjectHistoryPage from './components/about/ProjectHistoryPage';
import ContributePage from './components/about/ContributePage';
import PublicationsList from './components/publications/PublicationsList';
import PublicationDetail from './components/publications/PublicationDetail';
import CategoryPublications from './components/publications/CategoryPublications';
import SearchResults from './components/search/SearchResults';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interactive/*" element={<InteractiveFeatures />} />
        <Route path="/about/author" element={<AuthorPage />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/about/history" element={<ProjectHistoryPage />} />
        <Route path="/about/contribute" element={<ContributePage />} />
        <Route path="/collections" element={<PublicationsList />} />
        <Route path="/collections/:category" element={<CategoryPublications />} />
        <Route path="/publications/:id" element={<PublicationDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;