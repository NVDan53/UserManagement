import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      phone: "",
      permission:"" ,
    }
  }
   isChange=(event) =>{
      var name = event.target.name;
      var value = event.target.value;
      this.setState({
        [name]: value
      });
  
    }
    // makePackage = () =>{
    // // Dong goi doi tuong
    //   var item = {};
    //   item.id = this.state.id;
    //   item.name = this.state.name;
    //   item.phone = this.state.phone;
    //   item.permission = this.state.permission;
    //   return item;
    // }
    showForm = () =>{
        if(this.props.hienThiForm !== true) {
            return (
                <div className="col">
                  <form>
            <div className="card border-primary">
              <div className="card-header">Thêm mới user vào hệ thống</div>
              <div className="card-body text-primary">
                {/* <h4 class="card-title">Tên user</h4> */}
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="name" id="name"  placeholder="Tên user" />
                </div>
                <div className="form-group">
                  <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="phone"  id="phone"  placeholder="Điện thoại" />
                </div>
                <div className="form-group">
                  <select onChange={(event)=>this.isChange(event)} name="permission" className="form-control"  >
                    <option value="">Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderater</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>   
                <div className="form-group">
                  <input type="reset" onClick ={(name, phone, permission)=>this.props.getNewData(this.state.name, this.state.phone, this.state.permission)} className="btn btn-primary btn-block" value="Thêm mới"/>
                </div>   
              </div>
            </div>
            </form>
          </div>
            )
        }
    }
    render() {
      // console.log(this.state)
        return (
            <div>
            {this.showForm()}
            </div>
        )
        
    }
}

export default AddUser;