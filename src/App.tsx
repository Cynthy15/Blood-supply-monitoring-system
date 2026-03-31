import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { Requests } from './pages/Requests';
import { Settings } from './pages/Settings';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveView('dashboard');
  };

  if (!isAuthenticated) {
    return (
      <div className="page-enter">
        <Landing onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <Layout activeView={activeView} setActiveView={setActiveView} onLogout={handleLogout}>
      <div key={activeView} className="page-enter">
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'inventory' && <Inventory />}
        {activeView === 'requests' && <Requests />}
        {activeView === 'settings' && <Settings />}
      </div>
    </Layout>
  );
}

export default App;
