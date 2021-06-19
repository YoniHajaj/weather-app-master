// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const fetch = require("node-fetch");

fastify.register(require('fastify-cors'), { 
  origin: true, allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'], 
  methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'], 
});

// Declare a route
fastify.get('/api/location/search/:location', async (request, reply) => {
    console.log(request.params.location);
    const response = await fetch(`https://www.metaweather.com/api/location/search/?query=${request.params.location}`)
    const data = await response.json();
    console.log(data);
    reply.send(data)
})

fastify.get('/api/location/:id', async (request, reply) => {
  console.log(request.params.id);
  const response = await fetch(`https://www.metaweather.com/api/location/${request.params.id}/`)
  const data = await response.json();
  console.log(data);
  reply.send(data)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()