$(function(){
    $.post("/wx/portal/wxconfig/",{
		"url":location.href
	},function(data){
		wx.config(data);
        var share = function() {
            shareJson = {
                link:"http://200703.qingdianer.com",
                imgUrl:"http://200703.qingdianer.com/static/image/invite-logo.png",
                title:"2007级三班聚会邀请函",
                desc:"亲爱的同学们，在我们阔别了9年之后，让我们再次重逢吧~"

            };
			wx.onMenuShareTimeline(shareJson);
			wx.onMenuShareAppMessage(shareJson);
        };
		wx.ready(function(){
            share();
        });
		wx.error(function(res){
			$.get("/wx/portal/update_access_token/",function(data){
				$.post("/wx/portal/wxconfig/",{
					"url":location.href
				},function(data){
					wx.config(data);
					wx.ready(function(){
		                share();
                    });
		        });
		    });
        });
    });
});
