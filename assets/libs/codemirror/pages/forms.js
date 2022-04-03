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
    code += '   <div class="card-body p-4">\r\n';
    code += '       <form>\r\n';
    code += '           <div class="mb-3">\r\n';
    code += '               <label for="exampleInputEmail1" class="form-label">Email address</label>\r\n';
    code += '               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">\r\n';
    code += '               <div id="emailHelp" class="form-text">We\'ll never share your email with anyone else.</div>\r\n';
    code += '           </div>\r\n';
    code += '           <div class="mb-3">\r\n';
    code += '               <label for="exampleInputPassword1" class="form-label">Password</label>\r\n';
    code += '               <input type="password" class="form-control" id="exampleInputPassword1">\r\n';
    code += '           </div>\r\n';
    code += '           <div class="mb-4 mt-4">\r\n';
    code += '               <select class="form-select" aria-label="Select">\r\n';
    code += '                   <option selected>Open this select menu</option>\r\n';
    code += '                   <option value="1">One</option>\r\n';
    code += '                   <option value="2">Two</option>\r\n';
    code += '                   <option value="3">Three</option>\r\n';
    code += '               </select>\r\n';
    code += '           </div>\r\n';
    code += '           <div class="mb-3 form-check">\r\n';
    code += '               <input type="checkbox" class="form-check-input" id="exampleCheck1">\r\n';
    code += '               <label class="form-check-label" for="exampleCheck1">Remember me</label>\r\n';
    code += '           </div>\r\n';
    code += '           <div class="form-check form-switch mt-4 mb-4">\r\n';
    code += '               <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">\r\n';
    code += '               <label class="form-check-label" for="flexSwitchCheckDefault">Left or Right</label>\r\n';
    code += '           </div>\r\n';
    code += '           <div class="mb-4 mt-4">\r\n';
    code += '               <button type="submit" class="btn btn-primary">Submit</button>\r\n';
    code += '           </div>\r\n';
    code += '           <div class="mb-4 mt-4 text-center">\r\n';
    code += '               <div class="spinner-border text-primary" role="status"></div>\r\n';
    code += '           </div>\r\n';
    code += '       </form>\r\n';
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
    code2 += '  <div class="card-body p-4">\r\n';
    code2 += '      <form>\r\n';
    code2 += '          <div class="mb-3">\r\n';
    code2 += '              <label for="exampleInputEmail1" class="form-label">Email address</label>\r\n';
    code2 += '              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">\r\n';
    code2 += '              <div id="emailHelp" class="form-text">We\'ll never share your email with anyone else.</div>\r\n';
    code2 += '          </div>\r\n';
    code2 += '          <div class="mb-3">\r\n';
    code2 += '              <label for="exampleInputPassword1" class="form-label">Password</label>\r\n';
    code2 += '              <input type="password" class="form-control" id="exampleInputPassword1">\r\n';
    code2 += '          </div>\r\n';
    code2 += '          <div class="mb-3">\r\n';
    code2 += '              <label for="formFile" class="form-label">Choose avatar</label>\r\n';
    code2 += '              <input class="form-control" type="file" id="formFile">\r\n';
    code2 += '          </div>\r\n';
    code2 += '          <div class="row mb-4 mt-4">\r\n';
    code2 += '              <div class="col">\r\n';
    code2 += '                  <label  class="form-label">First name</label>\r\n';
    code2 += '                  <input type="text" class="form-control" placeholder="First name" aria-label="First name">\r\n';
    code2 += '              </div>\r\n';
    code2 += '              <div class="col">\r\n';
    code2 += '                  <label  class="form-label">Last name</label>\r\n';
    code2 += '                  <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">\r\n';
    code2 += '              </div>\r\n';
    code2 += '          </div>\r\n';
    code2 += '          <button type="submit" class="btn btn-primary">Submit</button>\r\n';
    code2 += '      </form>\r\n';
    code2 += '  </div>\r\n';
    code2 += '</div>';
    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});

