import React from 'react'

function WithLoding (Component) {
    return function(props) {
        const {isLoading} = props
        return (
            <div>
                {
                    isLoading ?
                    <div>Loading...</div>
                    : <Component {...props}></Component>
                }
            </div>
        )
    }
}

export default WithLoding
