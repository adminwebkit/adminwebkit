var editor = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var myModal = document.getElementById('section1');
myModal.addEventListener('shown.bs.modal', function (event) {

    var code = '<div class="card box-shadow2 mb-4">\r\n';
    code += '   <div class="card-body">\r\n';
    code += '       <div class="swiper mySwiper">\r\n';
    code += '           <div class="swiper-wrapper">\r\n';
    code += '               <div class="swiper-slide">\r\n';
    code += '                   <a href="#" class="openPhoto"><img src="assets/img/welcome.jpg" class="img-fluid"></a>\r\n';
    code += '               </div>\r\n';
    code += '               <div class="swiper-slide">\r\n';
    code += '                   <a href="#"><img src="assets/img/welcome.jpg" class="img-fluid"></a>\r\n';
    code += '               </div>\r\n';
    code += '               <div class="swiper-slide">\r\n';
    code += '                   <a href="#"><img src="assets/img/welcome.jpg" class="img-fluid"></a>\r\n';
    code += '               </div>\r\n';
    code += '               <div class="swiper-slide">\r\n';
    code += '                   <a href="#"><img src="assets/img/welcome.jpg" class="img-fluid"></a>\r\n';
    code += '               </div>\r\n';
    code += '           </div>\r\n';
    code += '       </div>\r\n';
    code += '   </div>\r\n';
    code += '   <div class="card-body">\r\n';
    code += '       <div class="swiper-pagination"></div>\r\n';
    code += '   </div>\r\n';
    code += '</div>\r\n';
    code += '<script>\r\n';
    code += '\r\n';
    code += 'var swiper = new Swiper(".mySwiper", {\r\n';
    code += '   slidesPerView: 3,\r\n';
    code += '   spaceBetween: 30,\r\n';
    code += '   pagination: {\r\n';
    code += '       el: ".swiper-pagination",\r\n';
    code += '       clickable: true,\r\n';
    code +=     '},\r\n';
    code += '   breakpoints: {\r\n';
    code += '       100: {\r\n';
    code += '           slidesPerView: 1\r\n';
    code += '       },\r\n';
    code += '       768: {\r\n';
    code += '           slidesPerView: 1\r\n';
    code += '       },\r\n';
    code += '       1024: {\r\n';
    code += '           slidesPerView: 3\r\n';
    code += '       }\r\n';
    code += '   },\r\n';
    code += '});\r\n';
    code += '\r\n';
    code += '</script>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});