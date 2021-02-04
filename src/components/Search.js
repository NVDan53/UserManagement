import React, { Component } from 'react';
import EditUser from './EditUser';
class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userObject: {}
      }
    }
    hienThiNut = () =>{
      if(this.props.showButton === true) {
        return <button className="btn btn-outline-primary" onClick={this.props.changeStatus} >Thêm</button>
      }
      else {
        return <button className="btn btn-outline-secondary" onClick={this.props.changeStatus}  >Thoát</button>
      
      }
    }
    getValue = (event) =>{
      var infor = event.target.value;
      console.log(infor)
      this.setState({
        searchInput: infor
      });
    }
    sendEditUser = (val) => {
      this.setState(
        {
          userObject: val
        }
      );
      this.props.getEditUser(val);
    }
    showEditTable = () => {
      if(this.props.editUser === true) {
        return <EditUser sendEditUser={(val)=>this.sendEditUser(val)}  editUserForm={this.props.editUserForm} isShowss ={()=>this.props.isShows()} />
      }
    }
    render() {
        return (
            <div className="col-12">
              <div className="row">
                {this.showEditTable()}
              </div>

            <div className="form-group">
              <div className="btn-group">
                <input onChange={(even)=>this.getValue(even)} type="text" id="search"className="form-control"
                  placeholder="Nhập từ tên cần tìm..." />
                <div className="btn btn-info" onClick={(data)=>this.props.getConnect(this.state.searchInput)}>Tìm </div>
              </div>
              <div className="btn-group">
                {this.hienThiNut()}
              </div>
            </div>
          </div>
          
        );
    }
}

export default Search;  