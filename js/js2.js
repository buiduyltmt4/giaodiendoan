$(document).ready(function () {
    new WOW().init();
    $('.li_contact').click(function () {
        $('.mash_body').addClass('xuatHienBody');
        $('.contact').addClass('xuatHienLogin');
        return false;
    });

    $('.mash_body').click(function () {
        $('.mash_body').removeClass('xuatHienBody');
        $('.contact').removeClass('xuatHienLogin');
        $('.login_register').removeClass('xuatHienLogin');
    });
    $('.li_login').click(function () {
        $('.mash_body').addClass('xuatHienBody');
        $('.login_register').addClass('xuatHienLogin');
        return false;
    });
//        $('.xgiohang').click( function () {
//            $(this).parent().html('');
//            return false;
//        })
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $(".menu").removeClass('bounceInUp');
            $(".menu").addClass('fixNav');
            $(".menu").addClass('bounceInDown');
        }else{
            $(".menu").addClass('bounceInUp');
            $(".menu").removeClass('fixNav');
            $(".menu").removeClass('bounceInDown');
        }}
    )

    // chi tiết sản phẩm
    $('.detailProduct .detail_left ul:first-child .hoverLi').click(function () {
        $('.detailProduct .detail_left ul:first-child .hoverLi').removeClass('activeLi');
        $(this).addClass('activeLi');

    });
    $('.detailProduct .waperDetailRight .list_img_detail img').click(function () {
        $('.detailProduct .waperDetailRight .list_img_detail img').removeClass('activeImg');
        $(this).addClass('activeImg');
        var src = $(this).attr('src');
        $('.detailProduct .waperDetailRight .img_detail img').attr('src',src);
    });

    // danh sách sản phẩm
    $('#customRange2').change(function () {
        var price = $(this).val();
        $('.price').text(format(price) + ' đ');
    });

})
function format(x) {
    return isNaN(x)?"":x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
