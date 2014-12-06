/**
 * Created by TD on 2014-11-16.
 */

$(document).ready(function(){
  $(function(){
	  $.ajax({"/action/get_reservation"}
		.done(function(response){
			var result=JSON.parse(response);
			var reservationData=result.reservation;
			var len=result.length;

			for(var i=0, i<len, i++){
				var newData=$(".reservation_table").append(<tr>);
				newData.append($("<td>"+reservationData[i].reserveNum+"</td><td>"+reservationData[i].reserveTime+"</td><td>"+reservationData[i].name+"</td><td>"+reservationData[i].phone+"</td><td class='reserved_menu'>"+"메뉴"+"</td><td class='reserved_table'>"+"좌석"+"</td><td>"+"취소"+"</td>"))
			}
		});
	);
		$.ajax({"/action/get_menu"}
		.done(function(response){
			var result=JSON.parse(response);
			var menuData=result.menu;
			var len=menuData.length;
		
			for(var i=0, i<len, i++){
				var newData=$(".tab_menu_table").append(<tr>);
				newData.append($("<td>"+menuData[i].id+"</td><td>"+menuData[i].name+"</td><td>"+menuData[i].price+"원</td><td><span><img src=/menu/"+menuData[i].img+"></span></td>"));
			}
		});
	)
		$.ajax({"/action/get_table"}
		.done(function(response){
			var result=JSON.parse(response);
			var tableData=result.table;
			var len=menuData.length;

			for(var i=0, i<len, i++){
				var newData=$(".table_info_table").append(<tr>);
				newData.append($("<td>"+tableData[i].id+"</td><td>"+tableData[i].capacity+"</td><td>"+tableData[i].available+"</span></td>"))
			}
		});
	)
    $(".contents").show();
    $("#table_tabmn").hide();
    $("#menu_tabmn").hide();
  });

  $("#menu_reserve").mouseenter(function(){
	$("#table_tabmn").hide();
	$("#menu_tabmn").hide();
	$(".reservation").show();
  });
  
  $("#menu_table").mouseenter(function(){
	$(".reservation").hide();
	$("#menu_tabmn").hide();
	$("#table_tabmn").show();
  });
  
  $("#menu_menu").mouseenter(function(){
	$(".reservation").hide();
	$("#table_tabmn").hide();
	$("#menu_tabmn").show();
  });
});

/*not shown
function loadRState(){
	$.ajax({"/action/get_reservation"}
		.done(function(response){
			var result=JSON.parse(response);
			var menuData=result.menu;
			var len=menuData.length;

			for(var i=0, i<len, i++){
			}
	});
}

function loadTable(){
		$.ajax({"/action/get_table"}
		.done(function(response){
			var result=JSON.parse(response);
			var menuData=result.menu;
			var len=menuData.length;
		
			for(var i=0, i<len, i++){}
	)};
}

function loadMenu(){
	$.ajax({"/action/get_menu"}
		.done(function(response){
			var result=JSON.parse(response);
			var menuData=result.menu;
			var len=menuData.length;
		
			for(var i=0, i<len, i++){
				var newData=$(".tab_menu_table").append(<tr>);
				newData.append($("<td><img src=/menu/"+"</td><td>"+menuData[i].price+"원"+"</td><td>"+"</span></td>"));
			}
		});
	)
}

*/