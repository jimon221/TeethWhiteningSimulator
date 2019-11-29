var tooth_list = [
    //ホワイトニング前
    [
        //上
        [
            {id: 0, color_id: 0,},
            {id: 1, color_id: 0,},
            {id: 2, color_id: 0,},
            {id: 3, color_id: 0,},
            {id: 4, color_id: 0,},
            {id: 5, color_id: 0,},
            {id: 6, color_id: 0,},
            {id: 7, color_id: 0,},
        ],
        //下
        [
            {id: 0, color_id: 0,},
            {id: 1, color_id: 0,},
            {id: 2, color_id: 0,},
            {id: 3, color_id: 0,},
            {id: 4, color_id: 0,},
            {id: 5, color_id: 0,},
            {id: 6, color_id: 0,},
            {id: 7, color_id: 0,},
        ]
    ],
    //ホワイトニング後
    [
        //上
        [
            {id: 0, color_id: 0,},
            {id: 1, color_id: 0,},
            {id: 2, color_id: 0,},
            {id: 3, color_id: 0,},
            {id: 4, color_id: 0,},
            {id: 5, color_id: 0,},
            {id: 6, color_id: 0,},
            {id: 7, color_id: 0,},
        ],
        //下
        [
            {id: 0, color_id: 0,},
            {id: 1, color_id: 0,},
            {id: 2, color_id: 0,},
            {id: 3, color_id: 0,},
            {id: 4, color_id: 0,},
            {id: 5, color_id: 0,},
            {id: 6, color_id: 0,},
            {id: 7, color_id: 0,},
        ]
    ]
]

var color_list = [
    {id: 0, name: "W1", code: "#F7F3F4"},
    {id: 1, name: "W2", code: "#F6EFE5"},
    {id: 2, name: "W3", code: "#F8F3F0"},
    {id: 3, name: "B1", code: "#F6EDDC"},
    {id: 4, name: "A1", code: "#F3E2C6"},
    {id: 5, name: "B2", code: "#F7E7C3"},
    {id: 6, name: "D2", code: "#F8ECC6"},
    {id: 7, name: "A2", code: "#F7E6CA"},
    {id: 8, name: "C1", code: "#EDDDBC"},
    {id: 9, name: "C2", code: "#ECD8B5"},
    {id: 10, name: "D4", code: "#F2DFB5"},
    {id: 11, name: "A3", code: "#F3DDAC"},
    {id: 12, name: "D3", code: "#ECD8B5"},
    {id: 13, name: "B3", code: "#F3DDAC"},
    {id: 14, name: "A3.5", code: "#E8CF97"},
    {id: 15, name: "B4", code: "#F1D898"},
    {id: 16, name: "C3", code: "#E6D4A2"},
    {id: 17, name: "A4", code: "#E6C576"},
    {id: 18, name: "C4", code: "#E7C887"},
]

var disp_color_list = [
    [0, 1, 2],
    [4, 7, 11, 14, 17],
    [3, 5, 13, 15],
    [8, 9, 16, 18],
    [6, 12, 10]
]
var soeji_list = [1, 2, 3, 4, 4, 3, 2, 1];

var current_color_id = 0;

window.onload = function () {
    make_palette();
    make_mihon();
    make_disp();
    get_color(0);
}


function make_disp() {
    try {
        make_before_disp();
        make_after_disp();
    } catch (e) {
        console.log(tooth_list);
        console.log(e);
        reset_disp(0);
        reset_disp(1);
    }
}

function make_before_disp() {
    const before_disp = document.getElementById('before_disp');
    var ret = "";
    ret = ret + "<table id=\"nav\">";
    ret = ret + "<tr>";
    soeji_list.forEach(function (soeji) {
        ret = ret + "<td class='soeji'>" + soeji + "</td>";
    });
    ret = ret + "</tr>";
    ret = ret + "<tr>";
    tooth_list[0][0].forEach(function (color) {
        ret = ret + "<td class='tooth' onclick=\"set_color(0,0," + color.id + ")\" style=\"background: " + color_list[color.color_id].code + "\">" + color_list[color.color_id].name + "</td>";
    });
    ret = ret + "</tr>";
    ret = ret + "<tr>";
    tooth_list[0][1].forEach(function (color) {
        ret = ret + "<td class='tooth' onclick=\"set_color(0,1," + color.id + ")\" style=\"background: " + color_list[color.color_id].code + "\">" + color_list[color.color_id].name + "</td>";
    });
    ret = ret + "</tr>";
    ret = ret + "<tr>";
    soeji_list.forEach(function (soeji) {
        ret = ret + "<td class='soeji'>" + soeji + "</td>";
    });
    ret = ret + "</tr>";
    ret = ret + "</table>";
    before_disp.innerHTML = ret;
}

