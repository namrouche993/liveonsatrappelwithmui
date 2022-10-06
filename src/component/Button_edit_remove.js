import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid,Box} from '@mui/material'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Button_edit_remove(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ border: 0,padding:0 }} variant='outlined' size='small' color='inherit' onClick={handleClickOpen}>
        {props.logobutton}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.modifiedTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {/* <Typography gutterBottom>
            l'abonné numero {props.idabonne} 
          </Typography> */}

          <Typography gutterBottom>
          <Grid container md={12} direction='row' columnSpacing={5} sx={{marginBottom:'1.6rem'}} >
            <Grid container item md={6} direction='column' rowSpacing={4}  >
             <Grid item md={4}>
                <TextField
                  required
                  id="editname"
                  label="Nom et Prénom :"
                  defaultValue={props.name}
                />
             </Grid>
             <Grid item md={4}>

                <TextField
                  required
                  id="editmontant"
                  label="Montant :"
                  defaultValue={props.montant}
                />
            </Grid>
            </Grid>
            <Grid container item direction='column' md={6}  rowSpacing={4}  >
             <Grid item md={4}>
                <TextField
                  required
                  id="editdatedenaissance"
                  label="Date de naissance :"
                  defaultValue={props.datedenaissance}
                />
             </Grid>
             <Grid item md={4}>

                <TextField
                  required
                  id="editdateabonnement"
                  label="Date d'abonnement :"
                  defaultValue={props.dateabonnement}
                />
            </Grid>

            {/* <Grid item md={4}>
                <TextField
                  required
                  id="editda"
                  label="Notes :"
                  defaultValue={props.notes}
                />
            </Grid> */}

            </Grid>
            </Grid>
         
     
        </Typography>
        
          <Grid md={10} sx={{display:'grid'}}>
                <TextField
                  required
                  id="editnotes"
                  label="Notes!! :"
                  multiline            
                //maxRows={4}
                  defaultValue={props.notes}
                />
        </Grid>

          <Typography gutterBottom>
            Date de debut d'abonnement  : {props.dateabonnement}
          </Typography>

          <Typography gutterBottom>
            Montant payes  : {props.montant}
          </Typography>

          <Typography gutterBottom>
            Notes : {props.notes}
          </Typography>

          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}