import { Routes, Route } from "react-router-dom";
import TopHeader from './components/TopHeader';
import PageFooter from './components/PageFooter';
import PageContent from './components/PageContent';
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import TeeTimeBooking from "./components/TeeTimeBooking";
import Profile from "./components/Profile";
import './App.css';
import { Layout } from "antd";

function App() {

  return (
    <Layout className="App">
      <TopHeader />
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teetimes" element={<TeeTimeBooking />} />
        <Route path="/account" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <PageFooter />
    </Layout>
  );
}
export default App;
