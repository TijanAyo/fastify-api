const {getallItems, getoneItem, addItem, deleteItem, updateItem} = require('../controllers/items')

// OPTIONS FOR GET ALL ITEMS
const getallOption = {
    schema:{
        response:{
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {type: 'string'},
                        name: {type: 'string'}
                    }
    
                }
            }
        }
    },
    handler: getallItems
}

// OPTIONS FOR GET ONE ITEM
const getoneOption = {
    schema:{
        response:{
            200:{
                type: 'object',
                properties:{
                    id: {type: 'integer'},
                    name: {type: 'string'}
                }
            }
        }
    },
    handler: getoneItem
}

// ADD ITEM
const postitemOption = {
    schema:{
        reponse:{
            body: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: {type: 'string'}
                }
            },
            201:{
                type: 'object',
                properties: {
                    id: {type: 'string'},
                    name: {type: 'string'}
                }
            }
        }
    },
    handler: addItem
}

// DELETE ITEM
const deleteitemOption = {
    schema:{
        response:{
            200:{
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            }
        }
    },
    handler: deleteItem
}

// UPDATE ITEM
const updateoneOption = {
    schema:{
        response:{
            201:{
                type: 'object',
                properties: {
                    name: {type: 'string'}
                }
            }
        }
    },
    handler: updateItem
}

function itemHandler (fastify, options, done){

    fastify.get('/', (req, reply) => {
        return reply.send('Hello World')
    })
    
    // GET ALL ITEMS
    fastify.get('/items', getallOption)
    
    // GET A SINGLE ITEM
    fastify.get('/items/:id', getoneOption)

    // ADD ITEM
    fastify.post('/items', postitemOption)

    // UPDATE ITEM
    fastify.put('/items/:id', updateoneOption)

    // DELETE ITEM
    fastify.delete('/items/:id', deleteitemOption)

    done()
}

module.exports = itemHandler