/*!
 * AdminWebKit 1.0.0 - https://www.adminwebkit.com
 * License - https://opensource.org/licenses/MIT
 */

$(document).ready(function() {

    var options = {
        data: ["blue", "green", "pink", "red", "yellow", "black", "white"],
        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            },
            sort: {
                enabled: true
            }
        }
    };

    $("#suggest").easyAutocomplete(options);

    var options2 = {
        data: [ 
            {name: "Mike", type: "CEO"},
            {name: "John", type: "Developer"},
            {name: "Robert", type: "Marketer"},
            {name: "Michael", type: "Designer"}
        ],

        getValue: "name",

        template: {
            type: "description",
            fields: {
                description: "type"
            }
        },

        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            },
            sort: {
                enabled: true
            }
        }

    };

    $("#suggest_users").easyAutocomplete(options2);

    var selectInstance = new Select({
        el: document.querySelector('select.user-select'),
        className: 'select-theme-default'
    });

    $('#colorPicker').colorpicker({
        format: 'hex'
    });

    $('#summernote').summernote({
        placeholder: 'Type here...',
        tabsize: 2,
        height: 300,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['insert', ['link', 'table', 'hr']],
            ['misc', ['codeview', 'fullscreen']]
        ]
      });

});