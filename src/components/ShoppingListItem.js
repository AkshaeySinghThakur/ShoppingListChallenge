import React from 'react'

export default function ShoppingListItem(props) {
  return (
    <div>
        <p>{props.item.title}</p>
        <p><small>{props.item.accessory}</small></p>
        <p>{props.item.status}</p>
    </div>
  )
}
