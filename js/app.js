import Alpine from 'alpinejs'

window.Alpine = Alpine

window.todoStore = {
	todos: JSON.parse(localStorage.getItem('todo-mvc') ?? '[]'),
	save: function () {
		localStorage.setItem('todo-mvc', JSON.stringify(this.todos))
	}
}

Alpine.data('todoApp', () => ({
	...todoStore,
	newTodo: '',
	editingTodo: null,
	filter: 'all',
	addTodo: function () {
		if (!this.newTodo.trim()) return

		this.todos.push({
			id: Date.now(),
			body: this.newTodo,
			completed: false
		});

		this.save()

		this.newTodo = ''
	},
	deleteTodo: function (todo) {
		const position = this.todos.indexOf(todo)

		if (position !== -1) {
			this.todos.splice(position, 1)

			this.save()
		}
	},
	editTodo: function (todo) {
		todo.prevBody = todo.body

		this.editingTodo = todo

		this.$nextTick(() => {
			const input = document.querySelector('li.editing input.edit')

			input?.focus()
		})
	},
	updateTodo: function (todo) {
		if (todo.body.trim() === '') {
			this.deleteTodo(todo)
		}

		this.save()

		this.editingTodo = null
	},
	revertEdit: function (todo) {
		todo.body = todo.prevBody

		delete todo.prevBody

		this.editingTodo = null
	},
	toggleTodoCompletion: function (todo) {
		todo.completed = !todo.completed

		this.save()
	},
	toggleAllTodos: function () {
		let allCompleted = this.isAllCompleted

		this.todos.forEach((todo) => todo.completed = !allCompleted)

		this.save()
	},
	clearCompletedTodos: function () {
		this.todos = this.activeTodos

		this.save()
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
	},
	get isAllCompleted() {
		return this.todos.length === this.completedTodos.length
	}
}))

Alpine.start()
