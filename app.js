const fastify = require('fastify')({logger: true})

fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Fastify-API',
            description: 'Creating a simple REST-API with fastify',
            version: '0.1.0'
        }
    }
})
fastify.register(require('./routes/items'))

const PORT = 3040

// START THE SERVER
const start = async () => {
    try{
        await fastify.listen(PORT)
    }
    catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

start()