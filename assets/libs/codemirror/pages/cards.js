var editor = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor2 = CodeMirror.fromTextArea(document.getElementById("code2"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor3 = CodeMirror.fromTextArea(document.getElementById("code3"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor4 = CodeMirror.fromTextArea(document.getElementById("code4"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor5 = CodeMirror.fromTextArea(document.getElementById("code5"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor6 = CodeMirror.fromTextArea(document.getElementById("code6"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor7 = CodeMirror.fromTextArea(document.getElementById("code7"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var myModal = document.getElementById('section1');
myModal.addEventListener('shown.bs.modal', function (event) {

    var code = '<div class="card box-shadow2 mb-4">\r\n';
    code += '   <div class="card-body">\r\n';
    code += '       <h2><a href="#" class="text-primary text-decoration-none">Section title</a></h2>\r\n';
    code += '       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#" class="text-primary">Lorem Ipsum</a> has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\r\n';
    code += '   </div>\r\n';
    code += '</div>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});

var myModal2 = document.getElementById('section2');
myModal2.addEventListener('shown.bs.modal', function (event) {

    var code2 = '<div class="card box-shadow2 border-5 border-success border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code2 += '  <div class="card-body">\r\n';
    code2 += '      <h2><a href="#" class="text-success text-decoration-none">Section title</a></h2>\r\n';
    code2 += '      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#" class="text-success">Lorem Ipsum</a> has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\r\n';
    code2 += '  </div>\r\n';
    code2 += '</div>';
    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});

var myModal3 = document.getElementById('section3');
myModal3.addEventListener('shown.bs.modal', function (event) {

    var code3 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-start-0 border-end-0 rounded-top mb-4">\r\n';
    code3 += '  <div class="card-body">\r\n';
    code3 += '      <h2>Section title</h2>\r\n';
    code3 += '      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#" class="text-primary">Lorem Ipsum</a> has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\r\n';
    code3 += '  </div>\r\n';
    code3 += '</div>';
    editor3.getDoc().setValue(code3);

});

myModal3.addEventListener('hidden.bs.modal', function (event) {
    editor3.getDoc().setValue('');
});

var myModal4 = document.getElementById('section4');
myModal4.addEventListener('shown.bs.modal', function (event) {

    var code4 = '<div class="card box-shadow2 border-5 border-danger border-bottom-0 border-top-0 border-start-0 rounded-top mb-4">\r\n';
    code4 += '  <div class="card-body">\r\n';
    code4 += '      <h2><a href="#" class="text-danger text-decoration-none">Section title</a></h2>\r\n';
    code4 += '      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#" class="text-danger">Lorem Ipsum</a> has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\r\n';
    code4 += '  </div>\r\n';
    code4 += '</div>';
    editor4.getDoc().setValue(code4);

});

myModal4.addEventListener('hidden.bs.modal', function (event) {
    editor4.getDoc().setValue('');
});

var myModal5 = document.getElementById('section5');
myModal5.addEventListener('shown.bs.modal', function (event) {

    var code5 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-start-0 border-end-0 rounded-top mb-4">\r\n';
    code5 += '  <div class="card-header">\r\n';
    code5 += '      <p class="mb-0">Featured</p>\r\n';
    code5 += '  </div>\r\n';
    code5 += '  <div class="card-body">\r\n';
    code5 += '      <h5 class="card-title">Special title treatment</h5>\r\n';
    code5 += '      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\r\n';
    code5 += '      <a href="#" class="btn btn-primary">Go somewhere</a>\r\n';
    code5 += '  </div>\r\n';
    code5 += '</div>';
    editor5.getDoc().setValue(code5);

});

myModal5.addEventListener('hidden.bs.modal', function (event) {
    editor5.getDoc().setValue('');
});

var myModal6 = document.getElementById('section6');
myModal6.addEventListener('shown.bs.modal', function (event) {

    var code6 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-start-0 border-end-0 rounded-top mb-4">\r\n';
    code6 += '  <div class="card-body">\r\n';
    code6 += '      <h5 class="card-title">Special title treatment</h5>\r\n';
    code6 += '      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\r\n';
    code6 += '      <a href="#" class="btn btn-primary">Go somewhere</a>\r\n';
    code6 += '  </div>\r\n';
    code6 += '</div>';
    editor6.getDoc().setValue(code6);

});

myModal6.addEventListener('hidden.bs.modal', function (event) {
    editor6.getDoc().setValue('');
});

var myModal7 = document.getElementById('section7');
myModal7.addEventListener('shown.bs.modal', function (event) {

    var code7 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-start-0 border-end-0 rounded-top mb-4 text-center">\r\n';
    code7 += '  <div class="card-body">\r\n';
    code7 += '      <h5 class="card-title">Special title treatment</h5>\r\n';
    code7 += '      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\r\n';
    code7 += '      <a href="#" class="btn btn-primary">Go somewhere</a>\r\n';
    code7 += '  </div>\r\n';
    code7 += '</div>\r\n';
    editor7.getDoc().setValue(code7);

});

myModal7.addEventListener('hidden.bs.modal', function (event) {
    editor7.getDoc().setValue('');
});