import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { lazy, Suspense } from 'react';

// Lazy loading components
const Home = lazy(() => import('./Component/Home'));
const Send = lazy(() => import('./Component/send'));
const Recieve=lazy(()=> import('./Component/recieve'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/send' element={<Send />} />
          <Route path='/receive' element={<Recieve/>}/>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
