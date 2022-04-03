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

    var code = '<div class="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-4 border-bottom">\r\n';
    code += '   <div class="container-fluid p-2">\r\n';
    code += '       <div class="row">\r\n';
    code += '           <div class="col align-self-star">\r\n';
    code += '               <div class="input-group input-group-lg">\r\n';
    code += '                   <span class="input-group-text border-end-0 bg-white" id="input-search"><i class="fas fa-search"></i></span>\r\n';
    code += '                   <input type="text" class="form-control border-start-0" placeholder="Search..." aria-label="Search..." aria-describedby="input-search">\r\n';
    code += '               </div>\r\n';
    code += '           </div>\r\n';
    code += '           <div class="col d-flex justify-content-end">\r\n';
    code += '               <a href="#" class="btn btn-primary btn-lg"><i class="fas fa-plus"></i> NEW</a>\r\n';
    code += '           </div>\r\n';
    code += '       </div>\r\n';
    code += '   </div>\r\n';
    code += '</div>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});

var myModal2 = document.getElementById('section2');
myModal2.addEventListener('shown.bs.modal', function (event) {

    var code2 = '<div class="row mb-2">\r\n';
    code2 += '   <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\r\n';
    code2 += '       <h2>Section title</h2>\r\n';
    code2 += '       <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="#" class="text-primary">Lorem Ipsum</a> has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\r\n';
    code2 += '   </div>\r\n';
    code2 += '</div>';
    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});