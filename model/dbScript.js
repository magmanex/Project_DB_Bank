   
   
   
   module.exports =  {
        test : test
    }

    function test(obj) {
        
        TypeStock.forEach((item) => {
            obj.create({id:item.id,description:item.description})
        })
    }

    var TypeStock = [{id:null,description:"ลอง1"},
                     {id:null,description:"ลอง2"}]
