// window.onload = function (){
//     alert("onload");
//
// }
function getData(itemId, kouling, discountPrice, amount) {
    alert("getData");
    $.ajax({
        type: "GET",
        url: "https://yichao.vmall99.com/api/home/shareGoodsNew?itemid=585193707768&kouling=%EF%BF%A5yoCebJDRpPY%EF%BF%A5&discountPrice=44.90&amount=5",
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                $("#searchResult").html(data.msg);
            } else {
                $("#searchResult").html("出现错误：" + data.msg);
            }
        },
        error: function (jqXHR) {
            alert("发生错误：" + JSON.stringify(jqXHR));
        }
    });
}

// var mySwiper = new Swiper('.swiper-container', {
//     //   direction: 'vertical', // 垂直切换选项
//     loop: true, // 循环模式选项
//     autoplay: true,//可选选项，自动滑动
//     // 如果需要分页器
//     pagination: {
//         el: '.swiper-pagination',
//     },
//
//     // 如果需要前进后退按钮
//     //   navigation: {
//     //     nextEl: '.swiper-button-next',
//     //     prevEl: '.swiper-button-prev',
//     //   },
//
//     // 如果需要滚动条
//     //   scrollbar: {
//     //     el: '.swiper-scrollbar',
//     //   },
// })

var share = new Vue({
    el: '#share',
    data: {
        info: {
            imgurl: [],
            info: {},
            url: ""
        }
    },
    created: function () {
        // $.ajax({
        //     type: "GET",
        //     url: "https://yichao.vmall99.com/api/home/shareGoodsNew?itemid=585193707768&kouling=%EF%BF%A5yoCebJDRpPY%EF%BF%A5&discountPrice=44.90&amount=5",
        //     dataType: "json",
        //     success: function (data) {
        //         if (data.code == 0) {
        //             share.info = data.data;
        //             alert(JSON.stringify(share.info));
        //             setTimeout(function () {
        //                 var mySwiper = new Swiper('.swiper-container', {
        //                     autoplay: {
        //                         delay: 2000,
        //                         stopOnLastSlide: false,
        //                         disableOnInteraction: true,
        //                     },
        //                     observer: true, //修改swiper自己或子元素时，自动初始化swiper
        //                     observeParents: true, //修改swiper的父元素时，自动初始化swiper
        //                     pagination: {
        //                         el: '.swiper-pagination',
        //                     },
        //
        //                 })
        //             }, 100);
        //         } else {
        //         }
        //     },
        //     error: function (jqXHR) {
        //         alert("发生错误：" + JSON.stringify(jqXHR));
        //     }
        // });
    },
    methods: {
        getInfo :function () {
            alert("getInfo");
            $.ajax({
                type: "GET",
                url: "https://yichao.vmall99.com/api/home/shareGoodsNew?itemid=585193707768&kouling=%EF%BF%A5yoCebJDRpPY%EF%BF%A5&discountPrice=44.90&amount=5",
                dataType: "json",
                success: function (data) {
                    if (data.code == 0) {
                        share.info = data.data;
                        alert(JSON.stringify(share.info));
                        setTimeout(function () {
                            var mySwiper = new Swiper('.swiper-container', {
                                autoplay: {
                                    delay: 2000,
                                    stopOnLastSlide: false,
                                    disableOnInteraction: true,
                                },
                                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                                pagination: {
                                    el: '.swiper-pagination',
                                },

                            })
                        }, 100);
                    } else {
                    }
                },
                error: function (jqXHR) {
                    alert("发生错误：" + JSON.stringify(jqXHR));
                }
            });
        }
    }
});