import {
  BsFillGearFill,
  MdOutlineDevicesOther,
  MdSpaceDashboard,
} from 'react-icons/all.js';
import { Link } from '@mui/material';

export const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="navItem">
          <MdSpaceDashboard size={20} /> <p>DashBoard</p>
        </div>
        <Link href="/devices" underline="none" color="inherit">
          <div className="navItem">
            <MdOutlineDevicesOther size={20} /> <p>Devices</p>
          </div>
        </Link>

        <div className="navItem">
          <BsFillGearFill size={20} /> <p>Configurations</p>
        </div>
      </div>
    </>
  );
};
