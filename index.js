// import json server
const jsonserver=require('json-server')   //require used to import json-server (same as import)
//import cors
const cors=require('cors')

//create json server
const server=jsonserver.create()

//json type data - js data - before request resolve
const middleware=jsonserver.defaults()

//create a router
const router=jsonserver.router('db.json')

//apply middleware in server
server.use(middleware)
server.use(cors())
server.use(router)

const PORT=5000  //dont use the port used in frontend eg for port(localhost://3000) so dont use 3000
server.listen(PORT,()=>{
    console.log(`____Json Server Started AT Port : ${PORT}____`);
})