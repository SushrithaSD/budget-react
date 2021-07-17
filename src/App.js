
import {  Container} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLine from './Components/EntryLine';
import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';

function App() {
  return(
    <Container>

      <MainHeader title = "Budget" style = {{marginTop:20}}/>
      <DisplayBalance title = "YOUR BALANCE" value = "2000.67" size = "small" />
      <DisplayBalances/>

      <MainHeader title = "History" type = "h3"/>

      <EntryLine discription = "Call me when you want" value = "10.00" icon1 = "edit" isExpense/>
      <EntryLine discription = "Call me when you need" value = "20.00" icon1 = "trash"/>
      <EntryLine  discription = "Call me in the morning" value = "30.00" icon1 = "copy" />
      <EntryLine  discription = "I'll be on my way" value = "40.00" icon1 = "cut" isExpense/>
      <EntryLine  discription = "Call me when you want" value = "50.00" icon1 = "paste" isExpense/>
      <EntryLine  discription = "Call me when you need" value = "60.00" icon1 = "play" />
      <EntryLine  discription = "Call me out by your name" value = "70.00" icon1 = "pause" isExpense/>
      <EntryLine  discription = "I'll be on the way like" value = "80.00" icon1 = "close" isExpense/>
  

      <MainHeader title = "Add new transaction" type = "h3"/>

      <NewEntryForm/>


    </Container>
  )

}
export default App;