var myModal3 = document.getElementById('section3');
myModal3.addEventListener('shown.bs.modal', function (event) {

    var code3 = '<div class="card box-shadow2 mb-4">\r\n';
    code3 += '  <div class="card-body p-4">\r\n';
    code3 += '      <form class="row row-cols-lg-auto g-3 align-items-center">\r\n';
    code3 += '          <div class="col-12">\r\n';
    code3 += '              <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>\r\n';
    code3 += '              <div class="input-group">\r\n';
    code3 += '                  <div class="input-group-text">@</div>\r\n';
    code3 += '                  <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">\r\n';
    code3 += '              </div>\r\n';
    code3 += '          </div>\r\n';     
    code3 += '          <div class="col-12">\r\n';
    code3 += '              <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>\r\n';
    code3 += '              <select class="form-select" id="inlineFormSelectPref">\r\n';
    code3 += '              <option selected>Choose...</option>\r\n';
    code3 += '              <option value="1">One</option>\r\n';
    code3 += '              <option value="2">Two</option>\r\n';
    code3 += '              <option value="3">Three</option>\r\n';
    code3 += '              </select>\r\n';
    code3 += '          </div>\r\n';      
    code3 += '          <div class="col-12">\r\n';
    code3 += '              <div class="form-check">\r\n';
    code3 += '                  <input class="form-check-input" type="checkbox" id="inlineFormCheck">\r\n';
    code3 += '                  <label class="form-check-label" for="inlineFormCheck">\r\n';
    code3 += '                  Remember me\r\n';
    code3 += '                  </label>\r\n';
    code3 += '              </div>\r\n';
    code3 += '          </div>\r\n';        
    code3 += '          <div class="col-12">\r\n';
    code3 += '              <button type="submit" class="btn btn-primary">Submit</button>\r\n';
    code3 += '          </div>\r\n';
    code3 += '          <div class="col-12">\r\n';
    code3 += '              <div class="spinner-border text-primary" role="status"></div>\r\n';
    code3 += '          </div>\r\n';
    code3 += '      </form>\r\n';
    code3 += '  </div>\r\n';
    code3 += '</div>';
    editor3.getDoc().setValue(code3);

});

myModal3.addEventListener('hidden.bs.modal', function (event) {
    editor3.getDoc().setValue('');
});

var myModal4 = document.getElementById('section4');
myModal4.addEventListener('shown.bs.modal', function (event) {

    var code4 = '<div class="card box-shadow2 mb-4">\r\n';
    code4 += '  <div class="card-body p-4">\r\n';
    code4 += '      <label for="post" class="form-label">Write post</label>\r\n';
    code4 += '      <textarea class="form-control" id="post" rows="5" placeholder="Type here..."></textarea>\r\n';
    code4 += '      <div class="d-grid mt-3">\r\n';
    code4 += '          <button class="btn btn-primary" type="button">SUBMIT</button>\r\n';
    code4 += '      </div>\r\n';
    code4 += '  </div>\r\n';
    code4 += '</div>';
    editor4.getDoc().setValue(code4);

});

myModal4.addEventListener('hidden.bs.modal', function (event) {
    editor4.getDoc().setValue('');
});

