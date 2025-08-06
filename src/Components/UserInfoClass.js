import React from 'react'


class UserInfoClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        const { name } = this.props
        const { count } = this.state

        return (
            <>
                <div>
                    <h2>Count: {count}</h2>
                    <button onClick={() => {
                        this.setState({
                            count: count + 1
                        })
                    }}>Increase Count</button>
                    <h3>Class Component</h3>
                    <h3>Name: {name}</h3>
                    <h3>Email: harish.salve@gmail.com</h3>
                    <h3>Address: Pune</h3>
                </div>
            </>
        )
    }
}

export default UserInfoClass