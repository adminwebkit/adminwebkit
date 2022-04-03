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

    var code = '<div class="card box-shadow2 mb-4">\r\n';
    code += '   <div class="card-body">\r\n';
    code += '       <canvas id="chart1"></canvas>\r\n';
    code += '   </div>\r\n';
    code += '</div>\r\n';
    code += '<script>\r\n';
        
    code += 'var labels = [\r\n';
    code += '   \'January\',\r\n';
    code += '   \'February\',\r\n';
    code += '   \'March\',\r\n';
    code += '   \'April\',\r\n';
    code += '   \'May\',\r\n';
    code += '   \'June\',\r\n';
    code += '];\r\n';

    code += 'var data = {\r\n';
    code += '   labels: labels,\r\n';
    code += '   datasets: [{\r\n';
    code += '       label: \'My First dataset\',\r\n';
    code += '       backgroundColor: \'#1155a8\',\r\n';
    code += '       borderColor: \'#417cc4\',\r\n';
    code += '       data: [0, 10, 5, 2, 20, 30, 45],\r\n';
    code += '   }]\r\n';
    code += '};\r\n';

    code += 'var config = {\r\n';
    code +=     'type: \'line\',\r\n';
    code += '   data: data,\r\n';
    code += '   options: {}\r\n';
    code += '};\r\n';


    code += 'var chart1 = new Chart(\r\n';
    code += '   document.getElementById(\'chart1\'),\r\n';
    code += '   config\r\n';
    code += ');\r\n';

    code += '</script>';
    editor.getDoc().setValue(code);

});

myModal.addEventListener('hidden.bs.modal', function (event) {
    editor.getDoc().setValue('');
});

var myModal2 = document.getElementById('section2');
myModal2.addEventListener('shown.bs.modal', function (event) {

    var code2 = '<div class="card box-shadow2 mb-4">\r\n';
    code2 += '  <div class="card-body">\r\n';
    code2 += '      <canvas id="chart2"></canvas>\r\n';
    code2 += '  </div>\r\n';
    code2 += '</div>\r\n';
        
    code2 += '<script>\r\n';
    code2 += 'var labels = [\r\n';
    code2 += '   \'January\',\r\n';
    code2 += '   \'February\',\r\n';
    code2 += '   \'March\',\r\n';
    code2 += '   \'April\',\r\n';
    code2 += '   \'May\',\r\n';
    code2 += '   \'June\',\r\n';
    code2 += '];\r\n';

    code2 += 'var data2 = {\r\n';
    code2 += '  labels: labels,\r\n';
    code2 += '  datasets: [{\r\n';
    code2 += '  label: \'My First Dataset\',\r\n';
    code2 += '  data: [65, 59, 80, 81, 56, 55, 40],\r\n';
    code2 += '  backgroundColor: [\r\n';
    code2 += '  \'rgba(255, 99, 132, 0.2)\',\r\n';
    code2 += '  \'rgba(255, 159, 64, 0.2)\',\r\n';
    code2 += '  \'rgba(255, 205, 86, 0.2)\',\r\n';
    code2 += '  \'rgba(75, 192, 192, 0.2)\',\r\n';
    code2 += '  \'rgba(54, 162, 235, 0.2)\',\r\n';
    code2 += '  \'rgba(153, 102, 255, 0.2)\',\r\n';
    code2 += '  \'rgba(201, 203, 207, 0.2)\'\r\n';
    code2 += '  ],\r\n';
    code2 += '  borderColor: [\r\n';
    code2 += '  \'rgb(255, 99, 132)\',\r\n';
    code2 += '  \'rgb(255, 159, 64)\',\r\n';
    code2 += '  \'rgb(255, 205, 86)\',\r\n';
    code2 += '  \'rgb(75, 192, 192)\',\r\n';
    code2 += '  \'rgb(54, 162, 235)\',\r\n';
    code2 += '  \'rgb(153, 102, 255)\',\r\n';
    code2 += '  \'rgb(201, 203, 207)\'\r\n';
    code2 += '  \],\r\n';
    code2 += '  \ borderWidth: 1\r\n';
    code2 += '  \}]\r\n';
    code2 += '  \};\r\n';

    code2 += 'var config2 = {\r\n';
        code2 += '  type: \'bar\',\r\n';
        code2 += '  data: data2,\r\n';
        code2 += ' options: {\r\n';
        code2 += '  scales: {\r\n';
        code2 += '  y: {\r\n';
        code2 += '  beginAtZero: true\r\n';
        code2 += '  }\r\n';
        code2 += '  }\r\n';
        code2 += '  },\r\n';
        code2 += '};\r\n';


    code2 += 'var chart2 = new Chart(\r\n';
    code2 += '  document.getElementById(\'chart2\'),\r\n';
    code2 += '  config2\r\n';
    code2 += ');\r\n';

    code2 += '</script>';

    editor2.getDoc().setValue(code2);

});

myModal2.addEventListener('hidden.bs.modal', function (event) {
    editor2.getDoc().setValue('');
});