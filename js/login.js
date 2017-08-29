(function() {
	'use strict';
//	会话sessionStorage
	var Util = (function() {
		var prefix = 'taobao_';
		var StorageGetter = function(key) {
			return localStorage.getItem(prefix + key);
		}
		var StorageSetter = function(key, val) {
			return localStorage.setItem(prefix + key, val);
		}
		return {
			StorageGetter: StorageGetter,
			StorageSetter: StorageSetter
		}
	})();

	function main() {
	$('#submit-bt').click(function(){
		//验证用户名密码
		var username=$('#username').val();
		var userPassword=$('#userPassword').val();
		var sex;
		$.ajax({
	                type:"get",
	                url:'./data/user_data.json',
	                dataType:"json",
	                success: function (data) {
	                	for(var i=0;i<data.total;i++){
							if(data.data[i].user==username)
							{
								if(data.data[i].password==userPassword)
								{
									console.log('success1');
									sex=data.data[i].sex;
									Util.StorageSetter('taobao_login','success');
									Util.StorageSetter('taobao_name',username);
								}
								
							}
						}
	                	if(Util.StorageGetter('taobao_login')=='success')
	                	{
	                		location.href='index.html';
	                	}else{
	                		$('#show').html('<p>你输入的密码和账户名不匹配，是否<a>忘记密码</a>或<a>忘记会员名</a></p>')
	                	}
	                },
	                error: function () {
	                   alert("数据请求失败！");
	                }
	            });
	});

	}
	return main();
})();
//$(function(){
//	console.log(1);
//});