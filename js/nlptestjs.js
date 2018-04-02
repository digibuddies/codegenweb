function myfun()
{
	var q=document.getElementById('query').value;
	document.getElementById('output').innerHTML=q;
	$.ajax({
      type:'POST',
      url:'http://127.0.0.1:5000/receiver',
      data: {que:q},
	  dataType: 'html',
	  context: document.body,
	  global: false,
	  async:true,
	  success: function(data2) {
       document.getElementById('output').innerHTML=data2;
      },
      error: function(request, status, error) {
        document.getElementById('output').innerHTML="error"+error;
      }
   });	
}