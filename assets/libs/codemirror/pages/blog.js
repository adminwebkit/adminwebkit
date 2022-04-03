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

var myModal = document.getElementById('section1');
myModal.addEventListener('shown.bs.modal', function (event) {

    var code = '<div class="card box-shadow2 mb-4">\r\n';
    code += '   <a href="#"><img src="assets/img/welcome.jpg" class="card-img-top" alt="User"></a>\r\n';
    code += '   <div class="card-body p-4">\r\n';
    code += '       <h5 class="card-title"><a href="#" class="text-primary text-decoration-none">Card title</a></h5>\r\n';
    code += '       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n';
    code += '   </div>\r\n';
    code += '</div>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});

var myModal2 = document.getElementById('section2');
myModal2.addEventListener('shown.bs.modal', function (event) {

    var code2 = '<div class="card box-shadow2 mb-4">\r\n';
    code2 += '  <a href="#"><img src="assets/img/welcome.jpg" class="card-img-top" alt="User"></a>\r\n';
    code2 += '  <div class="card-body p-4">\r\n';
    code2 += '      <h5 class="card-title"><a href="#" class="text-primary text-decoration-none">Card title</a></h5>\r\n';
    code2 += '      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n';
    code2 += '  </div>\r\n';
    code2 += '  <ul class="list-group list-group-flush">\r\n';
    code2 += '      <li class="list-group-item">\r\n';
    code2 += '          <div class="d-flex align-items-center">\r\n';
    code2 += '              <div class="flex-shrink-0">\r\n';
    code2 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code2 += '              </div>\r\n';
    code2 += '              <div class="flex-grow-1 ms-3">\r\n';
    code2 += '                  <p class="small m-0">Great post my friend!</p>\r\n';
    code2 += '                  <p class="card-text"><small class="text-muted">5 mins ago</small></p>\r\n';
    code2 += '              </div>\r\n';
    code2 += '          </div>\r\n';
    code2 += '      </li>\r\n';
    code2 += '      <li class="list-group-item">\r\n';
    code2 += '          <div class="d-flex align-items-center">\r\n';
    code2 += '              <div class="flex-shrink-0">\r\n';
    code2 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code2 += '              </div>\r\n';
    code2 += '              <div class="flex-grow-1 ms-3">\r\n';
    code2 += '                  <p class="small m-0">Great post!</p>\r\n';
    code2 += '                  <p class="card-text"><small class="text-muted">7 mins ago</small></p>\r\n';
    code2 += '              </div>\r\n';
    code2 += '          </div>\r\n';
    code2 += '      </li>\r\n';
    code2 += '      <li class="list-group-item p-3">\r\n';
    code2 += '          <div class="input-group">\r\n';
    code2 += '              <span class="input-group-text border-end-0 bg-white" id="input-comment"><i class="fas fa-comment"></i></span>\r\n';
    code2 += '              <input type="text" class="form-control border-start-0" placeholder="Comment..." aria-label="Comment..." aria-describedby="input-comment">\r\n';
    code2 += '          </div>\r\n';
    code2 += '      </li>\r\n';
    code2 += '  </ul>\r\n';
    code2 += '</div>';
    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});

var myModal3 = document.getElementById('section3');
myModal3.addEventListener('shown.bs.modal', function (event) {

    var code3 = '<div class="card box-shadow2 mb-4">\r\n';
    code3 += '  <a href="#"><img src="assets/img/welcome.jpg" class="card-img-top" alt="User"></a>\r\n';
    code3 += '  <div class="card-body p-4">\r\n';
    code3 += '      <h5 class="card-title"><a href="#" class="text-primary text-decoration-none">Card title</a></h5>\r\n';
    code3 += '      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n';
    code3 += '      <p class="card-text"><small class="text-muted"><a href="#" class="text-muted text-decoration-none">Last updated 3 mins ago</a></small></p>\r\n';
    code3 += '  </div>\r\n';
    code3 += '  <div class="card-footer">\r\n';
    code3 += '      <a href="#" class="text-primary text-decoration-none">\r\n';
    code3 += '          <div class="d-flex align-items-center">\r\n';
    code3 += '              <div class="flex-shrink-0">\r\n';
    code3 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code3 += '              </div>\r\n';
    code3 += '              <div class="flex-grow-1 ms-3">\r\n';
    code3 += '                  <p class="text-primary mb-0">User</p>\r\n';
    code3 += '                  <p class="small text-muted m-0">Author</p>\r\n';
    code3 += '              </div>\r\n';
    code3 += '          </div>\r\n';
    code3 += '      </a>\r\n';
    code3 += '  </div>\r\n';
    code3 += '</div>\r\n';
    editor3.getDoc().setValue(code3);

});

myModal3.addEventListener('hidden.bs.modal', function (event) {
    editor3.getDoc().setValue('');
});