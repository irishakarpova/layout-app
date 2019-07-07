import React, {Component} from "react"
import SelectFilter from './select'
import toggleDecorator from '../decorators/toggleDecorator'
import logo from '../logo.svg'
import searchSign from '../search-sign.svg'
import closeSign from '../close-sign.svg'

class Header extends Component{

  render(){

  const {handleClick, isOpen} = this.props
  const searchSign_btn = <img src={searchSign} className='Search-sign' alt="search-sign" />
  const closeSign_btn  = <img src={closeSign} className='Search-sign' alt="search-sign" />

  return(
    <div>
      <header>
        <div className="container-fluid Bg-dark p-0">
          <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-3 Bg-logo">
                  <img src={logo} className='App-logo' alt="logo" />
                </div>
                <div className="col-md-7 d-none d-md-block p-0">
                  <div className="Title">
                    <h1>FOR THE VOICE</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="container-fluid  bg-sub-title">
          <div className="container">
            <div className="row justify-content-center d-flex flex-row">
              <div className="col-md-3 p-0">
                <div className="Logo-years">
                  <p>1910-1920</p>
                </div>
              </div>
              <div className="col-8 d-block d-md-none p-0">
                <div className="Title-sm">
                  <h1>FOR THE VOICE</h1>
                </div>
              </div>
              <div className="col-md-7 col-4 p-0">
                <div className="Sub-title">
                  <h2>AVANGARD RUSSIAN BOOK</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid Bg-dark section-book-cont p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-10 Section-book">
                <h3>ASSOCIATIONS, GROUPS AND PUBLISHING HOUSES</h3>
              </div>
              <div onClick={handleClick} className="col-md-1 p-0 col-2 Search-btn">
                { isOpen ?  closeSign_btn : searchSign_btn }
              </div>
            </div>
          </div>
            {this.SearchComp}
        </div>
      </header>
    </div>
  )
  }

  get SearchComp(){
    if (!this.props.isOpen) return null
    return (
      <div>
        <SelectFilter/>
      </div>
    )
  }
}
export default toggleDecorator(Header)
