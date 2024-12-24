import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { store, persistor } from './store/store';
import HomePage from './pages/HomePage';
import CreateBlogPage from './pages/CreateBlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreateBlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailsPage />} />
            </Routes>
            <Toaster position="top-right" />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;