import React from 'react'
import ShoppingListItem from './ShoppingListItem'
import {data} from '../data.js'

export default function ShoppingList() {
  return (
    <div>
        {
            data.map(d=><ShoppingListItem item={d} />)
        
        }
    </div>
  )
}
