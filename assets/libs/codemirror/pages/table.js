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

var myModal = document.getElementById('section1');
myModal.addEventListener('shown.bs.modal', function (event) {

    var code = '<div class="card box-shadow2 border-5 border-primary border-bottom-0 border-start-0 border-end-0 rounded-top mb-4">\r\n';
    code += '   <div class="card-header p-4">\r\n';
    code += '       <div class="input-group">\r\n';
    code += '           <span class="input-group-text border-end-0 bg-primary" id="input-search"><i class="fas fa-search text-white"></i></span>\r\n';
    code += '           <input type="text" class="form-control form-control-search border-start-0 bg-primary text-white" placeholder="Search..." aria-label="Search..." aria-describedby="input-search">\r\n';
    code += '       </div>\r\n';
    code += '   </div>\r\n';
    code += '   <div class="card-body">\r\n';
    code += '       <div class="table-responsive">\r\n';
    code += '           <table class="table table-striped">\r\n';
    code += '               <thead>\r\n';
    code += '                   <tr>\r\n';
    code += '                       <th scope="col"><a href="#" class="text-primary text-decoration-none">#</a></th>\r\n';
    code += '                       <th scope="col"><a href="#" class="text-primary text-decoration-none">Name</a></th>\r\n';
    code += '                       <th scope="col"><a href="#" class="text-primary text-decoration-none">Surname</a></th>\r\n';
    code += '                       <th scope="col"><a href="#" class="text-primary text-decoration-none">Status</a></th>\r\n';
    code += '                       <th scope="col"><a href="#" class="text-primary text-decoration-none">Actions</a></th>\r\n';
    code += '                   </tr>\r\n';
    code += '               </thead>\r\n';
    code += '               <tbody>\r\n';
    code += '                   <tr>\r\n';
    code += '                       <th scope="row">1</th>\r\n';
    code += '                       <td>Max</td>\r\n';
    code += '                       <td>Smith</td>\r\n';
    code += '                       <td><span class="badge bg-success">Active</span></td>\r\n';
    code += '                       <td>\r\n';
    code += '                           <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-pen"></i></a>\r\n';
    code += '                           <a href="#" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></a>\r\n';
    code += '                       </td>\r\n';
    code += '                   </tr>\r\n';
    code += '                   <tr>\r\n';
    code += '                       <th scope="row">2</th>\r\n';
    code += '                       <td>Ray</td>\r\n';
    code += '                       <td>Johnson</td>\r\n';
    code += '                       <td><span class="badge bg-success">Active</span></td>\r\n';
    code += '                       <td>\r\n';
    code += '                           <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-pen"></i></a>\r\n';
    code += '                           <a href="#" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></a>\r\n';
    code += '                       </td>\r\n';
    code += '                   </tr>\r\n';
    code += '                   <tr>\r\n';
    code += '                       <th scope="row">3</th>\r\n';
    code += '                       <td>Luis</td>\r\n';
    code += '                       <td>Armas</td>\r\n';
    code += '                       <td><span class="badge bg-danger">Inactive</span></td>\r\n';
    code += '                       <td>\r\n';
    code += '                           <a href="#" class="btn btn-warning btn-sm"><i class="fas fa-pen"></i></a>\r\n';
    code += '                           <a href="#" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></a>\r\n';
    code += '                       </td>\r\n';
    code += '                   </tr>\r\n';
    code += '               </tbody>\r\n';
    code += '           </table>\r\n';
    code += '       </div>\r\n';
    code += '   </div>\r\n';
    code += '   <div class="card-footer p-4">\r\n';
    code += '       <nav aria-label="Page navigation">\r\n';
    code += '           <ul class="pagination m-0">\r\n';
    code += '               <li class="page-item"><a class="page-link text-primary" href="#">Previous</a></li>\r\n';
    code += '               <li class="page-item"><a class="page-link text-primary" href="#">1</a></li>\r\n';
    code += '               <li class="page-item"><a class="page-link text-primary" href="#">2</a></li>\r\n';
    code += '               <li class="page-item"><a class="page-link text-primary" href="#">3</a></li>\r\n';
    code += '               <li class="page-item"><a class="page-link text-primary" href="#">Next</a></li>\r\n';
    code += '           </ul>\r\n';
    code += '       </nav>\r\n';
    code += '   </div>\r\n';
    code += '</div>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});

var myModal2 = document.getElementById('section2');
myModal2.addEventListener('shown.bs.modal', function (event) {

    var code2 = '<div class="card-group text-center table-pricing">\r\n';
    code2 += '  <div class="card">\r\n';
    code2 += '      <div class="card-header bg-primary text-white">\r\n';
    code2 += '          <h3>Starter</h3>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="card-body p-5">\r\n';
    code2 += '          <p class="card-text display-4 text-primary mb-0">$11</p>\r\n';
    code2 += '          <p class="card-text"><small class="text-muted">per month</small></p>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="table-responsive">\r\n';
    code2 += '          <table class="table table-striped mb-0">\r\n';
    code2 += '              <tbody>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>1 Account</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>15GB storage</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>1 Device</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '              </tbody>\r\n';
    code2 += '          </table>\r\n';
    code2 += '      </div>\r\n';
    code2 += '          <div class="card-footer bg-info p-3">\r\n';
    code2 += '              <button class="btn btn-primary">Choose</button>\r\n';
    code2 += '          </div>\r\n';
    code2 += '      </div>\r\n';
    code2 += '  <div class="card">\r\n';
    code2 += '      <div class="card-header bg-secondary text-white">\r\n';
    code2 += '          <h3>Pro</h3>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="card-body p-5">\r\n';
    code2 += '          <p class="card-text display-4 text-secondary mb-0">$24</p>\r\n';
    code2 += '          <p class="card-text"><small class="text-muted">per month</small></p>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="table-responsive">\r\n';
    code2 += '          <table class="table table-striped mb-0">\r\n';
    code2 += '              <tbody>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>10 Account</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>150GB storage</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>10 Device</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '              </tbody>\r\n';
    code2 += '          </table>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="card-footer bg-info p-3">\r\n';
    code2 += '          <button class="btn btn-secondary">Choose</button>\r\n';
    code2 += '      </div>\r\n';
    code2 += '  </div>\r\n';
    code2 += '  <div class="card">\r\n';
    code2 += '      <div class="card-header bg-success text-white">\r\n';
    code2 += '          <h3>Enterprise</h3>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="card-body p-5">\r\n';
    code2 += '          <p class="card-tex display-4 text-success mb-0">$50</p>\r\n';
    code2 += '          <p class="card-text"><small class="text-muted">per month</small></p>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="table-responsive">\r\n';
    code2 += '          <table class="table table-striped mb-0">\r\n';
    code2 += '              <tbody>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>Unlimited Account</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>500GB storage</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '                  <tr>\r\n';
    code2 += '                      <td>100 Device</td>\r\n';
    code2 += '                  </tr>\r\n';
    code2 += '              </tbody>\r\n';
    code2 += '          </table>\r\n';
    code2 += '      </div>\r\n';
    code2 += '      <div class="card-footer bg-info p-3">\r\n';
    code2 += '          <button class="btn btn-success">Choose</button>\r\n';
    code2 += '      </div>\r\n';
    code2 += '  </div>\r\n';
    code2 += '</div>';
    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});