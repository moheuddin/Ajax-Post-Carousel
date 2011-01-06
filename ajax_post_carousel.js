(function(a){a.fn.apc=function(){var n={ajax_processing:new Array(),visible_num:new Array(),preload_num:new Array(),total_items:new Array(),initial_offset:new Array(),blog_url:"",show_title:new Array(),show_excerpt:new Array(),post_type:new Array(),category:new Array(),tax_filters:new Array(),loop:new Array(),items:new Array(),list:new Array(),visible_container:new Array(),list_offset:new Array()};var p=function(){a(".apc_visible_container").css({overflow:"hidden"});a(".apc_list").css({margin:0,padding:0,position:"relative"})};var h=function(){p();a(".apc_out_container").each(function(A){var z=a(this).children(".apc_carousel_vars").val().split(",");n.visible_num[A]=Number(z[0]);n.preload_num[A]=Number(z[1])-n.visible_num[A];n.total_items[A]=Number(z[2]);n.initial_offset[A]=Number(z[3]);n.blog_url=z[4];n.show_title[A]=z[5];n.show_excerpt[A]=z[6];n.loop[A]=z[7];n.post_type[A]=z[8];n.category[A]=z[9];c(z[10],A);n.items[A]=a(this).find(".apc_item");n.list[A]=a(this).find(".apc_list");n.visible_container[A]=a(this).find(".apc_visible_container");var B=n.items[A].length*n.items[A].outerWidth(true);n.list[A].width(B);n.list_offset[A]=0;var y=n.visible_num[A]*n.items[A].outerWidth(true);n.visible_container[A].width(y);a(this).width(y);u(A)})};var c=function(y,z){if(y){n.tax_filters[z]=new Array();var A=y.split("&");for(x in A){tax_term_array=A[x].split("=");n.tax_filters[z][tax_term_array[0]]=tax_term_array[1]}}};var u=function(y){n.visible_container[y].siblings(".apc_arrow.apc_next").bind("click",{direction:"next",car_index:y},w);n.visible_container[y].siblings(".apc_arrow.apc_prev").bind("click",{direction:"prev",car_index:y},w);b(y,0)};var w=function(B){if(!a(this).hasClass("apc_inactive")){B.preventDefault();var z=B.data.car_index;if(B.data.direction=="next"){var A=n.list_offset[z]+n.visible_num[z]}else{var A=n.list_offset[z]-n.visible_num[z]}if(n.items[z].length>A&&A>=0){var D=A+n.visible_num[z]+n.preload_num[z];if(n.items[z].length<n.total_items[z]&&n.items[z].length<D&&!n.ajax_processing[z]){n.ajax_processing[z]=true;var C=n.initial_offset[z]+n.items[z].length;if(C>=n.total_items[z]){C=C-n.total_items[z];var y=Math.min(D-n.items[z].length,n.total_items[z]-n.items[z].length)}else{var y=D-n.items[z].length}e(A,z);k(C,y,z,false,A)}else{e(A,z);if(n.loop[z]==1&&n.items[z].length==n.total_items[z]&&(n.total_items[z]-A<n.visible_num[z])){v(A,z)}}}else{if(n.loop[z]==1){if(A<0){A=n.total_items[z]+A;s(A,z)}else{g(A,z)}}}}};var k=function(D,z,A,y,C){var B="action=ajax_apc_get_posts&offset="+D+"&num="+z+"&title="+n.show_title[A]+"&excerpt="+n.show_excerpt[A]+"&post_type="+n.post_type[A]+"&category="+n.category[A];for(j in n.tax_filters[A]){B+="&tax_"+j+"="+n.tax_filters[A][j]}a.ajax({type:"POST",url:n.blog_url+"/wp-admin/admin-ajax.php",data:B,success:function(E){f(E,A,y,C,D+z)},complete:function(){o(A,C)}})};var f=function(B,A,y,D,z){q(B,A);if(y){e(D,A)}var E=n.items[A].length;if(z>E&&n.initial_offset[A]>0){var C=Math.min(z-E,n.initial_offset[A]);n.ajax_processing[A]=true;k(0,C,A,y,D)}};var o=function(y,z){n.ajax_processing[y]=false;b(y,z)};var q=function(z,y){n.list[y].append(z);n.items[y]=n.list[y].find(".apc_item");var A=n.items[y].length*n.items[y].outerWidth(true);n.list[y].width(A)};var e=function(A,z){var y=-1*n.items[z].outerWidth(true)*A;n.list[z].animate({left:y+"px"},600);n.list_offset[z]=A;b(z,A)};var v=function(B,A){var z=n.visible_num[A]-(n.total_items[A]-B);var y=n.items[A].slice(0,z).clone();q(y,A)};var g=function(A,z){l(A,z);var y=-1*n.items[z].outerWidth(true)*A;n.list[z].animate({left:y+"px"},600,function(){t(A,z)});n.list_offset[z]=A-n.total_items[z];b(z,A-n.total_items[z])};var s=function(A,z){l(A+n.visible_num[z],z);var y=-1*n.items[z].outerWidth(true)*(A+n.visible_num[z]);n.list[z].css({left:y});y=-1*n.items[z].outerWidth(true)*A;n.list[z].animate({left:y+"px"},600,function(){d(A,z)});n.list_offset[z]=A;b(z,A)};var l=function(A,z){var B=n.items[z].length-n.total_items[z];var y=n.items[z].slice(B,n.visible_num[z]+A-n.items[z].length+B).clone();q(y,z)};var t=function(B,z){n.items[z].slice(n.total_items[z]).remove();n.items[z]=n.items[z].slice(0,n.total_items[z]);var A=n.total_items[z]*n.items[z].outerWidth(true);var y=-1*(B-n.total_items[z])*n.items[z].outerWidth(true);n.list[z].css({left:y,width:A+"px"})};var d=function(B,z){var y=n.visible_num[z]-(n.total_items[z]-B);n.items[z].slice(n.total_items[z]+y).remove();n.items[z]=n.items[z].slice(0,n.total_items[z]+y);var A=(n.total_items[z]+y)*n.items[z].outerWidth(true);n.list[z].width(A)};var b=function(y,z){r(n.visible_container[y].siblings(".apc_arrow"));if(z<=0&&(n.loop[y]!=1||n.items[y].length<n.total_items[y])){i(n.visible_container[y].siblings(".apc_prev"))}if(n.items[y].length<=z+n.visible_num[y]){if(n.ajax_processing[y]){m(n.visible_container[y].siblings(".apc_next"))}else{if(n.loop[y]!=1){i(n.visible_container[y].siblings(".apc_next"))}}}};var r=function(y){y.addClass("apc_active");y.removeClass("apc_inactive");y.removeClass("apc_ajax")};var m=function(y){y.addClass("apc_ajax");y.removeClass("apc_inactive");y.removeClass("apc_active")};var i=function(y){y.addClass("apc_inactive");y.removeClass("apc_ajax");y.removeClass("apc_active")};h()};a(function(){new a.fn.apc()})})(jQuery);