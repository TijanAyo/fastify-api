let items = require('../items')
const { v4:uuid } = require('uuid')

const getallItems = (req, reply) => {
    return reply.send(items)
}

const getoneItem = (req, reply) => {
    const {id} = req.params

    const item = items.find(item => item.id == id )

    return reply.send(item)
}

const addItem = (req, reply) => {
    const {name} = req.body

    const item = {
        id: uuid(),
        name
    }

    // PUSH 
    items = [...items, item]

    return reply.code(201).send(item)

}

const updateItem = (req, reply) => {
    const {id} = req.params
    const {name} = req.body

    items = items.map((item) => (item.id === id ? {id, name} : item))

    item = items.find((item) => item.id === id)

    reply.send(item)
}

const deleteItem = (req, reply) => {
    const {id} = req.params

    items = items.filter((item) => item.id !== id)

    return reply.send({message: `${id} removed okay`})
}

module.exports = {
    getallItems, getoneItem, addItem, deleteItem, updateItem
}