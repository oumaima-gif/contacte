import React from 'react';

 class AddContact extends React.Component() {
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Phone:"",
            ville:"",
        };
    }
    submitForm = (event)=> {
        event.preventDefault();
        const contact = {
            Name: this.state.Name,
            Phone: this.state.Phone,
            ville: this.state.ville,
        };
        this.props.addContact(contact);
        this.setState({Name:"",Phone:"",ville:""});
    };

     render() {
        return (
            <div className='row my-5'>
                <div className='col-md-6 mx-auto card bg-white'>
                    <form onSubmit={(event) => this.submitForm(event)} method='post'  className="p-2">
                        <div className='form-group'>
                            <input type={'text'} name="Name" 
                              className="form-control" placeholder='Nom & Prenom' 
                              value={this.state.Name} onChange={(event) => this.setState({Name: event.target.value})} autoComplete="off" />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <input type={'text'} name="Phone" 
                             autoComplete="off" className="form-control" placeholder='Telephone' 
                               onChange={(event) => this.setState({Phone: event.target.value})} value={this.state.Phone}/>
                        </div>
                        <br/>
                        <div className='form-group'>
                            <input type={'text'} name="ville" 
                             autoComplete="off"  className="form-control" placeholder='ville' 
                             value={this.state.ville}  onChange={(event) => this.setState({ville: event.target.value})}/>
                        </div>
                        <br/>
                        <div className='form-group'>
                            <input type={'Button'} onClick={(event)=>console.log(event)}
                              className="btn btn-primary" value="Valider"/>
                        </div>
                    </form>
                </div>
        
            </div>
        );
     };
    };
    

export default AddContact;