import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

// !this currently just deletes the top item from list

export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state ={
            list: ['sample task'],
            newItem: '',
            doneList: ['sample completed task']
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        e.preventDefault();
        this.setState({
            list: [...this.state.list, this.state.newItem],
            newItem: ''
        })
    }

    removeDoneItem(item){
        this.setState({
            doneList: this.state.doneList.filter(foo => foo !==item)
        })
    }
    removeItem(item){
        // const newList = [...this.state.list]; newList.splice(index, 1);
        this.setState({
            list: this.state.list.filter(foo => foo !== item)
        })

        this.setState({
            doneList: [...this.state.doneList, item]
        })
    }

    addItemHandler(e){
        this.setState({ newItem: e.target.value })
    }
    

    render(){
        return(
            <div>
                    <h3>ToDo List</h3>
                <form onSubmit={this.addItem}>
                    <input type="text" value={this.state.newItem} required onChange={(e) => this.addItemHandler(e)}/>
                    <Button type='submit'>Add Item</Button>
                </form>
                <br />
                <Table striped>
                    <tbody>
                        {this.state.list.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                                <Button color='success' type='button' onClick={() => this.removeItem(item)}>Done!</Button>
                                {/* <input type="button" value='Delete' onClick={(index)=> this.removeItem(index)} /> */}
                            </tr>
                        ))}
                    {/* <ItemList items={this.state.list} removeItem={this.removeItem}/> */}
                    </tbody>
                </Table>
                <h3>Tasks Completed</h3>
                <Table striped>
                    <tbody>
                        {this.state.doneList.map((item) =>(
                            <tr>
                                <td>{item}</td>
                                <Button color='danger' type='button' onClick={() => this.removeDoneItem(item)}>Delete</Button>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

// class ItemList extends Component{
//     render(){
//         return(
//             <div>
//                 {this.props.items.map((item) =>{
//                     return <Item passingItem={item} />
//                 })}
//             </div>
//         )
//     }
// }

// const Item = (props) =>{
//     return(
//         <div>
//             <tr key={index}>
//                 <td>{props.passingItem}</td>
//                 <input type="button" value='Delete' onClick={(index)=> props.removeItem(index)} />
//             </tr>
//         </div>
//     )
// }