var myModal5 = document.getElementById('section5');
myModal5.addEventListener('shown.bs.modal', function (event) {

    var code5 = '<div class="card box-shadow2 mb-4">\r\n';
    code5 += '  <div class="card-body p-4">\r\n';
    code5 += '      <form class="row g-3">\r\n';
    code5 += '          <div class="col-md-4">\r\n';
    code5 += '              <label for="validationServer01" class="form-label">First name</label>\r\n';
    code5 += '              <input type="text" class="form-control is-valid" id="validationServer01" value="Mike" required>\r\n';
    code5 += '              <div class="valid-feedback">\r\n';
    code5 += '                  Looks good!\r\n';
    code5 += '              </div>\r\n';
    code5 += '          </div>\r\n';
    code5 += '          <div class="col-md-4">\r\n';
    code5 += '              <label for="validationServer02" class="form-label">Last name</label>\r\n';
    code5 += '              <input type="text" class="form-control is-valid" id="validationServer02" value="Smith" required>\r\n';
    code5 += '              <div class="valid-feedback">\r\n';
    code5 += '                  Looks good!\r\n';
    code5 += '              </div>\r\n';
    code5 += '          </div>\r\n';
    code5 += '          <div class="col-md-4">\r\n';
    code5 += '              <label for="validationServerUsername" class="form-label">Username</label>\r\n';
    code5 += '              <div class="input-group has-validation">\r\n';
    code5 += '                  <span class="input-group-text" id="inputGroupPrepend3">@</span>\r\n';
    code5 += '                  <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>\r\n';
    code5 += '                  <div id="validationServerUsernameFeedback" class="invalid-feedback">\r\n';
    code5 += '                      Please choose a username.\r\n';
    code5 += '                  </div>\r\n';
    code5 += '              </div>\r\n';
    code5 += '          </div>\r\n';
    code5 += '          <div class="col-md-6">\r\n';
    code5 += '              <label for="validationServer03" class="form-label">City</label>\r\n';
    code5 += '              <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>\r\n';
    code5 += '              <div id="validationServer03Feedback" class="invalid-feedback">\r\n';
    code5 += '                  Please provide a valid city.\r\n';
    code5 += '              </div>\r\n';
    code5 += '          </div>\r\n';
    code5 += '          <div class="col-md-3">\r\n';
    code5 += '              <label for="validationServer04" class="form-label">State</label>\r\n';
    code5 += '              <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>\r\n';
    code5 += '                  <option selected disabled value="">Choose...</option>\r\n';
    code5 += '                  <option>One</option>\r\n';
    code5 += '                  <option>Two</option>\r\n';
    code5 += '              </select>\r\n';
    code5 += '              <div id="validationServer04Feedback" class="invalid-feedback">\r\n';
    code5 += '                  Please select a valid state.\r\n';
    code5 += '              </div>\r\n';
    code5 += '          </div>\r\n';
    code5 += '          <div class="col-md-3">\r\n';
    code5 += '              <label for="validationServer05" class="form-label">Zip</label>\r\n';
    code5 += '              <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>\r\n';
    code5 += '              <div id="validationServer05Feedback" class="invalid-feedback">\r\n';
    code5 += '                  Please provide a valid zip.\r\n';
    code5 += '              </div>\r\n';
    code5 += '          </div>\r\n';
    code5 += '          <div class="col-12">\r\n';
    code5 += '              <div class="form-check">\r\n';
    code5 += '                  <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>\r\n';
    code5 += '                  <label class="form-check-label" for="invalidCheck3">\r\n';
    code5 += '                      Agree to terms and conditions\r\n';
    code5 += '                  </label>\r\n';
    code5 += '                  <div id="invalidCheck3Feedback" class="invalid-feedback">\r\n';
    code5 += '                      You must agree before submitting.\r\n';
    code5 += '                  </div>\r\n';
    code5 += '              </div>\r\n';
    code5 += '          </div>\r\n';
    code5 += '          <div class="col-12">\r\n';
    code5 += '              <button class="btn btn-primary" type="submit">Submit form</button>\r\n';
    code5 += '          </div>\r\n';
    code5 += '      </form>\r\n';
    code5 += '  </div>\r\n';
    code5 += '</div>';
    editor5.getDoc().setValue(code5);

});

myModal5.addEventListener('hidden.bs.modal', function (event) {
    editor5.getDoc().setValue('');
});

var myModal6 = document.getElementById('section6');
myModal6.addEventListener('shown.bs.modal', function (event) {

    var code6 = '<div class="card box-shadow2 mb-4">\r\n';
    code6 += '  <div class="card-body p-4">\r\n';
    code6 += '      <div class="form-check form-check-inline">\r\n';
    code6 += '          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">\r\n';
    code6 += '          <label class="form-check-label" for="inlineRadio1">1</label>\r\n';
    code6 += '      </div>\r\n';
    code6 += '      <div class="form-check form-check-inline">\r\n';
    code6 += '          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\r\n';
    code6 += '          <label class="form-check-label" for="inlineRadio2">2</label>\r\n';
    code6 += '      </div>\r\n';
    code6 += '      <div class="form-check form-check-inline">\r\n';
    code6 += '          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">\r\n';
    code6 += '          <label class="form-check-label" for="inlineRadio3">3</label>\r\n';
    code6 += '      </div>\r\n';
    code6 += '  </div>\r\n';
    code6 += '</div>';
    editor6.getDoc().setValue(code6);

});

myModal6.addEventListener('hidden.bs.modal', function (event) {
    editor6.getDoc().setValue('');
});

var myModal7 = document.getElementById('section7');
myModal7.addEventListener('shown.bs.modal', function (event) {

    var code7 = '<div class="card box-shadow2 mb-4">\r\n';
    code7 += '  <div class="card-body p-4">\r\n';
    code7 += '      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">\r\n';
    code7 += '          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">\r\n';
    code7 += '          <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>\r\n';
    code7 += '          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">\r\n';
    code7 += '          <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>\r\n';
    code7 += '          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">\r\n';
    code7 += '          <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>\r\n';
    code7 += '      </div>\r\n';
    code7 += '  </div>\r\n';
    code7 += '</div>';
    editor7.getDoc().setValue(code7);

});

myModal7.addEventListener('hidden.bs.modal', function (event) {
    editor7.getDoc().setValue('');
});