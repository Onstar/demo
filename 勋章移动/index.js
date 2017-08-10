$(function(){
	
//	var acTyps = $("[action-type='showMedal']");
	var acTyps = $(".options_xzWrap");
	
	var cloTyps = $("[action-type='hiddenMedal']");
	
	
	acTyps.on("click","li",function(){
		
		var cont = $(this).children();
		
		var empFirst = $(".empty").first();
		
		empFirst.append(cont)
		
		empFirst.removeAttr("class")
		
		$(this).find("[action-type='hiddenMedal']").attr("display","block");
		
		$(this).remove();
		
	})
	
	cloTyps.on("click",function(){
			var contS = $(this).closest("[node-type='unitMedal']");
			var add = $("<li action-type='showMedal'></li>");
			contS.parent().attr("class","empty")
//			console.log($("[node-type='medalOfShow']"))
			$("[node-type='medalOfShow']").append(contS.parent())
			$("[node-type='medalOfHidden']").append(add.append(contS));
			
			
			
		})
	
	
})




