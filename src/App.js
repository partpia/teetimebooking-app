import { Routes, Route, Link } from "react-router-dom";
import TopHeader from './components/TopHeader';
import PageFooter from './components/PageFooter';
import PageContent from './components/PageContent';
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import './App.css';

function App() {

  return (
    <div className="App">
        <TopHeader />
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <PageFooter />
    </div>
  );
}

export default App;
