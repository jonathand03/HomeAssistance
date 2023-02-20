import { Light } from './components/Devices/Lights.jsx';
import { useState } from 'react';
import { ToggleLights } from './components/ToggleLights/ToggleLights.jsx';
import './home.css';

export const Home = () => {
  const [lightStateRoom, setLightStateRoom] = useState(false);
  const [lightStateBarthRoom, setLightStateBarthRoom] = useState(false);
  const [lightStateBalcony, setLightStateBalcony] = useState(false);
  return (
    <div className="homeContainer">
      <div className="spaceItem">
        <div className="Item">
          <Light state={lightStateRoom} lightName="Sala" />
          <ToggleLights
            checked={lightStateRoom}
            setChecked={setLightStateRoom}
          />
        </div>

        <div className="Item">
          <Light state={lightStateBarthRoom} lightName="Banheiro" />
          <ToggleLights
            checked={lightStateBarthRoom}
            setChecked={setLightStateBarthRoom}
          />
        </div>

        <div className="Item">
          <Light state={lightStateBalcony} lightName="Varanda" />
          <ToggleLights
            checked={lightStateBalcony}
            setChecked={setLightStateBalcony}
          />
        </div>
      </div>
    </div>
  );
};
