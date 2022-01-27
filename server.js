const http=require('http')

const serve=http.createServer((req,res)=>{
   res.write(req.url)
   
   res.end()

})

serve.listen(5000,()=>{console.log('serve runnig')});