import React, { Component } from 'react';
class Control extends Component {
    constructor(props) {
        super();
        this.state = {
            searchData: ''
        }
    }
    handleSearch = (e) => {
        e.preventDefault();
        //Lấy dữ liệu nhập vào ô search
        // B3. Gọi props từ App truyền sang
        this.props.handleSearchProps(this.state.searchData);
    }
    handleChange = (e) => {
        this.setState({
            searchData: e.target.value
        })
    }
    handleSort = (e) => {
        let sortData = e.target.value;
        let arrSort = sortData.split('-');
        this.props.handleSort(arrSort[0], arrSort[1]);
    }
    handleAdd = ()=>{
        this.props.addprops(true,"ADD");
    }
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text"onClick = {this.handleAdd}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                name="search"
                                id="search"
                                onChange={this.handleChange}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" onChange={this.handleSort}>
                            <option value="">Chọn sắp xếp</option>
                            <option value="studentName-ASC">Tên tăng dần</option>
                            <option value="studentName-DESC">Tên giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DESC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
export default Control;