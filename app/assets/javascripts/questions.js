$(document).ready(function(){
	var tid = setInterval(update_hits,2000);
	function update_hits(){
		if ($('table#questions').size==1){
			$.get('/questions/hits', function(data){
				$.each(data, function(index, value){
					$('.question[data*="'+value['id']+'"]').children()[0].innerHTML=value['hits']
				})
			})
		} 
	}
})