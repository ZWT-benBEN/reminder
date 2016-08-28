var remin = angular.module('reminder',[]);

remin.controller('main',['$scope',function($scope){
	$scope.colist=['green','yellow','blue','orange','purple','brow','pink'];


	 $scope.database=[];
	 
	$scope.database=[
		{
			id:1,
			listname:'书单',
			theme:'green',
			todos:[
				{id:1000,name:'穆斯林的葬礼',isdone:false},
				{id:1001,name:'偷影子的人',isdone:true},
				{id:1002,name:'围城',isdone:true},
				{id:1003,name:'我的心只悲伤七次',isdone:true},
				{id:1004,name:'活着',isdone:true}
			]
		},
		{
			id:2,
				listname:'歌单',
			theme:'yellow',
			todos:[
				{id:1000,name:'十年',isdone:true},
				{id:1001,name:'四季圈',isdone:true},
				{id:1002,name:'富士山下',isdone:true},
				{id:1003,name:'红玫瑰',isdone:true},
				{id:1004,name:'浮夸',isdone:true},
				{id:1005,name:'十一年',isdone:false}
		]
		}
		]

	$scope.save= function(){
		localStorage.cun=JSON.stringify($scope.database)
	}
	if(localStorage.cun){
		$scope.database=JSON.parse(localStorage.cun)
	}else{
		$scope.database=[];
	}

	$scope.add= function(i){
		var l = $scope.database.length;
		var list={id:1,listname:'新列表'+(l+1),theme:$scope.colist[l%7],todos:[]};
		$scope.database.push(list);
	};

	$scope.inner=$scope.database[0];
/*	$scope.todo=$scope.inner.todos;
	$scope.todoinner=$scope.scope.todo[0]*/
	$scope.coninner=function(i){
		$scope.inner=$scope.database[i];
	}
	$scope.change=function(i){
		$scope.lists=i;
	}


	$scope.newadd= function () {
		var newl = $scope.inner.todos.length;
		var newtodo={
			id:(newl+1000),name:'',isdone:false
		}
		$scope.inner.todos.push(newtodo)
	}
	$scope.maopao = function(e){
		e.stopPropagation();
	}

	$scope.shanchu = function(id){
		var index;
		var arr=[];
		for(var i = 0 ; i <$scope.database.length;i++){
			if($scope.database[i].id!==id){
				index=i;
				arr.push($scope.database[i])
			}
		}
		$scope.database=arr;
		$scope.inner=$scope.database[0]
	}
	$scope.guan= function(){
		if($scope.database.length==0){
			$scope.yincang=false;
		}
	}

	$scope.wancheng = function(){
		var num = $('.yiwancheng li').length;
		return num;
	}
	$scope.zhuan = function(){
		$('.yiwancheng .wanbox .wanicon').toggleClass('active');
		$('.yiwancheng li').toggleClass('chuxian');

	}
	$scope.del=function(idd){
		var index;
		var arr=[];
		for(var i = 0 ; i <$scope.inner.todos.length;i++){
			if($scope.inner.todos[i].id!==idd){
				index=i;
				arr.push($scope.inner.todos[i])
			}
		}
		$scope.inner.todos=arr;

	}
}]);
