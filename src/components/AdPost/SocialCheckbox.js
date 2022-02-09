import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked /> Email
      <Checkbox {...label} defaultChecked color="secondary" /> SMS
      <Checkbox {...label} defaultChecked color="success" /> LinkedIN
      <Checkbox {...label} defaultChecked color="default" /> Facebook
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
      Instagram
    </div>
  );
}