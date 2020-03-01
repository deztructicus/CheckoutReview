import React from 'react';
import './App.css';
import ReviewHistory from './components/review/ReviewHistory';
import ReviewForm from './components/review/ReviewForm';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ReviewForm />
      <ReviewHistory />
    </div>
  );
}

export default App;
