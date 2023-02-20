import { SideBar } from '../components/SideBar.jsx';

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <SideBar />
      <div>{children}</div>
    </div>
  );
};
