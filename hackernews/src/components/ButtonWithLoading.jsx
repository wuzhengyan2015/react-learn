import React, {Component} from 'react'

function Button({onClick,className = '',children}) {
    return (
        <button onClick={onClick} className={className}
            type="button"
            className="button-inline">
            {children}
        </button>
    )
}

function Loading(){
    return (
        <div>loading</div>
    )
}

const withLoading = (Component) => ({isLoading, ...rest}) => {
    return isLoading ? <Loading/> : <Component {...rest} />
}
export default withLoading(Button)