import './App.css';
import { Profilio } from './pages/Profilio';
import { useState, useEffect } from 'react';

function App() {

  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {
    const scrollPositon = window.scrollY
    const windowHeight = window.innerHeight
    if (scrollPositon > windowHeight / 2) return setScroll(true)
    setScroll(false)
    return
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])
  return (
    <div className='bg-gradient-to-br from-white to-slate-300  dark:text-white dark:from-slate-600 dark:to-color1 h-auto font-popins transition-all'>
      <div>
        <Profilio isScrolled={scroll} />
      </div>
    </div>
  );
}

export default App;
