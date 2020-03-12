import React, { Component } from 'react';
import Paginate from 'react-js-pagination';
import { storeTable } from './data'
export default class Dashboard extends Component {
    state = {
        details: storeTable,
        disabled: false,
        search: '',
        activePage: 1,
        itemsPerPage: 10,
    }


    displayDetails = (details) => details.map((detail, index) => {
        return (
            <tr key={index}>
                <td>
                    {detail.edit ? <input value={detail.name} type="text" name="name" onChange={(e) => this.handleChange(e, index)} /> : detail.name}
                </td>
                <td>
                    {detail.edit ? <input value={detail.department} type="text" name="department" onChange={(e) => this.handleChange(e, index)} /> : detail.department}
                </td>
                <td>
                    {detail.edit ? <input value={detail.phone} type="text" name="phone" onChange={(e) => this.handleChange(e, index)} /> : detail.phone}
                </td>
                <td className="text-center">
                    {detail.edit ? <button onClick={() => this.addDetails(index)} className="btn btn-info" >Add</button> :
                        <button className="ml-2 btn btn-warning bordered warning" onClick={() => this.editDetails(index)}  >edit</button>}
                    <button className="ml-2 btn btn-danger bordered danger bg-danger" onClick={() => this.deleteRow(index)}>delete</button>
                </td>
            </tr>
        )
    })
    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0, 20)
        })
    }
    addRow = () => {
        let rows = [...this.state.details]
        this.setState({ details: rows.concat([{ name: "", department: "", phone: "", edit: true }]), disabled: true })
    }
    editDetails = (i) => {
        let details = [...this.state.details]
        details[i].edit = true;
        this.setState({ details, disabled: true })
        console.log(details)
    }
    addDetails = (i) => {
        let details = [...this.state.details]
        const { name, department, phone } = details[i];
        if (!name.length) {
            alert("Fill all the name")
            return false
        } else if (!department.length) {
            alert("Fill all the department")
            return false
        } else if (!phone.length) {
            alert("Fill all the Phonenumber")
            return false
        }
        else {
            details[i].edit = false;
            this.setState({ details, disabled: false })
        }

    }
    handleChange = (e, i) => {
        console.log(e.target.name)
        let details = [...this.state.details];
        details[i][e.target.name] = e.target.value;
        this.setState({ details })
    }
    deleteRow = (id) => {
        let details = [...this.state.details]
        details.splice(id, 1)
        this.setState({ details: details })

    }
    render() {
        const { activePage, itemsPerPage, details } = this.state;
        const indexOfLastDetail = activePage * itemsPerPage;
        const indexOfFirstDetail = indexOfLastDetail - itemsPerPage;
        const currentDetails = details.slice(indexOfFirstDetail, indexOfLastDetail);



        let filteredDetails = this.state.details.filter(
            (detail) => {
                return detail.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || detail.department.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || detail.phone.toString().indexOf(this.state.search.toString()) !== -1
            }
        )
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-5">
                        <div className="col-md-8 text-right">
                            <h1 >UserDetails</h1>
                        </div>
                        <div className="card">
                            <div className="row p-2">
                                <div className="col-lg-8 text-center">


                                    <input type="text" placeholder="search"
                                        className="input-search"
                                        value={this.state.search}
                                        onChange={this.updateSearch}
                                    />
                                </div>
                                <div className="col-lg-4 ">
                                    <button disabled={this.state.disabled} className="btn  btn-info float-right" onClick={this.addRow}><i className="fa fa-plus"></i>Add New</button>

                                </div>
                            </div>
                            <table className="table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Phone</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.search ? this.displayDetails(filteredDetails) : this.displayDetails(currentDetails)}

                                </tbody>
                            </table>


                        </div>


                    </div>
                </div>


                <div className="d-flex justify-content-center mt-4">
                    < Paginate
                        activePage={activePage}
                        itemsPerPage={itemsPerPage}
                        totalItemsCount={450}
                        onChange={this.handlePageChange}
                        linkClass="page-link"
                        itemClass="page-item"
                        prevPageText='prev'
                        nextPageText='next'
                        firstPageText='first'
                        lastPageText='last'

                    />
                </div>

            </div>
        )
    }
}
