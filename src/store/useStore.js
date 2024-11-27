import { create } from 'zustand';

const useStore = create((set) => ({
  tasks: [],
  filter: 'all', // all, active, completed

  addTask: (title) => 
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), title, completed: false }]
    })),

  toggleTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    })),

  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter(task => task.id !== taskId)
    })),

  setFilter: (filter) => set({ filter }),

  clearCompleted: () =>
    set((state) => ({
      tasks: state.tasks.filter(task => !task.completed)
    })),
}));

export default useStore;
