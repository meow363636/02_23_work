;(function($){ 

    var intro = {
        init:        function(){
            var that = this;

                that.navFn();
                that.mainSlideFn();
                that.noticeFn();
                that.galleryFn();
                that.bannerFn();
                that.familySiteFn();
        },
        navFn:       function(){

            var $mainBtn = $('#nav .main-btn');
            var $sub = $('#nav .sub');
            var $navUl = $('#nav > ul');

                //아코디언 메뉴
                //메인버튼 이벤트 리스너(핸들러)
                $mainBtn.on({
                    mouseenter:function(){
                       $mainBtn.removeClass('on');
                       $(this).addClass('on'); 
                       
                       $sub.removeClass('on');
                       $(this).next().addClass('on');
                    }
                });

                //메인메뉴와 서브메뉴 영역을 떠나면
                $navUl.on({
                    mouseleave:function(){
                        $mainBtn.removeClass('on'); 
                        $sub.removeClass('on');
                    }
                });






            
        },
        mainSlideFn: function(){
            var $slideWrap = $('#section1 .slide-wrap');
            var $prevBtn = $('#section1 .prev-btn');
            var $nextBtn = $('#section1 .next-btn');
            var cnt = 0;

                //1. 메인 슬라이드 함수
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-800*cnt},600, function(){
                        if(cnt>2) cnt=0;
                        if(cnt<0) cnt=2;
                        $slideWrap.stop().animate({left:-800*cnt},0); //순간이동 롤링 포인트
                    });
                }

                
                //2-1. 다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                    cnt++;
                    mainSlideFn();
                }
                
                //2-2. 이전 슬라이드 카운트 함수
                function prevSlideCountFn(){
                    cnt--;
                    mainSlideFn();
                }
                

                //3-1. 다음 슬라이드 버튼 클릭 이벤트
                $nextBtn.on({
                    click: function(){
                        if( !$slideWrap.is(':animated') ){
                            nextSlideCountFn();
                        }
                    }
                });
                //3-2. 이전 슬라이드 버튼 클릭 이벤트
                $prevBtn.on({
                    click: function(){
                        if( !$slideWrap.is(':animated') ){
                            prevSlideCountFn();    
                        }
                    }
                });

        },
        noticeFn:    function(){
            var $modal = $('#modal');
            var $noticeBtn = $('#section2 .notice-btn');
            var $noticeText = $('#modal .notice-text');
            var $content = $('#modal .content');

                //모달창 열기(띄우기)
                $noticeBtn.on({
                    click:function(event){
                        event.preventDefault();

                        var txt = $(this).text();
                        var tit = $(this).attr('title');

                        $modal.show();                       
                        $noticeText.text( tit );                  
                    }
                });

                //모달창 열기(띄우기)
                $modal.on({
                    click:function(event){
                        event.preventDefault();
                        $(this).hide();
                    }
                });

                //버튼 이벤트 전파 차단
                $content.on({
                    click:function(event){
                        event.stopPropagation();
                        alert('텍스트 콘텐츠 영역 위치 클릭!! ');
                    }
                });

        },
        galleryFn:   function(){
            var $modalGallery = $('#modalGallery');
            var $galleryBtn = $('#section2 .gallery-btn');
            var $content = $('#modalGallery .content-gallery');
            var n = 0; 
            var a = [
                        'url(./img/blog-post-img6.jpg)',
                        'url(./img/blog-post-img7.jpg)',
                        'url(./img/blog-post-img5.jpg)',
                        'url(./img/blog-post-img4.jpg)'   
                    ];
            var len = a.length-1;
            var arr = [];
            var arr = [10, 20, 3, 78, '캬라멜마끼야또'];

            //1. 클릭할 버튼 배열처리, 클릭하여 모달창 띄우고, 클릭한 이미지 변환
            $galleryBtn.each(function(idx){           
                $(this).on({ 
                    click:function(){
                        n=idx;
                        $modalGallery.stop().fadeIn(600);
                        conentFn();
                    }
                });
            });       

            //1-1 공통함수 모달창에서 이미지 클릭시 같이 사용 함수
            function conentFn(){
                $content.css({'background-image': a[n] }).stop().fadeOut(0).fadeIn(300);             
            }



            //2. 모달창 닫기
            $modalGallery.on({
                click:function(){
                    $modalGallery.stop().fadeOut(600); 
                }
            });

            // 3. 다음 이미지 변환
            $content.on({
                click:function(e){
                    e.stopPropagation();
                    n++;
                    if(n>3) n=0 
                    $content.css({'background-image': a[n] });
                }
            });
            
        },
        bannerFn:    function(){
            

        },
        familySiteFn:function(){
         
            


        }
    }; 

    intro.init();


})(jQuery);




//Family Site 점프메뉴
function goFamily(z){
   location.href = z;
}
function goUrl(z) {

    switch(z) {
        case 'noticeMore':
            location.href = 'https://www.bok.or.kr/museum/pgm/master/list.do?progrmSeCd=03&menuNo=700124#footer';
            break;
        
        //main1
        case 'main1':
            location.href = './main1.html';
            break;
        case 'main1-1':
            location.href = './main1-1.html';
            break;
        case 'main1-2':
            location.href = './main1-2.html';
            break;
        case 'main1-3':
            location.href = './main1-3.html';
            break;
        case 'main1-4':
            location.href = './main1-4.html';
            break;


            
        //main2
        case 'main2':
            location.href = './main2.html';
            break;
        case 'main2-1':
            location.href = './main2-1.html';
            break;
        case 'main2-2':
            location.href = './main2-2.html';
            break;
        case 'main2-3':
            location.href = './main2-3.html';
            break;
        case 'main2-4':
            location.href = './main2-4.html';
            break;




        //main3
        case 'main3':
            location.href = './main3.html';
            break;
        case 'main3-1':
            location.href = './main3-1.html';
            break;
        case 'main3-2':
            location.href = './main3-2.html';
            break;
        case 'main3-3':
            location.href = './main3-3.html';
            break;
        case 'main3-4':
            location.href = './main3-4.html';
            break;



        //main4
        case 'main4':
            location.href = './main4.html';
            break;
        case 'main4-1':
            location.href = './main4-1.html';
            break;
        case 'main4-2':
            location.href = './main4-2.html';
            break;
        case 'main4-3':
            location.href = './main4-3.html';
            break;
        case 'main4-4':
            location.href = './main4-4.html';
            break;

    }
};