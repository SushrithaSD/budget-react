
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return(
    <Container>

      <Header as = "h1" style = {{marginTop:20}}>Budget</Header>
      <Statistic size = "small">
      <Statistic.Label>Your Balance : </Statistic.Label>
      <Statistic.Value>2,500</Statistic.Value>
      </Statistic>

      <Segment textAlign= "center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color = "green">
                <Statistic.Label style = {{textAlign : "left"}}>
                  INCOME :
                </Statistic.Label>
                <Statistic.Value>1,045</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size = "tiny" color = "red">
                <Statistic.Label style = {{textAlign:"left"}}>
                  EXPENSES :
                </Statistic.Label>
                <Statistic.Value>634</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as = "h2">History </Header>
      <Segment color="red">
        <Grid columns = {3} textAlign="right" >
          <Grid.Row>
            <Grid.Column width = {10} textAlign = "left">Something </Grid.Column>
            <Grid.Column width = {3} textAlign= "right">10.00</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name = "edit" bordered/>
              <Icon name = "trash"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color = "orange">
        <Grid columns = {3} textAlign= "right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something else</Grid.Column>
            <Grid.Column width= {3} textAlign = "right">20.00</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name = "copy"/>
              <Icon name = "paste" bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color = "blue">
        <Grid columns = {3} textAlign= "right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">Something something</Grid.Column>
            <Grid.Column width= {3} textAlign = "right">30.00</Grid.Column>
            <Grid.Column width = {3}>
              <Icon name = "close" bordered/>
              <Icon name = "pause"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as = "h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon = "tags"
          width = {12}
          label = "Description"
          placeholder = "New shinny thing"/>
        
          <Form.Input
            width = {4}
            placeholder = "100.00"
            icon = "dollar"
            label = "Value"
            iconPosition = "left"
          />
        </Form.Group>
        </Form>
      
        <Button.Group style = {{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>OK</Button>
        </Button.Group>

    </Container>
  )

}
export default App;
