var editor = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    lineWrapping: true,
    mode: "htmlmixed",
    autoRefresh: true
});

var myModal = document.getElementById('section1');
myModal.addEventListener('shown.bs.modal', function (event) {

    var code = '<div class="alert alert-primary" role="alert">\r\n';
    code += '   A simple primary alert—check it out!\r\n';
    code += '</div>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});