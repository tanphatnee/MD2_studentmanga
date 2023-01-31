import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';
import { Component } from 'react';

class App extends Component {
  // Khởi tạo danh sách sinh viên
  constructor(props) {
    super();
    this.state = {
      students: [{ studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2003-04-15", birthPlace: "HN", address: "Số 1 Phạm Hùng" },
      { studentId: "SV002", studentName: "Nguyễn Thị B", age: 22, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "Số 1 Trần Duy Hưng" },
      { studentId: "SV003", studentName: "Nguyễn Văn C", age: 18, sex: true, birthDate: "2005-11-22", birthPlace: "HCM", address: "22 Lý Tự Trọng" }
      ],
      searchData: '',
      sortDir: '',
      sortBy: '',
      isToggle: false,
      actionName:"",
      selectedStudent:{}
    }
  }
  // B1: tạo function để nhận dữ liệu truyền từ Control lên App
  handleSearch = (searchData) => {
    //set vào state
    this.setState({
      searchData: searchData
    })
  }
  handleSort = (sortDir, sortBy) => {
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy
    })
  }
  handleAddStudent = (toggle,actionName)=>{
    // nhan du lieu khi click button them moi sinh vien
    //--> Cap nhat lai state:isToggle,actionName
    this.setState({
      isToggle:toggle,
      actionName: actionName
    })
  }
  handleSubmitAdd = (stNew, toggle)=>{
    //nhận thông tin đối tượng cần thêm mới lên form
    //--> cập nhật state: students
    this.setState({
      students:[...this.state.students,stNew],
      isToggle: toggle
    })
  }
  handleUpdateStudent=(selectedStudent,toggle,actionName)=>{
    this.setState({
      actionName:actionName,
      isToggle:toggle,
      selectedStudent:selectedStudent

    })
  }
  handleSubmitUpdate = (stUpdate, toggle)=>{
    let students = [];
     for (let i = 0; i < this.state.students.length; i++) {
        if(this.state.students[i].studentId==stUpdate.studentId){
          students.push(stUpdate);
        }else{
          students.push(this.state.students[i]);
        }
      }
      
      this.setState({
        isToggle: toggle,
        students:students
      })
  }
  render() {
    // ẩn hiện form
    let elementForm = "";
    if(this.state.isToggle){
      // hien thi form
      elementForm =  <Form actionName={this.state.actionName} submitAddProps = {this.handleSubmitAdd} selectedStudent={this.state.selectedStudent} submitUpdateProps={this.handleSubmitUpdate}></Form>;
    }
    // Lọc dữ liệu theo searchData
    let students = [];
    if (this.state.searchData == '') {
      students = [...this.state.students];
    } else {
      //Có dữ liệu search
      this.state.students.forEach(st => {
        if (st.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
          students.push(st);
        }
      })
    }
    //Sắp xếp dữ liệu
    if (this.state.sortDir != '') {
      if (this.state.sortDir == "studentName") {
        //Sắp xếp theo tên sinh viên
        if (this.state.sortBy == "ASC") {
          // Sắp xếp theo tên sinh viên tăng dần
          students.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0);
        } else {
          //Sắp xếp theo tên sinh viên giảm dần
          students.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0);
        }
      } else {
        // Sắp xếp theo tuổi sinh viên
        if (this.state.sortBy == "ASC") {
          // Sắp xếp theo tuổi sinh viên tăng dần
          students.sort((a, b) => a.age - b.age);
        } else {
          //Sắp xếp theo tuổi sinh viên giảm dần
          students.sort((a, b) => b.age - a.age);
        }
      }
    }


    return (
      <div className="App" >
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              {/* B2. Truyền props map với hàm nhận dữ liệu */}
              <Control handleSearchProps={this.handleSearch} handleSort={this.handleSort} addprops={this.handleAddStudent}></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent students={students} updateProps={this.handleUpdateStudent}></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
          {/* END FORM SINH VIÊN */}
        </div>

      </div>
    );
  }
}

export default App;
