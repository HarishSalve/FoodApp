import UserInfo from "./UserInfo"
import UserInfoClass from "./UserInfoClass"
import React from 'react'

class AboutUs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "Harish Salve"
        }
        console.log('ParentAbout Us Constructor')
    }

    componentDidMount(){
        console.log('Parent Component Mounted')
        this.interval  = setInterval(()=>{
            console.log('namste React')
        },1000)
    }

    componentDidUpdate(){
        console.log('Parent Component Updated', this.state)

    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log('Parent Component Unmounted')
    }  

    render(){
        console.log('Parent About Us Render')

       return (
        <div>
            <UserInfo  name={"Harish Salve"}/> 
            {/*<UserInfoClass name={"Harish Salve"}/>*/}

        </div>
    )
    }
}
// const AboutUs = () => {
//     return (
//         <div>
//             <UserInfo  name={"Harish Salve"}/>
//             <UserInfoClass name={"Harish Salve"}/>
//         </div>
//     )
// }

export default AboutUs