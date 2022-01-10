import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Columns = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Type",
    field: "type",
  },
  {
    name: "Date Creation",
    field: "createdAt",
  }
]

export default function Dashboard() {

  const classes = useStyles();
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>

          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}
