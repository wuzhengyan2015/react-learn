import React, {Component} from 'react'

export default function({onClick,className = '',children}) {
    return (
        <button onClick={onClick} className={className}
            type="button"
            className="button-inline">
            {children}
        </button>
    )
}