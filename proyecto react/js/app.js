function uploadFile() {
    $('input[type="file"]').on('change', function () {
        var reader = new FileReader();
        reader.onload = function () {
            var thisImage = reader.result;
            if (localStorage.getItem('imgData')) {
                localStorage.removeItem('imgData');
                $('.imgSample').children().remove();
            }
            localStorage.setItem("imgData", thisImage);
            // var dataImage = localStorage.getItem('imgData');
            $('.imgSample').append(`<img src="${thisImage}">`);
        };
        reader.readAsDataURL(this.files[0]);
    });
}

// $('input#show').click(function () {
//     var dataImage = localStorage.getItem('imgData');
//     console.log(dataImage);
//     var imgCtr = $('<img/>').prop('src', dataImage);
//     $('div#imgContainer').append(imgCtr);
// });
function loadData() {
    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'js/data.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {

                // .open will NOT return a value but simply returns undefined in async mode so use a callback
                callback(xobj.responseText);

            }
        }
        xobj.send(null);

    }

    // Call to function with anonymous callback
    loadJSON(function (response) {
        let jsonResponse = JSON.parse(response);
        localStorage.setItem('productos', JSON.stringify(jsonResponse[0]));
        Object.keys(jsonResponse[0].productos).map((type)=>{
            console.log(type)
        })
    });
}
