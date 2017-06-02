// Libraries
import React from 'react'
// My Components
import TodoItem from './TodoItem'

export default ({
    items,
    onItemCompleted
}) => (
    <div>
    {
        items.map((item, index) => (
            <TodoItem
                { ...item }
                onCompleted={ () => {
                    // Ok I know the index of this item, so call back the onItemCompleted with that item’s index
                    onItemCompleted(index)
                 } }
            />
        ))
    }
    </div>
)