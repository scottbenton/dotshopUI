import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from './Toolbar/Toolbar';
import { updateStateByKey } from '../HelperFunctions/StateHelpers';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
}));

export default function MainEditPage(props) {
  const classes = useStyles();

  const [drillData, setDrillData] = React.useState({ projectName: 'Test' });
  const updateDrillData = (key, value) => updateStateByKey(key, value, setDrillData);
  return (
    <div className={classes.root}>
      <Toolbar drillData={drillData} updateDrillData={updateDrillData} />
    </div>
  )
}