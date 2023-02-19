import { routes } from '../routes.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item, index) => (
          <Route path={item.path} element={<item.page />} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
