import { Routes, Route } from "react-router-dom";
import { Menu, HomePage, DriftPage, ForzaPage, TimeAttackPage } from './components';

export default function App() {
  return (
      <>
        <Menu />
        <Routes className="page">
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </>
  );
}