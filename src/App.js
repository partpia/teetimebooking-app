import { Layout } from 'antd';
import TopHeader from './components/TopHeader';
import './App.css';

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <TopHeader />
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
