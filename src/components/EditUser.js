import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: this.props.editUserForm.id,
      name: this.props.editUserForm.name,
      phone: this.props.editUserForm.phone,
      permission: this.props.editUserForm.permission,
    }
  }

  isChange = (e) => {
    var name= e.target.name;
    var value = e.target.value;
    this.setState({
      [name]:value
    });
  }

  getUpdate = () =>{
    var wrapitem = {};
    wrapitem.id = this.state.id;
    wrapitem.name = this.state.name;
    wrapitem.phone = this.state.phone;
    wrapitem.permission = this.state.permission;
    this.props.sendEditUser(wrapitem)
  }

  save = () => {
    this.props.isShowss();
    this.getUpdate();
  }
    render() {
        return (
            <div className="col">
            <form>
      <div className="card border-primary">
        <div className="card-header bg-success text-white text-center">Sửa thông tin User</div>
        <div className="card-body text-primary">
          {/* <h4 class="card-title">Tên user</h4> */}
          <div className="form-group">
            <input onChange={(e)=>this.isChange(e)} defaultValue={this.props.editUserForm.name}  type="text" className="form-control" name="name" id="name"  placeholder="Tên user" />
          </div>
          <div className="form-group">
            <input onChange={(e)=>this.isChange(e)} defaultValue={this.props.editUserForm.phone}  type="text" className="form-control" name="phone"  id="phone"  placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <select onChange={(e)=>this.isChange(e)} defaultValue={this.props.editUserForm.permission}   name="permission" className="form-control"  >
              <option value="">Chọn quyền mặc định</option>
              <option value={1}>Admin</option>
              <option value={2}>Moderater</option>
              <option value={3}>Normal</option>
            </select>
          </div>   
          <div className="form-group">
            <input type="button"
                onClick ={()=>this.save()}
            
             className="btn btn-success btn-block" 
             value="Save"/>
          </div>   
        </div>
      </div>
      </form>
    </div>
        );
    }
}

export default EditUser;