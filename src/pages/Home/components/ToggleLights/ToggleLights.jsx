import Switch from '@mui/material/Switch';

export const ToggleLights = ({ checked, setChecked }) => {
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
};
