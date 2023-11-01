import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'


function App() {
      const { noteId } = useParams();

  return (
    
     <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>

          <Route path="/" exact element={[<NotesListPage key={1} />]} />
            <Route path="/note/:id" element={<NotePage id={ noteId} />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default App
