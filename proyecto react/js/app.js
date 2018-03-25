function uploadFile() {
    $('input[type="file"]').on('change', function () {
        var reader = new FileReader();
        reader.onload = function () {
            var thisImage = reader.result;
            if(localStorage.getItem('imgData')){
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