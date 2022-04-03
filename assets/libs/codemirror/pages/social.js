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


var myModal = document.getElementById('section1');
myModal.addEventListener('shown.bs.modal', function (event) {

    var code = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code += '   <div class="card-header p-3">\r\n';
    code += '       <div class="d-flex align-items-center">\r\n';
    code += '           <div class="flex-shrink-0">\r\n';
    code += '               <a href="#"><img width="48" src="assets/img/user.jpg" alt="User" class="rounded-circle"></a>\r\n';
    code += '           </div>\r\n';
    code += '           <div class="flex-grow-1 ms-3">\r\n';
    code += '               <h5 class="text-primary mb-1"><a href="#" class="text-primary text-decoration-none">User</a></h5>\r\n';
    code += '               <p class="small m-0">Web Developer</p>\r\n';
    code += '           </div>\r\n';
    code += '       </div>\r\n';
    code += '   </div>\r\n';
    code += '   <ul class="list-group list-group-flush">\r\n';
    code += '       <a href="#" class="list-group-item list-group-item-action text-primary p-3">Posts <span class="badge bg-primary rounded-pill float-end mt-2">14</span></a>\r\n';
    code += '       <a href="#" class="list-group-item list-group-item-action text-primary p-3">Followers <span class="badge bg-primary rounded-pill float-end mt-2">25</span></a>\r\n';
    code += '       <a href="#" class="list-group-item list-group-item-action text-primary p-3">Following <span class="badge bg-primary rounded-pill float-end mt-2">44</span></a>\r\n';
    code += '   </ul>\r\n';
    code += '</div>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});

var myModal2 = document.getElementById('section2');
myModal2.addEventListener('shown.bs.modal', function (event) {

    var code2 = '<div class="card box-shadow2 border-5 border-success border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code2 += '  <div class="card-header p-3">\r\n';
    code2 += '      <h5 class="text-success mb-1"><a href="#" class="text-success text-decoration-none">User</a></h5>\r\n';
    code2 += '      <p class="small m-0">Web Developer</p>\r\n';
    code2 += '  </div>\r\n';
    code2 += '  <ul class="list-group list-group-flush">\r\n';
    code2 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3">Posts <span class="badge bg-success rounded-pill float-end mt-2">14</span></a>\r\n';
    code2 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3">Followers <span class="badge bg-success rounded-pill float-end mt-2">25</span></a>\r\n';
    code2 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3">Following <span class="badge bg-success rounded-pill float-end mt-2">44</span></a>\r\n';
    code2 += '  </ul>\r\n';
    code2 += '</div>';
    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});

var myModal3 = document.getElementById('section3');
myModal3.addEventListener('shown.bs.modal', function (event) {

    var code3 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code3 += '  <div class="card-header p-4">\r\n';
    code3 += '      <div class="d-flex align-items-start">\r\n';
    code3 += '          <div class="flex-shrink-0">\r\n';
    code3 += '              <a href="#"><img width="48" src="assets/img/user.jpg" alt="User" class="rounded-circle"></a>\r\n';
    code3 += '          </div>\r\n';
    code3 += '          <div class="flex-grow-1 ms-3">\r\n';
    code3 += '              <h5 class="text-primary mb-1"><a href="#" class="text-primary text-decoration-none">User</a></h5>\r\n';
    code3 += '              <p class="small text-muted m-0">Web Developer - <a href="#" class="text-primary text-decoration-none">My Website</a></p>\r\n';
    code3 += '              <p class="fst-italic m-0 mt-2">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n';
    code3 += '              <ul class="nav mt-2 mb-2">\r\n';
    code3 += '                  <li class="nav-item">\r\n';
    code3 += '                      <a class="nav-link text-primary p-0 me-2" href="#"><i class="fab fa-facebook"></i></a>\r\n';
    code3 += '                  </li>\r\n';
    code3 += '                  <li class="nav-item">\r\n';
    code3 += '                      <a class="nav-link text-primary p-0 me-2" href="#"><i class="fab fa-instagram"></i></a>\r\n';
    code3 += '                  </li>\r\n';
    code3 += '                  <li class="nav-item">\r\n';
    code3 += '                      <a class="nav-link text-primary p-0 me-2" href="#"><i class="fab fa-twitter"></i></a>\r\n';
    code3 += '                  </li>\r\n';
    code3 += '              </ul>\r\n';
    code3 += '          </div>\r\n';
    code3 += '      </div>\r\n';
    code3 += '  </div>\r\n';
    code3 += '  <ul class="list-group list-group-flush">\r\n';
    code3 += '      <a href="#" class="list-group-item list-group-item-action text-primary p-3">Posts <span class="badge bg-primary rounded-pill float-end mt-2">14</span></a>\r\n';
    code3 += '      <a href="#" class="list-group-item list-group-item-action text-primary p-3">Followers <span class="badge bg-primary rounded-pill float-end mt-2">25</span></a>\r\n';
    code3 += '      <a href="#" class="list-group-item list-group-item-action text-primary p-3">Following <span class="badge bg-primary rounded-pill float-end mt-2">44</span></a>\r\n';
    code3 += '  </ul>\r\n';
    code3 += '</div>';
    editor3.getDoc().setValue(code3);

});

myModal3.addEventListener('hidden.bs.modal', function (event) {
    editor3.getDoc().setValue('');
});

var myModal4 = document.getElementById('section4');
myModal4.addEventListener('shown.bs.modal', function (event) {

    var code4 = '<div class="card box-shadow2 border-5 border-success border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code4 += '  <div class="card-header p-4">\r\n';
    code4 += '      <h5 class="text-success mb-1"><a href="#" class="text-success text-decoration-none">User</a></h5>\r\n';
    code4 += '      <p class="small text-muted m-0">Web Developer - <a href="#" class="text-success text-decoration-none">My Website</a></p>\r\n';
    code4 += '      <p class="fst-italic m-0 mt-2">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n';
    code4 += '      <ul class="nav mt-2 mb-2">\r\n';
    code4 += '          <li class="nav-item">\r\n';
    code4 += '              <a class="nav-link text-success p-0 me-2" href="#"><i class="fab fa-facebook"></i></a>\r\n';
    code4 += '          </li>\r\n';
    code4 += '          <li class="nav-item">\r\n';
    code4 += '              <a class="nav-link text-success p-0 me-2" href="#"><i class="fab fa-instagram"></i></a>\r\n';
    code4 += '          </li>\r\n';
    code4 += '          <li class="nav-item">\r\n';
    code4 += '              <a class="nav-link text-success p-0 me-2" href="#"><i class="fab fa-twitter"></i></a>\r\n';
    code4 += '          </li>\r\n';
    code4 += '      </ul>\r\n';
    code4 += '  </div>\r\n';
    code4 += '  <ul class="list-group list-group-flush">\r\n';
    code4 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3">Posts <span class="badge bg-success rounded-pill float-end mt-2">14</span></a>\r\n';
    code4 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3">Followers <span class="badge bg-success rounded-pill float-end mt-2">25</span></a>\r\n';
    code4 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3">Following <span class="badge bg-success rounded-pill float-end mt-2">44</span></a>\r\n';
    code4 += '  </ul>\r\n';
    code4 += '</div>';
    editor4.getDoc().setValue(code4);

});

myModal4.addEventListener('hidden.bs.modal', function (event) {
    editor4.getDoc().setValue('');
});

var myModal5 = document.getElementById('section5');
myModal5.addEventListener('shown.bs.modal', function (event) {

    var code5 = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code5 += '  <ul class="list-group list-group-flush">\r\n';
    code5 += '      <a href="#" class="list-group-item list-group-item-action text-primary p-3">Posts <span class="badge bg-primary rounded-pill float-end mt-2">14</span></a>\r\n';
    code5 += '      <a href="#" class="list-group-item list-group-item-action text-primary p-3">Followers <span class="badge bg-primary rounded-pill float-end mt-2">25</span></a>\r\n';
    code5 += '      <a href="#" class="list-group-item list-group-item-action text-primary p-3">Following <span class="badge bg-primary rounded-pill float-end mt-2">44</span></a>\r\n';
    code5 += '  </ul>\r\n';
    code5 += '</div>';
    editor5.getDoc().setValue(code5);

});

myModal5.addEventListener('hidden.bs.modal', function (event) {
    editor5.getDoc().setValue('');
});

var myModal6 = document.getElementById('section6');
myModal6.addEventListener('shown.bs.modal', function (event) {

    var code6 = '<div class="card box-shadow2 border-5 border-success border-bottom-0 border-top-0 border-end-0 rounded-top mb-4">\r\n';
    code6 += '  <ul class="list-group list-group-flush">\r\n';
    code6 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3"><i class="fas fa-pen me-1"></i> Posts <span class="badge bg-success rounded-pill float-end mt-2">14</span></a>\r\n';
    code6 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3"><i class="fas fa-users me-1"></i> Followers <span class="badge bg-success rounded-pill float-end mt-2">25</span></a>\r\n';
    code6 += '      <a href="#" class="list-group-item list-group-item-action text-success p-3"><i class="fas fa-arrow-right me-1"></i> Following <span class="badge bg-success rounded-pill float-end mt-2">44</span></a>\r\n';
    code6 += '  </ul>\r\n';
    code6 += '</div>';
    editor6.getDoc().setValue(code6);

});

myModal6.addEventListener('hidden.bs.modal', function (event) {
    editor6.getDoc().setValue('');
});

var myModal7 = document.getElementById('section7');
myModal7.addEventListener('shown.bs.modal', function (event) {

    var code7 = '<div class="card box-shadow2 mb-4">\r\n';
    code7 += '  <div class="card-header p-3">\r\n';
    code7 += '      <div class="d-flex align-items-center">\r\n';
    code7 += '          <div class="flex-shrink-0">\r\n';
    code7 += '              <a href="#"><img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle"></a>\r\n';
    code7 += '          </div>\r\n';
    code7 += '          <div class="flex-grow-1 ms-3">\r\n';
    code7 += '              <h5 class="text-primary mb-0"><a href="#" class="text-primary text-decoration-none">User</a></h5>\r\n';
    code7 += '              <p class="card-text"><small class="text-muted"><a href="#" class="text-muted text-decoration-none">3 mins ago</a></small></p>\r\n';
    code7 += '          </div>\r\n';
    code7 += '          <div class="dropdown float-end">\r\n';
    code7 += '              <button class="btn btn-link dropdown-toggle text-muted" type="button" id="socialMenu" data-bs-toggle="dropdown" aria-expanded="false">\r\n';
    code7 += '                  <i class="fas fa-ellipsis-h"></i>\r\n';
    code7 += '              </button>\r\n';
    code7 += '              <ul class="dropdown-menu" aria-labelledby="socialMenu">\r\n';
    code7 += '                  <li><a class="dropdown-item" href="#">Report</a></li>\r\n';
    code7 += '                  <li><hr class="dropdown-divider"></li>\r\n';
    code7 += '                  <li><a class="dropdown-item" href="#">Delete</a></li>\r\n';
    code7 += '              </ul>\r\n';
    code7 += '          </div>\r\n';
    code7 += '      </div>\r\n';
    code7 += '  </div>\r\n';
    code7 += '  <div class="card-body p-4">\r\n';
    code7 += '      <img src="assets/img/welcome.jpg" class="img-fluid mb-3" alt="User">\r\n';
    code7 += '      <p class="card-text social-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n';
    code7 += '  </div>\r\n';
    code7 += '  <ul class="list-group list-group-flush">\r\n';
    code7 += '      <li class="list-group-item">\r\n';
    code7 += '          <div class="d-flex align-items-center">\r\n';
    code7 += '              <div class="flex-shrink-0">\r\n';
    code7 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code7 += '              </div>\r\n';
    code7 += '              <div class="flex-grow-1 ms-3">\r\n';
    code7 += '                  <p class="small m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n';
    code7 += '                  <p class="card-text"><small class="text-muted">5 mins ago</small></p>\r\n';
    code7 += '              </div>\r\n';
    code7 += '          </div>\r\n';
    code7 += '      </li>\r\n';
    code7 += '      <li class="list-group-item">\r\n';
    code7 += '          <div class="d-flex align-items-center">\r\n';
    code7 += '              <div class="flex-shrink-0">\r\n';
    code7 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code7 += '              </div>\r\n';
    code7 += '              <div class="flex-grow-1 ms-3">\r\n';
    code7 += '                  <p class="small m-0">Great shot!</p>\r\n';
    code7 += '                  <p class="card-text"><small class="text-muted">7 mins ago</small></p>\r\n';
    code7 += '              </div>\r\n';
    code7 += '          </div>\r\n';
    code7 += '      </li>\r\n';
    code7 += '      <li class="list-group-item p-3">\r\n';
    code7 += '          <div class="input-group">\r\n';
    code7 += '              <span class="input-group-text border-end-0 bg-white" id="input-comment"><i class="fas fa-comment"></i></span>\r\n';
    code7 += '              <input type="text" class="form-control border-start-0" placeholder="Comment..." aria-label="Comment..." aria-describedby="input-comment">\r\n';
    code7 += '          </div>\r\n';
    code7 += '      </li>\r\n';
    code7 += '  </ul>\r\n';
    code7 += '  <div class="card-body">\r\n';
    code7 += '      <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i></a>\r\n';
    code7 += '      <a href="#" class="btn btn-secondary"><i class="fas fa-comment"></i></a>\r\n';
    code7 += '      <a href="#" class="btn btn-secondary"><i class="fas fa-share-alt"></i></a>\r\n';
    code7 += '  </div>\r\n';
    code7 += '</div>';
    editor7.getDoc().setValue(code7);

});

myModal7.addEventListener('hidden.bs.modal', function (event) {
    editor7.getDoc().setValue('');
});

var myModal8 = document.getElementById('section8');
myModal8.addEventListener('shown.bs.modal', function (event) {

    var code8 = '<div class="card box-shadow2 mb-4">\r\n';
    code8 += '  <div class="card-header p-3">\r\n';
    code8 += '      <div class="d-flex align-items-center">\r\n';
    code8 += '          <div class="flex-shrink-0">\r\n';
    code8 += '              <a href="#"><img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle"></a>\r\n';
    code8 += '          </div>\r\n';
    code8 += '          <div class="flex-grow-1 ms-3">\r\n';
    code8 += '              <h5 class="text-primary mb-0"><a href="#" class="text-primary text-decoration-none">User</a></h5>\r\n';
    code8 += '              <p class="card-text"><small class="text-muted"><a href="#" class="text-muted text-decoration-none">3 mins ago</a></small></p>\r\n';
    code8 += '          </div>\r\n';
    code8 += '          <div class="dropdown float-end">\r\n';
    code8 += '              <button class="btn btn-link dropdown-toggle text-muted" type="button" id="socialMenu" data-bs-toggle="dropdown" aria-expanded="false">\r\n';
    code8 += '                  <i class="fas fa-ellipsis-h"></i>\r\n';
    code8 += '              </button>\r\n';
    code8 += '              <ul class="dropdown-menu" aria-labelledby="socialMenu">\r\n';
    code8 += '                  <li><a class="dropdown-item" href="#">Report</a></li>\r\n';
    code8 += '                  <li><hr class="dropdown-divider"></li>\r\n';
    code8 += '                  <li><a class="dropdown-item" href="#">Delete</a></li>\r\n';
    code8 += '              </ul>\r\n';
    code8 += '          </div>\r\n';
    code8 += '      </div>\r\n';
    code8 += '  </div>\r\n';
    code8 += '  <div class="card-body p-4">\r\n';
    code8 += '      <p class="card-text social-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\r\n';
    code8 += '  </div>\r\n';
    code8 += '  <ul class="list-group list-group-flush">\r\n';
    code8 += '      <li class="list-group-item">\r\n';
    code8 += '          <div class="d-flex align-items-center">\r\n';
    code8 += '              <div class="flex-shrink-0">\r\n';
    code8 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code8 += '              </div>\r\n';
    code8 += '              <div class="flex-grow-1 ms-3">\r\n';
    code8 += '                  <p class="small m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n';
    code8 += '                  <p class="card-text"><small class="text-muted">5 mins ago</small></p>\r\n';
    code8 += '              </div>\r\n';
    code8 += '          </div>\r\n';
    code8 += '      </li>\r\n';
    code8 += '      <li class="list-group-item">\r\n';
    code8 += '          <div class="d-flex align-items-center">\r\n';
    code8 += '              <div class="flex-shrink-0">\r\n';
    code8 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code8 += '              </div>\r\n';
    code8 += '              <div class="flex-grow-1 ms-3">\r\n';
    code8 += '                  <p class="small m-0">Great shot!</p>\r\n';
    code8 += '                  <p class="card-text"><small class="text-muted">7 mins ago</small></p>\r\n';
    code8 += '              </div>\r\n';
    code8 += '          </div>\r\n';
    code8 += '      </li>\r\n';
    code8 += '      <li class="list-group-item p-3">\r\n';
    code8 += '          <div class="input-group">\r\n';
    code8 += '              <span class="input-group-text border-end-0 bg-white" id="input-comment"><i class="fas fa-comment"></i></span>\r\n';
    code8 += '              <input type="text" class="form-control border-start-0" placeholder="Comment..." aria-label="Comment..." aria-describedby="input-comment">\r\n';
    code8 += '          </div>\r\n';
    code8 += '      </li>\r\n';
    code8 += '  </ul>\r\n';
    code8 += '  <div class="card-body">\r\n';
    code8 += '      <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i></a>\r\n';
    code8 += '      <a href="#" class="btn btn-secondary"><i class="fas fa-comment"></i></a>\r\n';
    code8 += '      <a href="#" class="btn btn-secondary"><i class="fas fa-share-alt"></i></a>\r\n';
    code8 += '  </div>\r\n';
    code8 += '</div>';
    editor8.getDoc().setValue(code8);

});

myModal8.addEventListener('hidden.bs.modal', function (event) {
    editor8.getDoc().setValue('');
});

var myModal9 = document.getElementById('section9');
myModal9.addEventListener('shown.bs.modal', function (event) {

    var code9 = '<div class="card box-shadow2 mb-4">\r\n';
    code9 += '  <div class="card-header p-3">\r\n';
    code9 += '      <div class="d-flex align-items-center">\r\n';
    code9 += '          <div class="flex-shrink-0">\r\n';
    code9 += '              <a href="#"><img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle"></a>\r\n';
    code9 += '          </div>\r\n';
    code9 += '          <div class="flex-grow-1 ms-3">\r\n';
    code9 += '              <h5 class="text-primary mb-0"><a href="#" class="text-primary text-decoration-none">User</a></h5>\r\n';
    code9 += '              <p class="card-text"><small class="text-muted"><a href="#" class="text-muted text-decoration-none">3 mins ago</a></small></p>\r\n';
    code9 += '          </div>\r\n';
    code9 += '          <div class="dropdown float-end">\r\n';
    code9 += '              <button class="btn btn-link dropdown-toggle text-muted" type="button" id="socialMenu" data-bs-toggle="dropdown" aria-expanded="false">\r\n';
    code9 += '                  <i class="fas fa-ellipsis-h"></i>\r\n';
    code9 += '              </button>\r\n';
    code9 += '              <ul class="dropdown-menu" aria-labelledby="socialMenu">\r\n';
    code9 += '                  <li><a class="dropdown-item" href="#">Report</a></li>\r\n';
    code9 += '                  <li><hr class="dropdown-divider"></li>\r\n';
    code9 += '                  <li><a class="dropdown-item" href="#">Delete</a></li>\r\n';
    code9 += '              </ul>\r\n';
    code9 += '          </div>\r\n';
    code9 += '      </div>\r\n';
    code9 += '  </div>\r\n';
    code9 += '  <div class="card-body p-4">\r\n';
    code9 += '      <blockquote class="blockquote mb-0">\r\n';
    code9 += '          <p>"A well-known quote, contained in a blockquote element."</p>\r\n';
    code9 += '          <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\r\n';
    code9 += '      </blockquote>\r\n';
    code9 += '  </div>\r\n';
    code9 += '  <ul class="list-group list-group-flush">\r\n';
    code9 += '      <li class="list-group-item">\r\n';
    code9 += '          <div class="d-flex align-items-center">\r\n';
    code9 += '              <div class="flex-shrink-0">\r\n';
    code9 += '                  <img width="34" src="assets/img/user.jpg" alt="User" class="rounded-circle">\r\n';
    code9 += '              </div>\r\n';
    code9 += '              <div class="flex-grow-1 ms-3">\r\n';
    code9 += '                  <p class="small m-0">Great quote!</p>\r\n';
    code9 += '                  <p class="card-text"><small class="text-muted">7 mins ago</small></p>\r\n';
    code9 += '              </div>\r\n';
    code9 += '          </div>\r\n';
    code9 += '      </li>\r\n';
    code9 += '      <li class="list-group-item p-3">\r\n';
    code9 += '          <div class="input-group">\r\n';
    code9 += '              <span class="input-group-text border-end-0 bg-white" id="input-comment"><i class="fas fa-comment"></i></span>\r\n';
    code9 += '              <input type="text" class="form-control border-start-0" placeholder="Comment..." aria-label="Comment..." aria-describedby="input-comment">\r\n';
    code9 += '          </div>\r\n';
    code9 += '      </li>\r\n';
    code9 += '  </ul>\r\n';
    code9 += '  <div class="card-body">\r\n';
    code9 += '      <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i></a>\r\n';
    code9 += '      <a href="#" class="btn btn-secondary"><i class="fas fa-comment"></i></a>\r\n';
    code9 += '      <a href="#" class="btn btn-secondary"><i class="fas fa-share-alt"></i></a>\r\n';
    code9 += '  </div>\r\n';
    code9 += '</div>';
    editor9.getDoc().setValue(code9);

});

myModal9.addEventListener('hidden.bs.modal', function (event) {
    editor9.getDoc().setValue('');
});