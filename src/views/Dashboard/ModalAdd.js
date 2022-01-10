import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


const styles = {
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  card: {
    marginTop: "50px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
const useStyles = makeStyles(styles);
export default function ModalAdd({infoModal, handleSave, handleClose }){
    const classes = useStyles();
    const { type, open, row, typeFile } = infoModal;
    const [name, setName] = React.useState('');

   
    return (
        <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent>
        {/* <div className={classes.wrapper}  className={classes.card}> */}
    <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={12}>
          <Card >
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>{`${type} ${typeFile|| ''}`}</h4>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
   
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="name"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                      value:name,
                      required: true,
                      onChange:(event)=> setName(event.target.value)
                    }}                    
                  />
                </GridItem>
              </GridContainer>
            
        
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <input
                      style={{ display: "none" }}
                      id="contained-button-file"
                    
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained"  component="span">
                        Upload
                      </Button>
                    </label>
                </GridItem>
              </GridContainer>  
            </CardBody>
            <CardFooter>
              <Button color="warning" onClick={handleClose}>Cancel</Button>
              <Button color="primary" onClick={handleCreate}>{type}</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* </div> */}
      </DialogContent>
        {/* <DialogTitle id="form-dialog-title">Create Folder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder name"
            type="text"
            defaultValue={name}
            onChange={(event)=> setName(event.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions> */}
      </Dialog>
    );
}