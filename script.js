$(document).ready(function(){
    var countminutes = 25;
    var bcountminutes = 5;
    var count;
    var bcount;
    var x = 0;
    var y = 0;
    var interval = 0;
    var binterval = 0;
    var paused = false;
    var progress;
    var progressb;
    var d;
    var n;
    var o;
    var bv;
    var fv;
    var dd;
    var nn;
    var oo;
    var zxtotal;
    var zxmin;
    var zxsec;
    
//    -------------------TIMER UP AND DOWN BUTTONS----------------
    
    $('#up').click(function(){
        if(countminutes <= 8 && countminutes > -1){
        countminutes ++;
       $('#minutes').text(countminutes);
        }
        
        else if(countminutes >= 9){
            countminutes ++;
            $('#minutes').text(countminutes);
        }
    });
    
    $('#down').click(function(){
        if(countminutes <= 10 && countminutes > 1){
        countminutes --;
       $('#minutes').text(countminutes);
        }
        
        else if(countminutes === 0){
            $('#minutes').text(countminutes);
        }
        
        else if(countminutes >= 11){
            countminutes --;
            $('#minutes').text(countminutes);
        }
    });
    
    $('#bup').click(function(){
        if(bcountminutes <= 8 && bcountminutes > -1){
        bcountminutes ++;
       $('#bminutes').text(bcountminutes);
        }
        
        else if(bcountminutes >= 9){
            bcountminutes ++;
            $('#bminutes').text(bcountminutes);
        }
    });
    
    $('#bdown').click(function(){
        if(bcountminutes <= 10 && bcountminutes > 1){
        bcountminutes --;
       $('#bminutes').text(bcountminutes);
        }
        
        else if(bcountminutes === 0){
            $('#bminutes').text(bcountminutes);
        }
        
        else if(bcountminutes >= 11){
            bcountminutes --;
            $('#bminutes').text(bcountminutes);
        }
    });
    
//-------------------TIMER UP AND DOWN BUTTONS-----------------------
    
//    $('#start').click(function(){
//            count = countminutes * 60;
//        setInterval(function(){
//            count--;
//            if(count < 600){
//                $('#minutes').text('0' + Math.floor(count / 60));
//            } else {
//                 $('#minutes').text(Math.floor(count / 60));
//            }
//            if (count % 60 < 10){
//                $('#seconds').text('0' + count % 60);
//            } else {
//                $('#seconds').text(count % 60);
//            }
//            
//            
//        },1000);
//    });
    
    
    $('#working').progressbar({
        value: 0
    });
    
    
    
    $('.go').click(function(){
        
        $("#container").css("display", "none");
        $("#beginTimer").css("display", "none");

        
        $("#containerTwo").css("display", "flex");
        $("#containerThree").css("display", "block");
        $("#containerFour").css("display", "flex");
        interval = (countminutes*60)*10;
        binterval = (bcountminutes*60)*10;
        
        cyclea();
      
    });
    
    $('.ppause').click(function(){
        if(paused === false){
            paused = true;
            $('.ppause').html('Play');
        } else {
            paused = false;
            displayTime($('#gmt'));
            predictEndTwo($('#gmt2'));
            $('.ppause').html('Pause');
        }
    });
    

function cyclea(){
    setTimeout(function(){
            $('.workrest').text('Work!');
            $('#beforee').text('You should finish working by ');
        
        
                count = countminutes * 60;
                setInterval(function(){
                count--;
                if(count < 600){
                    $('#vminutes').text('0' + Math.floor(count / 60));
                } else {
                     $('#vminutes').text(Math.floor(count / 60));
                }
                if (count % 60 < 10){
                    $('#vseconds').text('0' + count % 60);
                } else {
                    $('#vseconds').text(count % 60);
                }
                },1000); 
            
            displayTime($('#gmt'));
            predictEnd($('#gmt2'));
            progress = setInterval(function(){
            if(paused !== true){
            y = 0;
            x++;
            displayTime($('#gmt'));
            predictEnd($('#gmt2'));
            $('#xpercent').text(x + '%'); 
            $('#working').progressbar('option','value', x);
            if(x>99){
                clearInterval(progress);
                cycleb();
            }
            }
           },interval)
       }),100; 
}

function cycleb(){
    setTimeout(function(){
            $('.workrest').text('Break..');
            $('#beforee').text('Your break finishes at ');
        
                bcount = bcountminutes * 60;
                setInterval(function(){
                bcount--;
                if(bcount < 600){
                    $('#vminutes').text('0' + Math.floor(bcount / 60));
                } else {
                     $('#vminutes').text(Math.floor(bcount / 60));
                }
                if (bcount % 60 < 10){
                    $('#vseconds').text('0' + bcount % 60);
                } else {
                    $('#vseconds').text(bcount % 60);
                }
                },1000); 
            
            displayTime($('#gmt'));
            predictEndTwo($('#gmt2'));
            progressb = setInterval(function(){
            if(paused !== true){
            x = 0;
            y++;
            displayTime($('#gmt'));
            predictEndTwo($('#gmt2'));
            $('#xpercent').text(y + '%');
            $('#working').progressbar('option','value', y);
            if(y>99){
                clearInterval(progressb);
                cyclea();
            }
            }
           },binterval)
       }),100; 
}
    
    
    $('.rreset').click(function(){
    clearInterval(progress);
    clearInterval(progressb);
    x = 0;
    y = 0;
    $('#xpercent').text('');
        
    $("#container").css("display", "flex");
    $("#beginTimer").css("display", "flex");    
        
    $("#containerTwo").css("display", "none");   
    $("#containerThree").css("display", "none");   
    $("#containerFour").css("display", "none");   
//    $("#footer").css("display", "none");
        
    $('#working').progressbar({
        value: 0
    });
        
    });
    
    
function displayTime(x){
    d = new Date();
    n = d.getHours();
    o = d.getMinutes();
    if(o < 10) {
        o = '0' + o;
    }
    if(n < 10) {
        n = '0' + n;
    }
    x.text(n + ':' + o);
}
    
function predictEnd(y){
    fv = 100 - x;
    bv = (fv * interval)/1000;
    bv = Math.floor(bv/60);
    dd = new Date();
    nn = dd.getHours();
    oo = dd.getMinutes();
    nn = nn * 60;
    zxtotal = nn + oo + bv;
    
    zxmin = Math.floor(zxtotal/60);
    if (zxmin === 24){
        zxmin = '0' + 0;
    }
    if (zxmin === 25){
        zxmin = '0' + 1;
    }
    if (zxmin < 10){
        zxmin = '0' + zxmin;
    }
    zxsec = zxtotal % 60;
    
    if(zxsec < 10){
        zxsec = '0' + zxsec; 
    }
    y.text(zxmin + ':' + zxsec);
}
    
function predictEndTwo(p){
    fv = 100 - y;
    console.log(fv);
    bv = (fv * binterval)/1000;
    bv = Math.floor(bv/60);
    dd = new Date();
    nn = dd.getHours();
    oo = dd.getMinutes();
    nn = nn * 60;
    zxtotal = nn + oo + bv;
    
    zxmin = Math.floor(zxtotal/60);
    if (zxmin === 24){
        zxmin = '0' + 0;
    }
    if (zxmin === 25){
        zxmin = '0' + 1;
    }
    if (zxmin < 10){
        zxmin = '0' + zxmin;
    }
    zxsec = zxtotal % 60;
    
    if(zxsec < 10){
        zxsec = '0' + zxsec; 
    }
    p.text(zxmin + ':' + zxsec);
}


});







