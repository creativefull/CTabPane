var totalTab = 0;
$(function() {
	totalTab = $(".ctab .ctab-header a").length;
	clickTab();
	btnClick();
})
function clickTab() {
	$(".ctab .ctab-header a").click(function() {
		var selector = $(this);
		$(".ctab .ctab-header a").removeClass("active");
		selector.addClass("active");
		$(".ctab .ctab-content > div").removeClass("active");
		$(".ctab .ctab-content > div" + selector.attr("href")).addClass("active");
		return false;
	})	
}
$.fn.addTab = function(title, content) {
	totalTab += 1;
	var selector = $(this);
	var cTabHeader = selector.find(".ctab-header");
	var cTabContent = selector.find(".ctab-content");

	cTabHeader.find("a").removeClass("active");
	cTabContent.find("div").removeClass("active");

	var elementHeader = "<a href=\"#tab" + totalTab + "\" class=\"active\" style=\"margin-right:5px\">" + title + " <i data-dismis=\"close\" class=\"fa fa-times-circle\"></span></a>";
	var elementContent = "<div id=\"tab" + totalTab + "\" class=\"active\">" + content + "</div>";

	cTabHeader.append(elementHeader);
	cTabContent.append(elementContent);
	clickTab();
	$(".ctab .ctab-header > a > i[data-dismis='close']").unbind("click");
	btnClick();
}

function closeTab(element) {
	var prev = $(element).parent().prev("a");
	var next = $(element).parent().next("a");
	$(".ctab .ctab-header a").unbind("click");

	$(element).parent().remove();
	$(".ctab .ctab-content > div" + $(element).parent().attr("href")).remove();

	if ($(element).parent().hasClass("active")) {
		$(".ctab .ctab-header a").removeClass("active");
		$(".ctab .ctab-content > div").removeClass("active");
		if (prev.length != 0) {
			$("a[href=\"" + prev.attr("href") + "\"]").addClass("active");
			$(".ctab .ctab-content > div" + prev.attr("href")).addClass("active");
		}
		else if (prev.length == 0) {
			if (next.length != 0) {
				$("a[href=\"" + next.attr("href") + "\"]").addClass("active");
				$(".ctab .ctab-content > div" + next.attr("href")).addClass("active");			
			}
		}		
	}
	setTimeout(function() {
		clickTab();
	}, 500);
}

function btnClick() {
	$(".ctab .ctab-header > a > i[data-dismis='close']").click(function() {
		closeTab($(this));
		return false;
	})
}