console.log("JS Script")
$(".card-body").on("click",".saveword",function(event){
    event.preventDefault();
    
    let data = {
  
        wordid : $(this).attr('data-id')
    }
    console.log("Id",data)
   $.ajax({
       url:"/saved/word",
       data: data,
       type: "POST",
       datatype: "json"}).done(
       (data,err) => {
          if (err) console.log("Err&data",err)
          console.log(data)
       })

});

function wordsaved(data){
   console.log(data)
}