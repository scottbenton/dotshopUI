import React from 'react';
import { Button } from '@material-ui/core';

export function OpenButton(props) {
  const { fab, buttonContent, component, children, ...other } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {
        component ?
          React.cloneElement(component, { onClick: () => setOpen(true) })
          :
          <Button onClick={() => setOpen(true)} {...other}>
            {buttonContent}
          </Button>
      }
      {React.cloneElement(children, { open: open, setOpen: setOpen })}
    </>
  )
}