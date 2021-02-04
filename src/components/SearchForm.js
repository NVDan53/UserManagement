import React, { Component } from 'react';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './DuLieu.json';
import { v4 as uuidv4 } from 'uuid';
class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hienThiForm : true,
            data: [],
            searchText: "",
            isEdit: false,
            editUser:{},
          
            
        }
    }
    changeStatus = () =>{
        return (
            this.setState({
                hienThiForm: !this.state.hienThiForm
            })
        )
    }
    getTextSearch =(data) => {
        this.setState(
            {
                searchText:data,
            }
        );
    }

    // Filter ra cái mảng mà có từ cần tìm kiếm
    renderData = () =>{
       return(
        Data.filter((val,index)=>{
            return (val.name.indexOf(this.state.searchText) !== -1)
        })
       )
    }
    getNewData = (name, phone, permission) =>{
        var item ={};
        item.id = uuidv4();
        item.name = name;
        item.phone = phone;
        item.permission = permission;
        var itemArray = this.state.data;
        itemArray.push(item);
        this.setState({
            data: itemArray
        });
        localStorage.setItem('DataUser', JSON.stringify(itemArray));
    }

    isShow = () => {
        return (
            this.setState({
                isEdit : !this.state.isEdit
            })
        )
    }
    //check Connect
    checkConnect = (user) => {
        // console.log(user)
        this.setState({
            editUser: user
        });
    
    }

    // getEditUserInfor
    getEditUser =(user) =>{
         this.state.data.forEach((val,index)=>{
            if(val.id == user.id){
                    val.name = user.name;
                    val.phone = user.phone; 
                    val.permission = user.permission
            }
        })
        localStorage.setItem('DataUser', JSON.stringify(this.state.data));
    }

    deleteClick = (itemId) => {
        var NewObj=this.state.data.filter(val=> val.id !== itemId);
        this.setState({
            data:NewObj
        });
        localStorage.setItem('DataUser', JSON.stringify(NewObj));
    }

    
    componentWillMount() {
    // kiem tra xem có localStorage chưa
     
        if(localStorage.getItem('DataUser') === null) {
            localStorage.setItem('DataUser', JSON.stringify(Data))
        }
        else{
            var temp = JSON.parse(localStorage.getItem('DataUser'));
            this.setState({
                data :temp
            });
           
        }
    }
    
    render() {
        // localStorage.setItem("tao:", "Dan nè");
        // localStorage.getItem("tao");
        // localStorage.removeItem("tao");
        return (
            <div className="container">
                <div className="row">
                    <Search getEditUser={(val)=>this.getEditUser(val)} editUserForm={this.state.editUser} isShows ={()=>this.isShow()} editUser={this.state.isEdit} getConnect={(data)=>this.getTextSearch(data)}   showButton ={this.state.hienThiForm} changeStatus={()=>this.changeStatus()} />
                    <TableData deleteClick={(val)=>this.deleteClick(val)} isShows ={()=>this.isShow()} check1={(user)=>this.checkConnect(user)} data ={this.renderData()}/>
                    <AddUser getNewData={(name, phone, permission)=>this.getNewData(name, phone, permission)} hienThiForm={this.state.hienThiForm} />
                </div>
            </div>
        );
    }
}

export default SearchForm;