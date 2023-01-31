import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        // Khởi tạo state lưu trữ giá trị của form
        this.state = {
            studentId:"",
            studentName:"",
            age:0,
            sex:false,
            birthDate:"",
            birthPlace:"",
            address:""
        }
    }
    handleChange = (event)=>{
        let name= event.target.name;
        let value= event.target.value;
        // cập nhật vào state
        this.setState({
            [name]:value
        })
    }
    handleSubmitAdd = (event)=>{
        // Lấy thông tin thêm mới --> chuyển về app
        let studentNew = {
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            age: this.state.age,
            sex: this.state.sex,
            birthDate: this.state.birthDate,
            birthPlace: this.state.birthPlace,
            address: this.state.address
        };
          event.preventDefault();
        this.props.submitAddProps(studentNew, false)
    }
    componentWillMount=()=>{
        let {selectedStudent} = this.props;
        this.setState({
            studentId: selectedStudent.studentId,
            studentName: selectedStudent.studentName,
            age: selectedStudent.age,
            sex: selectedStudent.sex,
            birthDate: selectedStudent.birthDate,
            birthPlace: selectedStudent.birthPlace,
            address: selectedStudent.address
        })
    }
    componentWillReceiveProps= (nextProps) =>{
        let {selectedStudent} =nextProps;
        this.setState({
            studentId: selectedStudent.studentId,
            studentName: selectedStudent.studentName,
            age: selectedStudent.age,
            sex: selectedStudent.sex,
            birthDate: selectedStudent.birthDate,
            birthPlace: selectedStudent.birthPlace,
            address: selectedStudent.address
        })
    }
    handleSubmitUpdate= (event)=>{
        event.preventDefault();
        let studentUpdate = {
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            age: this.state.age,
            sex: this.state.sex,
            birthDate: this.state.birthDate,
            birthPlace: this.state.birthPlace,
            address: this.state.address
        };
        this.props.submitUpdateProps(studentUpdate, false);
    }
    render() {
        let {actionName} = this.props;
        let elementBtnSubmit="";
        if (actionName=="ADD"){
            elementBtnSubmit = <button type="submit" className="btn btn-primary me-2" onClick={this.handleSubmitAdd}>
               Create
            </button>
        }else if(actionName == "UPDATE"){
            elementBtnSubmit = <button type="submit" className="btn btn-primary me-2" onClick={this.handleSubmitUpdate}>
               Update
            </button>
        }
        return (
            <div className="col-5 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="studentId" value={this.state.studentId} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="studentName" value={this.state.studentName} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select className="form-control" name="sex" value={this.state.sex} onChange={this.handleChange}>
                                        <option value={true}>Nam</option>
                                        <option value={false}>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input type={'date'} className="form-control" placeholder="dd/mm/yyyy" name="birthDate" value={this.state.birthDate} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <select className="form-control" name="birthPlace" value={this.state.birthPlace} onChange={this.handleChange}>
                                        <option value={'HN'}>Hà Nội</option>
                                        <option value={'HCM'}>TP. Hồ Chí Minh</option>
                                        <option value={'DN'}>Đà Nẵng</option>
                                        <option value={'NA'}>Nghệ An</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>
                                </div>
                            </div>
                            {/* Button Submit*/}
                            {elementBtnSubmit}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;