import {Component} from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';
import {Wrapper} from "./styles";
import ErrorBoundary from '../ErrorBoundary'



let id = 0;
class Home extends Component{
  constructor(){
    super();
    this.state = {
      balance: 0,
      transactions: []
    }
  }

  onChange=(value)=>{
    if(value>0){
      this.setState((state)=>({
        balance: state.balance + Number(value),
        transactions: [{
          value,
          label:'plus',
          id: ++id  
        },...state.transactions]
      }));
    } else if(value<0){
      this.setState((state)=>({
        balance: state.balance + Number(value),
        transactions: [{
          value,
          label:'minus',
          id: ++id  
        },...state.transactions]
      }));
    }
    else{
      this.setState((state)=>({
        balance: state.balance + Number(value),
        transactions: [{
          value,
          label:'error',
          id: ++id  
        },...state.transactions]
      }));
    }
  }

  render(){
      return (
        <ErrorBoundary>
          <Wrapper>
            <h1>Budget calculator</h1>
            <br/>
            <Balance balance={this.state.balance}/>
            <Form onChange={this.onChange} />
            <hr/>
            <Transactions transactions={this.state.transactions}/>
          </Wrapper>
        </ErrorBoundary>
      );
    }
  }
 
 export default Home;