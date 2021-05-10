import React from 'react' 


class AccountInput extends React.Component {

    state = {
        name: '', 
        balance: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
// 
    render() {
        return (
            <div>
                <form>
                    <br></br><label>Checking Account Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange} />

                    <br></br><label>Checking Account Balance: </label>
                    <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange} />

                </form>
            </div>
        )

    }

}

export default AccountInput