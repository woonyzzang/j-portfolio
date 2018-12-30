var brcode = '';
var bscode = '';
var bgcode = '';
var brfirst = 1;

function addPrefix(value) {
    return '-webkit-' + value + ';\n-moz-' + value + ';\n-o-' + value + ';\n-ms-' + value + ';\n' + value + ';\n';
}

function updateCode(){
    var code = '',
        renderParentCode = '',
        renderCode = '';

    // Backface Visibility
    if($("#bfvChk").is(':checked')){
        var bfvcode = '';

        bfvcode = addPrefix('backface-visibility:' + $('#bfv').val());
        code += bfvcode;
    }

    // Background Gradient
    if($("#bgChk").is(':checked')){
        var bgTypeVal = $('#bgType').val(),
            bgColorTypeVal = $('#bgColorType').val();

        switch(bgTypeVal){
            case 'linear-top':
                var topVal = '#' + $('#bgltTop').val(),
                    btmVal = '#' + $("#bgltBtm").val();

                if(bgColorTypeVal == 'rgba'){
                    topVal = 'rgba(' + $('#bgltTopR').val() + ',' + $('#bgltTopG').val() + ',' + $('#bgltTopB').val() + ', ' + $('#bgltTopA').val()+')';
                    btmVal = 'rgba(' + $('#bgltBtmR').val() + ',' + $('#bgltBtmG').val() + ',' + $('#bgltBtmB').val() + ', ' + $('#bgltBtmA').val() + ')';
                }

                bgcode = 'background:-webkit-gradient(linear,left top,right top,from(' + topVal + '),to(' + btmVal + '));\nbackground:-webkit-linear-gradient(top,' + topVal + ',' + btmVal + ');\nbackground:-moz-linear-gradient(top,' + topVal + ',' + btmVal + ');\nbackground:-o-linear-gradient(top,' + topVal + ',' + btmVal + ');\nbackground:-ms-linear-gradient(top,' + topVal + ',' + btmVal + ');\nbackground:linear-gradient(top,' + topVal + ',' + btmVal + ');\nbackground-color:' + topVal + ';\n';
                break;
            case 'linear-left':
                var lftVal = '#' + $('#bgllLft').val(),
                    rgtVal = '#' + $("#bgllRgt").val();

                if(bgColorTypeVal == 'rgba'){
                    lftVal = 'rgba(' + $('#bgllLftR').val() + ',' + $('#bgllLftG').val() + ',' + $('#bgllLftB').val() + ',' + $('#bgllLftA').val() + ')';
                    rgtVal = 'rgba(' + $('#bgllRgtR').val() + ',' + $('#bgllRgtG').val() + ',' + $('#bgllRgtB').val() + ',' + $('#bgllRgtA').val() + ')';
                }

                bgcode = 'background:-webkit-gradient(linear,0% 0%,0% 100%,from(' + lftVal + '),to(' + rgtVal + '));\nbackground:-webkit-linear-gradient(left,' + lftVal + ',' + rgtVal + ');\nbackground:-moz-linear-gradient(left,' + lftVal + ',' + rgtVal + ');\nbackground:-o-linear-gradient(left,' + lftVal + ',' + rgtVal + ');\nbackground:-ms-linear-gradient(left,' + lftVal + ',' + rgtVal + ');\nbackground:linear-gradient(left,' + lftVal + ',' + rgtVal + ');\nbackground-color:' + lftVal + ';\n';
                break;
            case 'radial':
                var ctrVal = '#' + $('#bgrCtr').val(),
                    outrVal = '#' + $('#bgrOutr').val();

                if(bgColorTypeVal == 'rgba') {
                    ctrVal = 'rgba(' + $('#bgrCtrR').val() + ',' + $('#bgrCtrG').val() + ',' + $('#bgrCtrB').val() + ',' + $('#bgrCtrA').val() + ')';
                    outrVal = 'rgba(' + $('#bgrOutrR').val() + ',' + $('#bgrOutrG').val() + ',' + $('#bgrOutrB').val() + ',' + $('#bgrOutrA').val() + ')';
                }

                bgcode = 'background:-webkit-gradient(radial,center center,0,center center,460,from(' + ctrVal + '),to(' + outrVal + '));\nbackground:-webkit-radial-gradient(circle,' + ctrVal + ',' + outrVal + ');\nbackground:-moz-radial-gradient(circle,' + ctrVal + ',' + outrVal + ');\nbackground:-o-radial-gradient(circle,' + ctrVal + ',' + outrVal + ');\nbackground:-ms-radial-gradient(circle,' + ctrVal + ',' + outrVal + ');\nbackground:radial-gradient(circle,' + ctrVal + ',' + outrVal + ');\nbackground-color:' + ctrVal + ';\n';
                break;
            default:break;
        }

        code += bgcode;
        renderCode += bgcode;
    }

    // Border Radius
    if($('#brChk').is(':checked')){
        brcode = '';
        var tl = $('#brTl').val(),
            tr = $('#brTr').val(),
            bl = $('#brBl').val(),
            br = $('#brBr').val();

        if(tl == tr && tl == br && tl == bl){
            $('#brTr').val(tl);
            $('#brBl').val(tl);
            $('#brBr').val(tl);

            brcode = addPrefix('border-radius:' + tl + 'px');
        }else{
            brcode += addPrefix('border-radius:' + tl + 'px ' + tr + 'px ' + br + 'px ' + bl + 'px');
        }

        code += brcode;
        renderCode += brcode;
    }

    // Outer/Inner Box Shadow
    if($('#bsChk').is(':checked') || $('#ibsChk').is(':checked')){
        var ox = $('#bsX').val(),
            oy = $('#bsY').val(),
            osize = $('#bsSize').val(),
            ocolor = '#' + $('#bsColorHex').val();

        if($('#bsColorType').val() == 'rgba'){
            ocolor = 'rgba(' + $('#bsColorR').val() + ',' + $('#bsColorG').val() + ',' + $('#bsColorB').val() + ',' + $('#bsColorA').val() + ')';
        }

        var ix = $('#ibsX').val(),
            iy = $('#ibsY').val(),
            isize = $('#ibsSize').val(),
            icolor = '#' + $('#ibsColorHex').val();

        if($('#ibsColorType').val() == 'rgba') {
            icolor = 'rgba(' + $('#ibsColorR').val() + ',' + $('#ibsColorG').val() + ',' + $('#ibsColorB').val() + ',' + $('#ibsColorA').val() + ')';
        }

        if($('#bsChk').is(':checked') && !$('#ibsChk').is(':checked')){
            bscode = addPrefix('box-shadow:' + ox + 'px ' + oy + 'px ' + osize + 'px ' + ocolor);
        }else if(!$("#bsChk").is(':checked') && $("#ibsChk").is(':checked')){
            bscode = addPrefix('box-shadow:inset ' + ix + 'px ' + iy + 'px ' + isize + 'px ' + icolor);
        } else if($("#bsChk").is(':checked') && $("#ibsChk").is(':checked')){
            bscode = addPrefix('box-shadow:' + ox + 'px ' + oy + 'px ' + osize + 'px ' + ocolor + ',inset ' + ix + 'px ' + iy + 'px ' + isize + 'px ' + icolor);
        }

        code += bscode;
        renderCode += bscode;
    }

    // Box Sizing
    if($('#boxsizChk').is(':checked')){
        var bxszcode = '';
        bxszcode = addPrefix('box-sizing:' + $('#boxsizVal').val());

        code += bxszcode;
        renderCode += bxszcode;
    }

    // Columns
    if($('#colmChk').is(':checked')){
        var colmcode = '';
        colmcode = addPrefix('column-count:' + $('#colmNum').val());
        colmcode += addPrefix('column-gap:' + $('#colmGap').val() + 'px');

        code += colmcode;
        renderCode += colmcode;
    }

    // Opacity
    if($('#opChk').is(':checked')){
        var opacitycode = '';
            opacity = $('#opOpacity').val();

        opacitycode = 'filter:alpha(opacity=' + Math.round(opacity*100) + ');\nopacity:' + opacity + ';\n';

        code += opacitycode;
        renderCode += opacitycode;
    }

    // Perspective
    if($('#perChk').is(':checked')){
        var perspectivecode = '';

        perspectivecode = addPrefix('perspective:' + $('#perPx').val() + 'px');

        code += perspectivecode;
        renderParentCode += perspectivecode;
    }

    // Perspective Origin
    if($('#peroChk').is(':checked')){
        var perspectiveorigincode = '';

        perspectiveorigincode = addPrefix('perspective-origin:' + $('#peroX').val() + $('#peroXt').val() + ',' + $('#peroY').val() + $('#peroYt').val());

        code += perspectiveorigincode;
        renderParentCode += perspectiveorigincode;
    }

    // Text Shadow
    if($('#tsChk').is(':checked')){
        var x = $('#tsX').val(),
            y = $('#tsY').val(),
            size = $('#tsSize').val(),
            color = '#' + $('#tsColorHex').val();

        if($('#tsColorType').val() == 'rgba'){
            color = 'rgba(' + $('#tsColorR').val() + ',' + $('#tsColorG').val() + ',' + $('#tsColorB').val() + ',' + $('#tsColorA').val() + ')';
        }

        bscode = 'text-shadow:' + x + 'px ' + y + 'px ' + size + 'px ' + color + ';\n';

        code += bscode;
        renderCode += bscode;
    }

    // Transform
    if($('#trapChk').is(':checked') || $('#trChk').is(':checked') || $('#tr3dChk').is(':checked') || $('#tscChk').is(':checked') || $('#tsc3dChk').is(':checked') || $('#tskChk').is(':checked') || $('#ttrChk').is(':checked') || $('#ttr3dChk').is(':checked')){
        var trancode = '',
            tran = '';

        if($('#trapChk').is(':checked')) tran += 'perspective(' + $('#trapPx').val() + 'px)';
        if($('#trChk').is(':checked')) tran += 'rotate(' + $('#trDeg').val() + 'deg)';
        if($('#tr3dChk').is(':checked') && ($('#tr3dXon').is(':checked') || $('#tr3dYon').is(':checked') || $('#tr3dZon').is(':checked'))){
            if($('#tr3dXon').is(':checked')) tran += 'rotateX(' + $('#tr3dXdeg').val() + 'deg)';
            if($('#tr3dYon').is(':checked')) tran += 'rotateY(' + $('#tr3dYdeg').val() + 'deg)';
            if($('#tr3dZon').is(':checked')) tran += 'rotateZ(' + $('#tr3dZdeg').val() + 'deg)';
        }
        if($('#tscChk').is(':checked')) tran += 'scale(' + $('#tscSize').val() + ')';
        if($('#tsc3dChk').is(':checked')) tran += 'scale3d(' + $('#tsc3dX').val() + ',' + $('#tsc3dY').val() + ',' + $('#tsc3dZ').val() + ')';
        if($('#tskChk').is(':checked')) tran += 'skew(' + $('#tskX').val() + 'deg,' + $('#tskY').val() + 'deg)';
        if($('#ttrChk').is(':checked')) tran += 'translate(' + $('#ttrX').val() + $('#ttrXt').val() + ',' + $('#ttrY').val() + $('#ttrYt').val() + ')';
        if($('#ttr3dChk').is(':checked')) tran += 'translate3d(' + $('#ttr3dX').val() + $('#ttr3dXt').val() + ',' + $('#ttr3dY').val() + $('#ttr3dYt').val() + ',' + $('#ttr3dZ').val() + $('#ttr3dZt').val() + ')';
        if(tran) trancode = addPrefix('transform:' + tran);

        code += trancode;
        renderCode += trancode;
    }

    // Transform Origin
    if($('#troChk').is(':checked')){
        var trocode = '';

        trocode = addPrefix('transform-origin:' + $('#troX').val() + $('#troXt').val() + ' ' + $('#troY').val() + $('#troYt').val());

        code += trocode;
        renderCode += trocode;
    }

    // Transform Style
    if($('#trstChk').is(':checked')){
        var trstcode = '';

        trstcode = addPrefix('transform-style:' + $('#trstVal').val());

        code += trstcode;
        renderCode += trstcode;
    }

    // Transition
    if($('#traChk').is(':checked')){
        var transcode = '';

        transcode = addPrefix('transition:' + $('#traProperty').val() + ' ' + $('#traDuration').val() + 's '+$('#traTiming').val());

        code += transcode;
        renderCode += transcode;
    }

    $('#code').val(code);
    $('#previewRender').attr('style',renderParentCode);
    $('#previewBox').attr('style',renderCode);
}

