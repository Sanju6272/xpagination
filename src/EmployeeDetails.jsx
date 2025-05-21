import React from "react";
import { useState, useEffect } from "react";

export default function EmployeeDetails({employee}) {
    return (
            <tr style={{border : '10px'}}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.role}</td>
            </tr>
    )
}