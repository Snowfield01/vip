function resize() {
    // 获取浏览器宽度
    var windowWidth = $(window).width();

    var isSmallScreen = windowWidth < 768;
    console.log(isSmallScreen);

    // 根据isSmallScreen的值来切换图片
    // var ida = $('.carousel-inner > .item');
    // console.log(ida);
    // ida.each(function (i, item) {
    //   // 把DOM对象转换为jq对象
      $item = $(item);
    //   var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
    //   console.log(imgSrc)
    //   $item.html('<img src="' + imgSrc + '"/>');
    // })

    var $ulContainer = $('.nav-tabs');
    var $ulContainer = $('.nav-tabs');
    var width = 0;
    $ulContainer.children().each(function (index, element) {
        // 元素的宽度
        //  console.log( element.clientWidth)
        width += element.clientWidth;
    })

    //  解决在pc端出现滚动条
    if (width > $(window).width()) {
        $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
    }


    $(window).on('resize', resize).trigger('resize');
}