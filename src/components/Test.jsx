import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { props, useState } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.MyTask = props.task
    }


    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label>Item</label>
                        </td>
                        <td>
                            <input type="text" id="txttask" name="txttask" value={this.props.task} onChange={this.props.handleChangeTask}  />
                        </td>
              
                        <td>
                            <label>Price</label>
                        </td>
                        <td>
                            <input type="text" id="txtprice" name="txtprice" value={this.props.price} onChange={this.props.handleChangePrice}  />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <input type="button" value="ADD"  onClick={this.props.handleClick} />
                        </td>
                    </tr>
                    </tbody>
                </table>
               
               
            </div>
        );
    }
}

Test.propTypes = {

};

export default Test;