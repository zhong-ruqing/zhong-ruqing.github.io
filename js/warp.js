/*Add fancybox function, and not apply fancybox on logo, if the image has class "nofancybox", then it cannot be open with fancybox*/
$("img").not('.logo img').each(function () {
   // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
    var element = document.createElement("a");
    var $image = $(this);
    if ($(this).hasClass('nofancybox')) return;
    $(element).attr("data-fancybox", "gallery");
    $(element).attr("href", $(this).attr("src"));
    $(this).wrap(element);
});
