import React from 'react';
import ItemList from './components/TableBody';
import Filter from './components/Filter';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "items": [],
      "filterColumn": "",
      "filterCondition": "",
      "filterValue": "",
    };
  }

  componentDidMount() {
    axios({
      url: "http://192.168.0.14:8000/main/",
      method: 'get',
    }).then(
      responce => {
        const items = responce.data.items;
        this.setState({ "items": items });
      }
    ).catch(error => console.log(error));

  }

  // componentDidUpdate() {
  //   let column = document.querySelector('#filter_column').value;
  //   let condition = document.querySelector('#filter_condition').value;
  //   let filter_value = document.querySelector('#filter_value').value;

  //   let responseParams = {
  //     'column': column,
  //     'condition': condition,
  //     'value': filter_value,
  //     'page': 1,
  //   }

  //   axios({
  //     url: "http://127.0.0.1:3000/main/",
  //     method: 'get',
  //     params: responseParams,
  //   }
  //   ).then(
  //     responce => {
  //       this.setState({ 'items': responce.data.items })
  //     }
  //   ).catch(error => console.log(error));
  // }

  render() {
    return (
      <div>
        <Filter />
        <ItemList items={this.state.items} />
      </div>
    )
  };
}

export default App;
