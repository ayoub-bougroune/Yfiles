import React from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom"
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AttachFile from "@material-ui/icons/AttachFile";
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";
const useStyles = makeStyles(styles);

export default function Actions({row, onDelete, onEdit, onUpload}){
  const classes = useStyles();
  const history = useHistory()
  const handleConsult = () =>{
    console.log(row.id)
    if(row.type === 'folder')
      history.push(`/admin/dashboard/${row.id}`);
  }
    return (
      
    <>
      {row.type === 'file' ? 
      ( <a
        href={row.url}
        target="_blank"
      >
        <Tooltip
        title={`Consult ${row.type}`}
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
      
        <IconButton
          aria-label="Consult"
          className={classes.tableActionButton}
        >
          <ArrowForwardIcon
            className={
              classes.tableActionButtonIcon + " " + classes.edit
            }
          />
        </IconButton>
      </Tooltip>
      </a>
      )
      :(
      <Tooltip
        title={`Consult ${row.type}`}
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
      
        <IconButton
          aria-label="Consult"
          onClick={handleConsult}
          className={classes.tableActionButton}
        >
          <ArrowForwardIcon
            className={
              classes.tableActionButtonIcon + " " + classes.edit
            }
          />
        </IconButton>
      </Tooltip>
      )}
      {row.type === 'folder' && (
      <Tooltip
        id="tooltip-top"
        title={`Edit ${row.type}`}
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        <IconButton
          aria-label="Edit"
          onClick={() => onEdit(row)}
          className={classes.tableActionButton}
        >
          <Edit
            className={
              classes.tableActionButtonIcon + " " + classes.edit
            }
          />
        </IconButton>
      </Tooltip>
      )}
      {row.type === 'folder' && (<Tooltip
        id="tooltip-top"
        title="Upload file"
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        <IconButton
          aria-label="Upload"
          onClick={() => onUpload(row)}
          className={classes.tableActionButton}
        >
          <AttachFile
            
            className={
              classes.tableActionButtonIcon + " " + classes.edit
            }
          />
        </IconButton>
      </Tooltip>)}
      <Tooltip
        id="tooltip-top-start"
        title={`Delete ${row.type}`}
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        <IconButton
          aria-label="Close"
          onClick={() => onDelete(row)}
          className={classes.tableActionButton}
        >
          <DeleteForeverIcon
            className={
              classes.tableActionButtonIcon + " " + classes.close
            }
          />
        </IconButton>
      </Tooltip>
    </>
    )
}