function resizeCodeArea() {
    var wh = $(window).height()-75;
    var ww = $(window).width()-350;

    if(!$('previewInr').is(":hidden")) wh -= 255;

    $('#code').height(wh);
    $('#preview').width(ww);
    //$('.preview-toggle').css('right',(ww/2)-63);
}

(function($){
    $(window).resize(resizeCodeArea);

    resizeCodeArea();

    $('#attr_lst').on('click','li>strong',function(){
        var chkBox = $(this).prev('input.chk');
        (!chkBox.is(':checked'))? chkBox.prop('checked',true) : chkBox.prop('checked',false);
        chkBox.trigger('change');
    }).on('click','button.clse',function(){
        var chkBox = $(this).prevAll('input.chk');
        chkBox.prop('checked',false);
        chkBox.trigger('change');
    });

    $('#affFile').change(function(){
        $("#affForm").submit().find('input:text,input:password,input:file,select,textarea').val('');
    });

    $('input.chk').change(function(e){
        var $attrMenu = $(this).parents('li');
        $(this).is(':checked')? $attrMenu.addClass('active') : $attrMenu.removeClass('active');
    });

    $('input,select').change(updateCode);

    $('#bgType').change(function(){
        if($(this).val() == 'linear-top'){
            $('#bgll,#bgr').hide();
            $('#bglt').show();
        }else if($(this).val() == 'linear-left'){
            $('#bglt,#bgr').hide();
            $('#bgll').show();
        }else{
            $('#bgll,#bglt').hide();
            $('#bgr').show();
        }
    });

    $('#bgColorType').change(function(){
        if($(this).val() == 'rgba'){
            $('.bg_hex').hide();
            $('.bg_rgba').show();
        }else{
            $('.bg_hex').show();
            $('.bg_rgba').hide();
        }
    });

    $("#brOtn input").change(function(){
        if(brfirst){
            var setall = $(this).val();

            $("#brTl").val(setall);
            $("#brTr").val(setall);
            $("#brBl").val(setall);
            $("#brBr").val(setall);

            brfirst = 0;
        }

        updateCode();
    });

    $("#bsColorType").change(function(){
        if($(this).val() == 'rgba'){
            $(".bs_color_hex").hide();
            $(".bs_color_rgba").show();
        } else {
            $(".bs_color_hex").show();
            $(".bs_color_rgba").hide();
        }
    });

    $("#ibsColorType").change(function(){
        if($(this).val() == 'rgba'){
            $('.ibs_color_hex').hide();
            $('.ibs_color_rgba').show();
        }else{
            $('.ibs_color_hex').show();
            $('.ibs_color_rgba').hide();
        }
    });

    $("#tsColorType").change(function(){
        if($(this).val() == 'rgba'){
            $('.ts_color_hex').hide();
            $('.ts_color_rgba').show();
        }else{
            $('.ts_color_hex').show();
            $('.ts_color_rgba').hide();
        }
    });
})(jQuery);