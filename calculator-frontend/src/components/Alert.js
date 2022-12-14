import React from 'react';
import classnames from 'classnames';

export const Alert = (AlertProps) => {


    return (
        <span className={classnames(AlertProps.visible ? "badge bg-danger" : "badge bg-success")}> 
            {AlertProps.message}
        </span>

    )
}