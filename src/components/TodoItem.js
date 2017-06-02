import React from 'react'

export default ({
    description,
    completed = false,
    onCompleted
}) => (
    <label style={{ display: 'block' }}>
        <input type="checkbox" checked={ completed } onChange={ onCompleted } />
        { description }
    </label>
)