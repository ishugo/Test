$(function(){
    $(".b01").click(function(){ 
        //http://ook.dynu.net:9071/github/function.php
        //https://hugo.qov.tw/github/function.php
        // $.ajax('http://ook.dynu.net:9071/github/function.php',{  
        //     type:'POST'
        //     ,data:{	
        //         opt:1
        //     }
        //     }).done(function(msg){
        //         alert(msg);
        //         $("#editor_m").html(msg);
        //          //$(".alert_java").html(msg);
        //          //if(msg==''){location.reload();}else{alert(msg);}
        // });
        axios.post('http://ook.dynu.net:9071/github/function.php', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            alert(response);
            console.log(response);
          })
          .catch(function (error) {
            alert(error);
            console.log(error);
          });

    })

    $(".b02").click(function(){           
        var http = new XMLHttpRequest();
        var url = "http://ook.dynu.net:9071/github/function.php";
        var params = "opt=1";
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
            }
        }
        http.open("POST", url, true);
        http.send(params);
    })



//	console.log(); //debug
//	alert(); //debug
});