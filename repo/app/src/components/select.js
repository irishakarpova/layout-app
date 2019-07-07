import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import changeSelection from '../ac'
import PropTypes from 'prop-types';


class SelectFilter extends Component{


  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected, articles) => {
    return this.props.changeSelection(selected)
  }

  get options(){
    return this.props.articles.map((article) =>({
      label: article.title,
      value: article.id,
    }))
  }

  render(){
  const placeholder = "Search..."

  const styles = {
  control: styles => ({ ...styles,
      backgroundColor: 'white',
      borderRadius: '0',
      border:'1px solid black',
      ':hover': {border:'1px solid black'},
      boxShadow:'0',
     }),

  multiValueLabel: () => ({
    color: 'white',
    backgroundColor: 'black',
    fontSize:'12px',
    fontFamily:'Roboto Mono',
    padding:'5px'
  }),
  multiValueRemove: () => ({
    display: 'none'
  }),

  option: () => ({
    color: 'black',
    borderRadius: '0',
    backgroundColor: '#e3cc91',
    fontSize:'12px',
    fontFamily:'Roboto Mono',
    padding:'10px 10px',
    ':hover': {backgroundColor:'white'},
  }),
  input: styles => ({
    fontSize:'12px',
    fontFamily:'Roboto Mono',
   }),
   noOptionsMessage: styles => ({
     fontSize:'12px',
     fontFamily:'Roboto Mono',
     textAlign:"center"
    }),
    menuList: styles => ({...styles,
      borderRadius: 0,
      padding: 0,
     }),
    menu: styles => ({...styles,
      border:'1px solid black',
      borderRadius: 0,
     }),
    placeholder: styles => ({...styles,
      fontSize:'12px',
      fontFamily:'Roboto Mono',
      color:'black'
     }),
    indicatorSeparator: styles => ({...styles,
       display:'none'
      }),

    dropdownIndicator: styles => ({...styles,
        color:'black',
        ':hover': {color:'black'},
      }),
};

    return(
      <div className="container-fluid Bg-dark">
        <div className="container p-0 ">
        <div className="row p-0 pb-3 justify-content-md-center">
          <div className="col-md-10 col-12">
              <Select options={this.options}
                      value={this.props.selected}
                      onChange={this.handleChange}
                      styles={styles}
                      placeholder={placeholder}
                      isMulti
              />
            </div>
            </div>
        </div>
      </div>
    )
  }

}
export default connect(
  (state) =>({
    selected: state.filters.selected,
    articles: state.articles
  }),
  { changeSelection }
 )(SelectFilter)