function make_after_disp() {
    const after_disp = document.getElementById('after_disp');
    var ret = "";
    ret = ret + "<table id=\"nav\">";
    ret = ret + "<tr>";
    soeji_list.forEach(function (soeji) {
        ret = ret + "<td class='soeji'>" + soeji + "</td>";
    });
    ret = ret + "</tr>";
    ret = ret + "<tr>";
    tooth_list[1][0].forEach(function (color) {
        ret = ret + "<td class='tooth' onclick=\"set_color(1,0," + color.id + ")\" style=\"background: " + color_list[color.color_id].code + "\">" + color_list[color.color_id].name + "</td>";
    });
    ret = ret + "</tr>";
    ret = ret + "<tr>";
    tooth_list[1][1].forEach(function (color) {
        ret = ret + "<td class='tooth' onclick=\"set_color(1,1," + color.id + ")\" style=\"background: " + color_list[color.color_id].code + "\">" + color_list[color.color_id].name + "</td>";
    });
    ret = ret + "<tr>";
    soeji_list.forEach(function (soeji) {
        ret = ret + "<td class='soeji'>" + soeji + "</td>";
    });
    ret = ret + "</tr>";
    ret = ret + "</table>";
    after_disp.innerHTML = ret;
}

function sync_disp() {
    tooth_list[0][0].forEach(function (color) {
        tooth_list[1][0][color.id].color_id = color.color_id;
    });
    tooth_list[0][1].forEach(function (color) {
        tooth_list[1][1][color.id].color_id = color.color_id;
    });
    make_after_disp();
}


function make_palette() {
    const palette = document.getElementById('palette');
    var ret = "";
    ret = ret + "<table id=\"nav\">";
    disp_color_list.forEach(function (temp_list) {
        ret = ret + "<tr>";
        temp_list.forEach(function (color_id) {
            color = color_list[color_id];
            ret = ret + "<td class='tooth' id='palette_" + color.id + "' onclick='get_color(" + color.id + ")' style='background:" + color.code + "'>" + color.name + "</td>";
        });
        ret = ret + "</tr>";
    });
    ret = ret + "</table>";
    palette.innerHTML = ret;
}

function make_mihon() {
    const palette = document.getElementById('mihon');
    var ret = "";
    ret = ret + "<table id=\"nav\">";
    color_list.forEach(function (color) {
        ret = ret + "<td class='tooth' id='palette_" + color.id + "' onclick='get_color(" + color.id + ")' style='background:" + color.code + "'>" + color.name + "</td>";
    });
    ret = ret + "</table>";
    palette.innerHTML = ret;
}

function up_disp() {
    tooth_list[1][0].forEach(function (color) {
        tooth_list[1][0][color.id].color_id += 1;
        if (tooth_list[1][0][color.id].color_id == color_list.length) {
            tooth_list[1][0][color.id].color_id -= 1;
        }
    });
    tooth_list[1][1].forEach(function (color) {
        tooth_list[1][1][color.id].color_id += 1;
        if (tooth_list[1][1][color.id].color_id == color_list.length) {
            tooth_list[1][1][color.id].color_id -= 1;
        }
    });
    make_after_disp();
}

function down_disp() {
    tooth_list[1][0].forEach(function (color) {
        tooth_list[1][0][color.id].color_id -= 1;
        if (tooth_list[1][0][color.id].color_id < 0) {
            tooth_list[1][0][color.id].color_id += 1;
        }
    });
    tooth_list[1][1].forEach(function (color) {
        tooth_list[1][1][color.id].color_id -= 1;
        if (tooth_list[1][1][color.id].color_id < 0) {
            tooth_list[1][1][color.id].color_id += 1;
        }
    });
    make_after_disp();
}

function set_color(zengo, jouge, id) {
    select_color = tooth_list[zengo][jouge][id];
    select_color.color_id = current_color_id;
    make_disp();
}

function get_color(id) {
    current_color_id = id;
    reset_paret();
    const palette = document.getElementById('palette_' + id);
    palette.style.outline = "1px solid #d76787";
    palette.style.outlineOffset = "-1px";
}

function reset_disp(zengo) {
    tooth_list[zengo][0].forEach(function (select_color) {
        select_color.color_id = 0;
    });
    tooth_list[zengo][1].forEach(function (select_color) {
        select_color.color_id = 0;
    });
    if (zengo == 0) {
        make_before_disp();
    } else {
        make_after_disp();
    }
}

function reset_paret() {
    color_list.forEach(function (color) {
        const palette = document.getElementById('palette_' + color.id);
        palette.style.outline = "";
        palette.style.outlineOffset = "";
    });
}

function save_disp() {
    var ret = "";
    tooth_list.forEach(function (temp_list) {
        temp_list.forEach(function (temp_list2) {
            temp_list2.forEach(function (tooth) {
                ret = "" + ret + tooth.color_id.toString(color_list.length);
            });
        });
    });

    document.getElementById("pass").value = ret;
}

function load_disp() {
    var password = document.getElementById("pass").value;
    var count = 0;

    tooth_list.forEach(function (temp_list) {
        temp_list.forEach(function (temp_list2) {
            temp_list2.forEach(function (tooth) {
                tooth.color_id = parseInt(password.charAt(count), color_list.length);
                count++;
            });
        });
    });
    make_disp();
}