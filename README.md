# Zustand Task Manager Demo

A simple task management application built with React and Zustand to demonstrate state management capabilities.

## Features

- Add, toggle, and delete tasks
- Filter tasks by status (all, active, completed)
- Clear all completed tasks
- Modern and responsive UI
- Efficient state management with Zustand

## Technologies Used

- React
- Zustand (for state management)
- CSS3 (modern styling)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/zustand-demo.git
```

2. Navigate to the project directory
```bash
cd zustand-demo
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
zustand-demo/
├── src/
│   ├── store/
│   │   └── useStore.js      # Zustand store configuration
│   ├── App.js              # Main application component
│   ├── App.css             # Styles
│   └── index.js            # Entry point
├── public/
│   └── index.html
└── package.json
```

## Usage

1. **Adding Tasks**
   - Type your task in the input field
   - Press Enter or click "Add Task"

2. **Managing Tasks**
   - Click the checkbox to toggle task completion
   - Click the delete button to remove a task

3. **Filtering Tasks**
   - Use the filter buttons to show all, active, or completed tasks
   - Click "Clear Completed" to remove all completed tasks

## State Management with Zustand

This project demonstrates several key Zustand concepts:

- Creating a store with `create`
- Managing state with actions
- Accessing state in components
- Updating state immutably
- Deriving state (filtered tasks)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Zustand](https://github.com/pmndrs/zustand) - Simple state management
- [React](https://reactjs.org/) - UI library
- [Create React App](https://create-react-app.dev/) - Project bootstrapping
