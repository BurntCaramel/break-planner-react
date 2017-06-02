import React, { Component } from 'react';
import TodoList from './components/TodoList'
import './App.css';

const initialItems = [
  {
    description: 'Learn React',
    completed: false
  },
  {
    description: 'Relax',
    completed: false
  }
]

class App extends Component {
  state = {
    items: initialItems
  }

  handleItemCompleted = (itemIndex) => {
    this.setState(prevState => {
      // Transform the previous items, into having the item now completed
      const newItems = prevState.items.map((item, currentIndex) => {
        if (currentIndex === itemIndex) {
          // Change the .completed of the item
          return {
            ...item,
            completed: true
          }
        }
        else {
          // Leave it unchanged
          return item
        }
      })

      // Return the things I want changed in the state
      return {
        items: newItems
      }
    })
  }

  render() {
    return (
      <main>
        <h1>Break Planner</h1>
        <TodoList
          items={ this.state.items }
          onItemCompleted={ this.handleItemCompleted }
        />
      </main>
    );
  }
}

export default App;
