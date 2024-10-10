/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyTasks extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {

        return (
           <>
            <table border={2} cellPadding={2} cellSpacing={2} >
              <thead>
                <th>No.</th>
                <th>Task</th>
                <th>Price</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {this.props.Alltasks.map((item,i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.Task}</td>
                      <td>{item.Price}</td>
                      <td><input type="button" id={i} className='delete' value="DELETE" onClick={this.props.handleDeletePrice} />
                        
                      </td>
                   </tr>
                ))}
              </tbody>
          </table>
        
           </>

        );
    }
}

MyTasks.propTypes = {

};

export default MyTasks;