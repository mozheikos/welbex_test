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
      "filterColumn": 0,
      "filterCondition": 0,
      "filterValue": 0,
      "pages": 1,
      "page": 0,
    };
  }

  componentDidMount() {
    const params = {
      "column": this.state.filterColumn,
      "condition": this.state.filterCondition,
      "value": this.state.filterValue,
      "page": this.state.page,
    }

    axios({
      url: `http://127.0.0.1:8000/main/${params.column}/${params.condition}/${params.value}/`,
      method: 'get',
    }).then(
      responce => {
        const items = responce.data.items;
        const pages = responce.data.pages;
        this.setState({ "items": items, "pages": pages });
      }
    ).catch(error => console.log(error));

  }

  render() {
    return (
      <div className='content'>
        <div className='filter_block'>
          <Filter />
          <button type='button' id='filter_button' onClick={() => {
            let column = document.querySelector("#filter_column").value;
            let cond = document.querySelector("#filter_condition").value;
            let value = document.querySelector("#filter_value").value;

            axios({
              url: `http://127.0.0.1:8000/main/${column}/${cond}/${value}/`,
              method: 'get',
            }
            ).then(
              responce => {
                const items = responce.data.items;
                const pages = responce.data.pages;
                this.setState({ "items": items,"page": 0, "pages": pages });
              }
            ).catch(error => console.log(error));

          }}>Показать</button>
        </div>

        <ItemList items={this.state.items.slice(0 + this.state.page * 10, 10 + this.state.page * 10)} />
        <div className='paginator'>
          <button onClick={() => {
            if (this.state.page) {
              this.setState({ "page": this.state.page - 1 })
            }
          }}>Назад</button>

          <span className='page' >страница {this.state.page + 1} из {this.state.pages}</span>

          <button onClick={() => {
            if (this.state.page + 1 < this.state.pages) {
              this.setState({ "page": this.state.page + 1 })
            }
          }}>Вперед</button>
        </div>
      </div>
    )
  };
}

export default App;
