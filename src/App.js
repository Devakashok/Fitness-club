import './App.css';
// import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';

import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';

function App() {
  return (
    <div className="App">
      <Plans/>
      <Testimonials/>
      <Hero/>
      <Programs/>
      <Reasons/>
    </div>
  );
}

export default App;
