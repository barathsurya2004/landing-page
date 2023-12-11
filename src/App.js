import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { NavigationPage } from './routes/navigation/navigation.route';
import Homepage from './routes/homepage/homepage.route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationPage />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
