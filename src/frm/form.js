import React, { Component } from "react"
import Show from './show'
class From extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            country: "",
            gender: "",
            id: 1
        }
    }
    changeHandelar = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    sub = (e) => {
        e.preventDefault()
        this.setState({
            name: "",
            email: "",
            phone:"",
            address: "",
            country: "",
            gender: "",
            skill: "",
            id: this.state.id + 1
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.sub}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={this.changeHandelar} type="name" name="name" className="form-control" value={this.state.name} id="name" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.changeHandelar} type="email" name="email" className="form-control" value={this.state.email} id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Number</label>
                        <input onChange={this.changeHandelar} type="number" name="phone" className="form-control" value={this.state.phone} id="phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input onChange={this.changeHandelar} type="text" name="address" className="form-control" value={this.state.address} id="address" />
                    </div>
                    <div className="form-check">
                        <input onChange={this.changeHandelar} className="form-check-input" value="male" type="radio" name="gender" id="male" />
                        <label className="form-check-label" htmlFor="male">Male </label>

                    </div>
                    <div className="form-check">
                        <input onChange={this.changeHandelar} className="form-check-input" value="female" type="radio" name="gender" id="female" />
                        <label className="form-check-label" htmlFor="female">Female </label>

                    </div>
                    <div className="form-check">
                        <input onChange={this.changeHandelar} className="form-check-input" value="other" type="radio" name="gender" id="other" />
                        <label className="form-check-label" htmlFor="other">Other </label>
                    </div>

                    <div className="form-group mt-2">
                        <select onChange={this.changeHandelar} id="country" name="country" className="custom-select">
                            <option selected>Select your Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Englind">Englind</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default From