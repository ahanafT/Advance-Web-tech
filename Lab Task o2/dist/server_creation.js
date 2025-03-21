const htp= require("http")
let server=htp.createServer((request,response)=>{
    console.log("request received",request.url);
    
    response.write("hello my name is ahanaf tahmid")
    response.end()
})

server.listen(4000,()=>{
    console.log("server creation completed");
})
