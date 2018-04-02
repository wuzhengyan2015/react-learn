import React, {Component} from 'react'
import Button from './Button'

export default function({list, searchTerm, onDismiss}) {
    return (
        <div className="table">
      {
        list.map((item) => {
          const HandlerDismiss = () => onDismiss(item.objectID)
          return (
            <div key={item.objectID} className="table-row">
              <span><a href={item.url}>{item.title}</a></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <Button onClick={HandlerDismiss}>
                Dismiss
                </Button>
              </span>
            </div>
          )
        })
      }
      </div>
    )
}