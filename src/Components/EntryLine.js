import React from 'react'
import {Grid, Icon, Segment} from 'semantic-ui-react'

function EntryLine({ discription, value, icon1,isExpense = false}) {
    return (
        <Segment color={isExpense? "red" : "green"}>
        <Grid columns = {3} textAlign="right" >
          <Grid.Row>
            <Grid.Column width = {10} textAlign = "left">{discription} </Grid.Column>
            <Grid.Column width = {3} textAlign= "right">{value}</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name = {icon1} />
    
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default EntryLine
