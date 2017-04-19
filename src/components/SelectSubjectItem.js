import React, { Component } from 'react';
import { findById } from '../api/subject'

class SelectSubjectItem extends Component {
    render() {
        const { data,checkTimeClick,removeListSectionClick,removeClick } = this.props
        const subjectName = findById(data.course_id).name
        return (
           <tr>
				<td className="col-md-2 col-xs-2 col-sm-2 col-lg-2">{ data.course_id }</td>
				<td className="col-md-5 col-xs-5 col-sm-5 col-lg-5"> { subjectName } </td>
				<td className="col-md-2 col-xs-2 col-sm-2 col-lg-2">{ data.prof }</td>
				<td className="col-md-1 col-xs-1 col-sm-1 col-lg-1"><button className="btn btn-success" type="button" onClick={ ()=>checkTimeClick(data) }>Add</button></td>
                <td className="col-md-1 col-xs-1 col-sm-1 col-lg-1"><button className="btn btn-danger" type="button"  onClick={ ()=>removeClick(data) }>Remove</button></td>
				<td className="col-md-1 col-xs-1 col-sm-1 col-lg-1"><button className="btn btn-defalut" onClick={ ()=>removeListSectionClick(data) }>X</button></td>
			</tr> 
        );
    }
}

export default SelectSubjectItem;