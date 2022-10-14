//確認是否為空
function empty(val) {
    if(typeof val === 'undefined' ||  val==undefined || val==null || val=='') return true;
    return false;
}


function appendFormat(number,symbol=',')
{
    number += '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + symbol + '$2');
    }
    return x1 + x2;
}


function randomChr(digit)
{
    var str = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;

    for (var i=1 ;i<=digit ;i++)
    {
        str += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }

    return str;
}

function randomNum(digit)
{
    var str = '';

    for (var i=1 ;i<=digit ;i++)
    {
        str += Math.floor(Math.random() * 10);
    }

    return str;
}

//確認字串是否為Json
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

//ajax出錯時的function
function ajaxError(jqXHR,textStatus,errorThrown){
    // console.log('jqXHR:');
    // console.log(jqXHR);
    console.log('Ajax Error:')
    console.log(jqXHR.responseJSON.message);
    console.log(' in '+jqXHR.responseJSON.file+' line:'+jqXHR.responseJSON.line);
    // console.log('textStatus:');
    // console.log(textStatus);
    // console.log('errorThrown:');
    // console.log(errorThrown);
    // $('.loading-mask').loading('stop');
    // $('.detail_loading_mask').loading('stop');
    // page.loading.stop();
    // page.loading.stop('.modal-content');
    // $('.modal button[type=submit]').attr('data-kt-indicator', 'off');
    // $('.modal button[type=submit]').prop('disabled', false);

    Swal.fire({
        text: '系統發生錯誤,請稍後再嘗試 (Code: Ajax Error)',
        icon: "error",
        buttonsStyling: !1,
        confirmButtonText: "好",
        customClass: {
            confirmButton: "btn btn-primary"
        }
    });
}

function getOption($data,$value_column,$text_column,$default,$empty){

    $return_str = '';
    if($empty!=''){
        $return_str += '<option value="" >'+$empty+'</option>';
    }

    for(var $d=0;$d<$data.length;$d++){
        $row = $data[$d];

        $val = $row[$value_column];
        $text = $row[$text_column];

        $return_str += '<option ';

        if($default==$val){
            $return_str += 'selected';
        }

        $return_str += ' value="'+$val+'">';
        $return_str += $text;
        $return_str += '</option>';


    }
    
    return $return_str;

}