//    $('#up').click(function(){
//        if(countminutes <= 8 && countminutes > -1){
//        countminutes ++;
//       $('#minutes').text('0' + countminutes);
//        }
//        
//        else if(countminutes >= 9){
//            countminutes ++;
//            $('#minutes').text(countminutes);
//        }
//    });
//    
//    $('#down').click(function(){
//        if(countminutes <= 10 && countminutes > 1){
//        countminutes --;
//       $('#minutes').text('0' + countminutes);
//        }
//        
//        else if(countminutes === 0){
//            $('#minutes').text('0' + countminutes);
//        }
//        
//        else if(countminutes >= 11){
//            countminutes --;
//            $('#minutes').text(countminutes);
//        }
//    });
//    
//    $('#bup').click(function(){
//        if(bcountminutes <= 8 && bcountminutes > -1){
//        bcountminutes ++;
//       $('#bminutes').text('0' + bcountminutes);
//        }
//        
//        else if(bcountminutes >= 9){
//            bcountminutes ++;
//            $('#bminutes').text(bcountminutes);
//        }
//    });
//    
//    $('#bdown').click(function(){
//        if(bcountminutes <= 10 && bcountminutes > 1){
//        bcountminutes --;
//       $('#bminutes').text('0' + bcountminutes);
//        }
//        
//        else if(bcountminutes === 0){
//            $('#bminutes').text('0' + bcountminutes);
//        }
//        
//        else if(bcountminutes >= 11){
//            bcountminutes --;
//            $('#bminutes').text(bcountminutes);
//        }
//    });