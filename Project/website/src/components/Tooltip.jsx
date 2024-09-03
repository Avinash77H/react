import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

 function MyTooltip() {
  return (
    <Tooltip title="Add" arrow className='bg-white'>
      <Button className='bg-white'>Arrow</Button>
    </Tooltip>
  );
}
export default MyTooltip