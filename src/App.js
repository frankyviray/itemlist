import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Categories from './components/Categories';
import Results from './components/Results';
import Modal from './components/Modal';

import assortment from './assortment.json'


class App extends Component {
  state = {
    assortment: assortment,
    categories: [],
    selectedCategoryItems: [],
    selectedItem:"",
    isOpen: false
  }

  componentDidMount () {
    this.getCategories();
  }

  toggleModal = (itemNum) => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    //this.getItemInfo(itemNum)
  }

  getCategories = () => {
    //console.log(this.state.assortment)

    let assort = this.state.assortment;
    let categories = [];
    let categoriesArr = assort.map(function(result) {
      return (
        {
          class: result.class,
          category: result.category
        }
      )
    })
    //console.log(categoriesArr)

    function removeDuplicates(myArr, prop) {
      return myArr.filter((obj, pos, arr) => {
          return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      });
    }

    categories = removeDuplicates(categoriesArr,"category");
    //console.log(categories);

    this.setState({
      categories: categories
    })
  };

  handleCategoryClick = (classNum) => {
    let assortOne = this.state.assortment;
    let categoryItems = [];
    //console.log(classNum.classNum)
    
    assortOne.forEach(function(result) {
      if (result.class === classNum.classNum) {
        return categoryItems.push(result)
      } 
    });

    //console.log(categoryItems)
    this.setState({
      selectedCategoryItems: categoryItems
    });
  };

  getItemInfo = (itemNum) => {
    let assortTwo = this.state.assortment;

    assortTwo.map((match) => {
      if(match.item_no === itemNum.itemNum) {
        return (
          this.setState({
            selectedItem: match
          })
        )
      } else {
        return null
      }
    })
  }


  render() {
    return (
      <Wrapper>
        <Header />
        <div className="row">
          <Categories 
            categories={this.state.categories}
            click={this.handleCategoryClick}
          />
          <Results 
            items={this.state.selectedCategoryItems}
            modal={this.toggleModal}
          />
          <Modal 
            show={this.state.isOpen}
            onClose={this.toggleModal}
            itemInfo={this.state.selectedItem}
          />
        </div>
      </Wrapper>
    );
  }
}

export default App;
