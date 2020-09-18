const todo = [{
    title: 'walk Molly',
    completed: false
}, {
    title: 'bake bread',
    completed: true
}, {
    title: 'knit sweater',
    completed: false
}, {
    title: 'paint picture',
    completed: true
}]

const filters = {
    searchText: ''
}

const hideCompleted = {
    status: false
} //this needs to be update if box is checked

const renderItems = function (array, filters) {

    if (hideCompleted.status === true) {

        let filteredItems = array.filter(function (item, index) {
            return item.title.toLowerCase().includes(filters.searchText.toLowerCase() && !item.completed)
        })

        document.querySelector('#todos').innerHTML = ''


        filteredItems.forEach(function (item, index) {
            const newEl = document.createElement('p')
            newEl.textContent = item.title
            document.querySelector('#todos').appendChild(newEl)
        })
    } else {

        let filteredItems = array.filter(function (item, index) {
            return item.title.toLowerCase().includes(filters.searchText.toLowerCase())
        })

        document.querySelector('#todos').innerHTML = ''

        filteredItems.forEach(function (item, index) {
            const newEl = document.createElement('p')
            newEl.textContent = item.title
            document.querySelector('#todos').appendChild(newEl)
        })
    }

    document.querySelector('#summary').innerHTML = ''

    // const incomplete = filteredItems.filter(function (item, index) {
    //     return !item.completed
    // })

    // const summary = document.createElement('p')
    // summary.textContent = `You have ${incomplete.length} of the visible tasks left to complete`
    // document.querySelector('#todos').appendChild(summary)
}

renderItems(todo, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderItems(todo, filters)
})

// 1.Create a form with a single input for todo text
// 2.Set up a submit handler and cancel the default action
// 3. Add a new note item to the todos array with that text data (completed value of false)
// 4. Rerender the application
// 5. Clear the input field value

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault() // prevents default behaviour (refresh)
    todo.push({
        title: e.target.elements.todoText.value,
        completed: false
    })
    renderItems(todo, filters)
    e.target.elements.todoText.value = ''
})

// 1. Create a checkbox and set up event listener --> "Hide Completed"
// 2. Create a new hideCompletedFilter (default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Set up renderTodos to remove completed items --> forEach splice etc on completed items?

document.querySelector('#check').addEventListener('change', function (e) {
    console.log(e.target.checked)
    hideCompleted.status = e.target.checked
    renderItems(todo, filters)
})