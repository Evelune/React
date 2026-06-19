import React from "react";


//React Component  is bsically a class whcih is give by react and classcontact inherit some property from react.component
class ClassContact extends React.Component {

    
    constructor(props){
        super(props);

        this.state = {
            userInfo :{
                name : "Dewang",
                location : "Dummy",
            }
        };

        console.log("Constructor Called")
        console.log(this.state.userInfo);

    }   
    
    async componentDidMount(){
            const data = await fetch("https://api.github.com/users/evelune");
            const json = await data.json()
            
            this.setState({
                userInfo : json
            })
            
            console.log("ComponentDidMount Called")
            console.log(json);

        }

    componentDidUpdate(){
        console.log("ComponentDidUpdate Called");
    }


    render() {
        const {login , id ,avatar_url} = this.state.userInfo;
        console.log("Rendered Called")


        return (
            <div className="classContact">
                <img src={avatar_url} style={{width:"150px"}}></img>
                <h1>Name :{login}</h1>
                <h2>Id :{id}</h2>
            </div>
        )
    }
}

export default ClassContact ;