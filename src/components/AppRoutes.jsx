import { routes } from '../routes.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../pages/Layout.jsx';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item, index) => (
          <Route
            path={item.path}
            element={
              <Layout>
                <item.page />
              </Layout>
            }
            key={index}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
