import React from 'react';
import { makeStyles } from '@mui/styles';
import { Modal, Typography, Button, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // // backgroundColor: theme.palette.backgroundColor ? theme.palette.background.paper : 'white',
    // border: '2px solid #000',
    // boxShadow: theme.shadows,
    // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(3)}px`,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

const ProjectModal = ({ open, handleClose, project }) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <Box className={classes.paper}>
        <Typography variant="h5" id="project-modal-title" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body1" id="project-modal-description" gutterBottom>
          {project.description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Status: {project.status}
        </Typography>
        <Button onClick={handleClose} variant="contained" color="primary">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
