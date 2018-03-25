$('input[type="file"]').on('change', function () {
    var reader = new FileReader();
    reader.onload = function () {
        var thisImage = reader.result;
        localStorage.setItem("imgData", thisImage);
    };
    reader.readAsDataURL(this.files[0]);
    var dataImage = localStorage.getItem('imgData');
    $('.imgSample').append(`<img src="${dataImage}">`);
});

// $('input#show').click(function () {
//     var dataImage = localStorage.getItem('imgData');
//     console.log(dataImage);
//     var imgCtr = $('<img/>').prop('src', dataImage);
//     $('div#imgContainer').append(imgCtr);
// });