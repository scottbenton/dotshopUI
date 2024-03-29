import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Fab,
  Container,
  Paper,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import {
  DragDropContext,
  Droppable,
  Draggable
} from 'react-beautiful-dnd';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'relative'
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  header: {
    textDecoration: 'none',
    fontFamily: 'comfortaa',
  },
  movement: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}))

export function Movements(props) {
  const { project, updateProject } = props;
  const { movements } = project;
  const classes = useStyles();

  let movementsArray = Object.keys(movements);
  movementsArray = movementsArray.sort((a, b) => {
    return movements[a].index - movements[b].index;
  });

  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
    ) {
      return;
    }
    const { movements } = project;
    const newMovements = { ...movements };

    const newMovementsArray = [...movementsArray];

    const movingItem = newMovementsArray.splice(source.index, 1);
    newMovementsArray.splice(destination.index, 0, movingItem[0]);

    newMovementsArray.forEach((key, index) => {
      newMovements[key].index = index;
    });
    console.log(newMovements);
    updateProject('movements', newMovements);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h2' gutterBottom className={classes.header}>
            Movements
          </Typography>
        </Grid>
        {Array.isArray(movementsArray) &&
          <DragDropContext
            onDragEnd={onDragEnd}
          >
            <Grid item xs={12}>
              <Droppable droppableId='MovementList'>
                {(provided) => (
                  <Container
                    className={classes.list}
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {movementsArray.map((movementKey, index) => (
                      <Draggable key={movements[movementKey].name} draggableId={movements[movementKey].name} index={index}>
                        {(provided) => (
                          <Paper
                            className={classes.movement}
                            elevation={4}
                            innerRef={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <Typography>
                              {movements[movementKey].name}
                            </Typography>
                          </Paper>
                        )}

                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Container>
                )}
              </Droppable>
            </Grid>
          </DragDropContext>
        }
      </Grid>
      <Fab color='secondary' aria-label='add-movment' className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  )
}