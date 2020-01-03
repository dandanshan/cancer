

var data = {
    "台北": [
        {
            "name": "楊泮池",
            "title": "前台大校長、中研院院士",
            "intro": "",
            "topic": "精準抗癌大未來",
        },
        {
            "name": "蘇志中",
            "title": "台中大里仁愛醫院腫瘤治療科 執行長",
            "intro": "曾任仁愛醫療財團法人仁愛醫院院長、大里仁愛醫院腫瘤治療科主任、三軍總醫院放射腫瘤部主治醫師、美國哈佛醫學院及麻州總醫院臨床研究員，現為台中大里仁愛醫院腫瘤治療科執行長、美國腫瘤學會會員。從事癌症治療及研究30多年，專長為腫瘤之放射線治療、標靶治療、化學、腦部腫瘤光子刀立體定位手術及荷爾蒙治療，著有《從來不放棄：關於癌症，腫瘤科醫師給你的真心建議》、《 癌症的35個秘密》",
            "topic": "開刀、免疫、標靶、放療、還是化療？如何拿到最厲害的抗癌治療",
            "info" : "罹癌的當下，心情一定是慌張的，但不安之餘，可以如何找到最適合個人的治療方式？這包括了最新、最貴的治療方式一定最有用？就醫時該跟醫師詢問些什麼、如何了解治療計畫？做一個聰明的病友，充分了解整個治療過程，才能和醫師密切合作，度過難關。"
        }
    ]
};

var arr = [];

$.each( data, function( key, value ) {
    //arr.push( value );
    console.log("key => "+key);//will output: 04c85ccab52880 and all such
    $.each( value, function( ky, val ) {
        console.log('ky => '+ky);//will output: name, firstname, societe
        console.log('val => '+val);//will output: name1, fname1, soc1
    });

    $.each( value, function( ky, val ) {

        $('#intro .intro__slides')
            .append('<li><div class="intro__info"><div class="intro__avatar"><div class="avatar">' +
            '<img src="https://www.commonhealth.com.tw/event/2019/cancer/assets/images/speaker/17.jpg" alt="">' + '</div></div><div class="intro__name">' + ky.name + '</div><div class="intro__title">' + ky.title + '</div>');
    });
});