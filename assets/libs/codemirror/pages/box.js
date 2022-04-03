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

var editor8 = CodeMirror.fromTextArea(document.getElementById("code8"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor9 = CodeMirror.fromTextArea(document.getElementById("code9"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var editor10 = CodeMirror.fromTextArea(document.getElementById("code10"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var myModal = document.getElementById('section1');
myModal.addEventListener('shown.bs.modal', function (event) {

    var code = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code += '   <div class="card-body text-center">\r\n';
    code += '       <a href="#" class="text-decoration-none">\r\n';
    code += '           <p class="display-5 text-primary mb-1">11</p>\r\n';
    code += '           <p class="m-0">POSTS</p>\r\n';
    code += '       </a>\r\n';
    code += '   </div>\r\n';
    code += '</div>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});

var myModal2 = document.getElementById('section2');
myModal2.addEventListener('shown.bs.modal', function (event) {

    var code2 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-start-0 border-end-0 rounded-top mb-4">\r\n';
    code2 += '  <div class="card-body text-center">\r\n';
    code2 += '      <p class="display-5 text-primary mb-1">24</p>\r\n';
    code2 += '      <p class="m-0">IMAGES</p>\r\n';
    code2 += '  </div>\r\n';
    code2 += '</div>';
    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});

var myModal3 = document.getElementById('section3');
myModal3.addEventListener('shown.bs.modal', function (event) {

    var code3 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-start-0 rounded-top mb-4">\r\n';
    code3 += '  <div class="card-body text-center">\r\n';
    code3 += '      <p class="display-5 text-primary mb-1">54</p>\r\n';
    code3 += '      <p class="m-0">USERS</p>\r\n';
    code3 += '  </div>\r\n';
    code3 += '</div>';
    editor3.getDoc().setValue(code3);

});

myModal3.addEventListener('hidden.bs.modal', function (event) {
    editor3.getDoc().setValue('');
});

var myModal4 = document.getElementById('section4');
myModal4.addEventListener('shown.bs.modal', function (event) {

    var code4 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code4 += '  <div class="card-body text-center">\r\n';
    code4 += '      <a href="#" class="text-decoration-none">\r\n';
    code4 += '          <p class="display-5 text-primary mb-1"><i class="fas fa-user"></i></p>\r\n';
    code4 += '          <p class="m-0">USERS</p>\r\n';
    code4 += '      </a>\r\n';
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
    code5 += '  <div class="card-body text-center">\r\n';
    code5 += '      <p class="display-5 text-primary mb-1"><i class="fas fa-user"></i></p>\r\n';
    code5 += '      <p class="m-0">USERS</p>\r\n';
    code5 += '  </div>\r\n';
    code5 += '</div>';
    editor5.getDoc().setValue(code5);

});

myModal5.addEventListener('hidden.bs.modal', function (event) {
    editor5.getDoc().setValue('');
});

var myModal6 = document.getElementById('section6');
myModal6.addEventListener('shown.bs.modal', function (event) {

    var code6 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-start-0 rounded-top mb-4">\r\n';
    code6 += '  <div class="card-body text-center">\r\n';
    code6 += '      <p class="display-5 text-primary mb-1"><i class="fas fa-user"></i></p>\r\n';
    code6 += '      <p class="m-0">USERS</p>\r\n';
    code6 += '  </div>\r\n';
    code6 += '</div>';
    editor6.getDoc().setValue(code6);

});

myModal6.addEventListener('hidden.bs.modal', function (event) {
    editor6.getDoc().setValue('');
});

var myModal7 = document.getElementById('section7');
myModal7.addEventListener('shown.bs.modal', function (event) {

    var code7 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code7 += '  <div class="card-body">\r\n';
    code7 += '      <div class="d-flex align-items-center">\r\n';
    code7 += '          <div class="flex-shrink-0">\r\n';
    code7 += '              <i class="fas fa-user display-5"></i>\r\n';
    code7 += '          </div>\r\n';
    code7 += '          <div class="flex-grow-1 ms-3">\r\n';
    code7 += '              <h5 class="text-primary mb-1">User</h5>\r\n';
    code7 += '              <p class="small m-0">Web Developer</p>\r\n';
    code7 += '          </div>\r\n';
    code7 += '      </div>\r\n';
    code7 += '  </div>\r\n';
    code7 += '</div>';
    editor7.getDoc().setValue(code7);

});

myModal7.addEventListener('hidden.bs.modal', function (event) {
    editor7.getDoc().setValue('');
});

var myModal8 = document.getElementById('section8');
myModal8.addEventListener('shown.bs.modal', function (event) {

    var code8 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code8 += '  <div class="card-body">\r\n';
    code8 += '      <a href="#" class="text-primary text-decoration-none">\r\n';
    code8 += '          <div class="d-flex align-items-center">\r\n';
    code8 += '              <div class="flex-shrink-0">\r\n';
    code8 += '                  <i class="fas fa-user display-5"></i>\r\n';
    code8 += '              </div>\r\n';
    code8 += '              <div class="flex-grow-1 ms-3">\r\n';
    code8 += '                  <h5 class="text-primary mb-1">User</h5>\r\n';
    code8 += '                  <p class="small m-0">Web Developer</p>\r\n';
    code8 += '              </div>\r\n';
    code8 += '          </div>\r\n';
    code8 += '      </a>\r\n';
    code8 += '  </div>\r\n';
    code8 += '</div>\r\n';
    editor8.getDoc().setValue(code8);

});

myModal8.addEventListener('hidden.bs.modal', function (event) {
    editor8.getDoc().setValue('');
});

var myModal9 = document.getElementById('section9');
myModal9.addEventListener('shown.bs.modal', function (event) {

    var code9 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code9 += '  <div class="card-body">\r\n';
    code9 += '      <div class="d-flex align-items-center">\r\n';
    code9 += '          <div class="flex-shrink-0">\r\n';
    code9 += '              <img width="64" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code9 += '          </div>\r\n';
    code9 += '          <div class="flex-grow-1 ms-3">\r\n';
    code9 += '              <h5 class="text-primary mb-1">User</h5>\r\n';
    code9 += '              <p class="small m-0">Web Developer</p>\r\n';
    code9 += '          </div>\r\n';
    code9 += '      </div>\r\n';
    code9 += '  </div>\r\n';
    code9 += '</div>';
    editor9.getDoc().setValue(code9);

});

myModal9.addEventListener('hidden.bs.modal', function (event) {
    editor9.getDoc().setValue('');
});

var myModal10 = document.getElementById('section10');
myModal10.addEventListener('shown.bs.modal', function (event) {

    var code10 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code10 += ' <div class="card-body">\r\n';
    code10 += '     <a href="#" class="text-primary text-decoration-none">\r\n';
    code10 += '         <div class="d-flex align-items-center">\r\n';
    code10 += '             <div class="flex-shrink-0">\r\n';
    code10 += '                 <img width="64" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code10 += '             </div>\r\n';
    code10 += '             <div class="flex-grow-1 ms-3">\r\n';
    code10 += '                 <h5 class="text-primary mb-1">User</h5>\r\n';
    code10 += '                 <p class="small m-0">Web Developer</p>\r\n';
    code10 += '             </div>\r\n';
    code10 += '         </div>\r\n';
    code10 += '     </a>\r\n';
    code10 += ' </div>\r\n';
    code10 += ' </div>';
    editor10.getDoc().setValue(code10);

});

myModal10.addEventListener('hidden.bs.modal', function (event) {
    editor10.getDoc().setValue('');
});