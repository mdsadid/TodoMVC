import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('todoApp', () => ({
	todos: [],
	newTodo: '',
	editingTodo: null,
	filter: 'all',
	addTodo: function () {
		if (!this.newTodo.trim()) return

		this.todos.push({
			id: this.todos.length + 1,
			body: this.newTodo,
			completed: false
		});

		this.newTodo = ''
	},
	deleteTodo: function (todo) {
		const position = this.todos.indexOf(todo)

		if (position !== -1) {
			this.todos.splice(position, 1)
		}
	},
	editTodo: function (todo) {
		todo.prevBody = todo.body

		this.editingTodo = todo

		this.$nextTick(() => this.$refs.editField.focus())
	},
	updateTodo: function (todo) {
		if (todo.body.trim() === '') {
			this.deleteTodo(todo)
		}

		this.editingTodo = null
	},
	revertEdit: function (todo) {
		todo.body = todo.prevBody

		delete todo.prevBody

		this.editingTodo = null
	},
	get activeTodos() {
		return this.todos.filter(todo => !todo.completed)
	},
	get completedTodos() {
		return this.todos.filter(todo => todo.completed)
	},
	get filteredTodos() {
		return {
			all: this.todos,
			active: this.activeTodos,
			completed: this.completedTodos,
		}[this.filter]
	}
}))

Alpine.start()
