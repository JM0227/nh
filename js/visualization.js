$(document).ready(function(){
	/* Jquery ui - tooltip */
	$('.icon-tooltip').tooltip({
	});

	//레이어 팝업
    $('.js-open').click(function(e){
        e.preventDefault();        
        var activeLayer = $(this).attr('data-pop');

        $('#' + activeLayer).fadeIn(); //호출한 팝업만 부르기
        $('#' + activeLayer).after("<div class='dimm'></div>"); //배경 가져오기

        //닫기 버튼 , 배경 클릭 시
        $('.js-close , .dimm').on('click' , function(){
            $('.layer-popup').fadeOut();//모든 팝업 감추기
            $('.dimm').remove(); //배경 감추기
        });

    });
});