import logo from './logo.svg';
import './App.css';
import { Profilio } from './pages/Profilio';
import { Card } from './components/Card';
import { Projects } from './ui/Projects';
import { BottomNav, Navbar } from './components/layout_componets';

function App() {
  return (
    <div className='bg-[] dark:text-white dark:bg-[#050D25] h-[500vh] font-popins transition-all'>
      <div>
        <Navbar />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
