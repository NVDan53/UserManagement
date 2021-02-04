import React, { Component } from 'react';

class TableDataRow extends Component {
    // Viết hàm bên ngoài rồi truyền vào html
    renderRole = () =>{
        if(this.props.permission == 1) {return "Admin"}
        else if( this.props.permission == 2) {return "Moderator"}
        else return "Normal";
    }

    EditClick = () => {
      this.props.isShows()
      this.props.check2()
    }

    // deleteClick = () => {
    //    return this.props.id;
    // }
    render() {
        return (
            <tr>
            <td >{this.props.stt}</td>
            <td>{this.props.name}</td>
            <td>{this.props.phone}</td>
            <td>{this.renderRole()}</td>
            <td>
              <div className="btn-group">
                <div className="btn btn-warning sua">
                  <i className="fa fa-edit" onClick={()=>this.EditClick()}>Sửa</i>
                </div>
                <div className="btn btn-danger xoa">
                  <i className="fa fa-trash" onClick={(val)=> this.props.deleteClick(this.props.id)}>Xóa</i>
                </div>
              </div>
            </td>
          </tr>
        );
    }
}

export default TableDataRow;