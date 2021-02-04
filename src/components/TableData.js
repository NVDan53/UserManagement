import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
class TableData extends Component {
  renderData = () =>  (this.props.data).map((val,index)=>{
    return (
      <TableDataRow 
      deleteClick ={(val) =>{this.props.deleteClick(val)}}
      isShows ={()=>this.props.isShows()} 
      check2={(user)=>this.props.check1(val)} 
      id={val.id} stt={index + 1}  name={val.name} phone={val.phone} permission={val.permission}/>
    )
  })
  render() {
        return (
            <div  className="col">
  <table className="table table-striped table-inverse table-hover">
    <thead className="thead-inverse">
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Điện thoại</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
    {
     this.renderData()
    }          
     
     
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;