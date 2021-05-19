var tel = 1;
var cont = 0;

//adicionar telefones
function addFone() {
    $("#fone").append('<label class="tel' + (++tel) + 'l">Telefone: <small>(obrigatório)</small></label>' +
        '<input class="tel' + (tel) + 'i" type="text" name="ifoneV" id="ifoneV"  size="30" required/>' +
        '<small class="tel' + (tel) + 's">"88 98945 6978"</small>');
    $(".tel" + tel + "i").mask("(99) 99999-9999");
}

function addNewContact() {
    //Permitir a manipulação do Submit
    event.preventDefault();

    //recebendo valores dos inputs
    var cpNome = $("input[name=inome]").val()

    if (tel >= 2) { //se tiver mais de um tel
        var cpFoneV = new Array(tel);
        cpFoneV[0] = $("input[name=ifone]").val()

        for (let i = 1; i < tel; i++) {
            cpFoneV[i] = $("input[class=tel" + (i + 1) + "i]").val()
        }

    } else { //se tiver apenas 1
        var cpFone = $("input[name=ifone]").val()
    }

    var cpEmail = $("input[name=iemail]").val()
    var cpLocal = $("input[name=ilocal]").val()

    //verificando se foi inserido um email ou telefone
    if (cpFone == "" && cpEmail == "") {
        alert('Digite pelo menos um número de telefone ou um endereço de email.');
        return
    }

    //imprime os dados

    if (tel >= 2) { //mais de um tel
        $("ul").append("<li id = 'itemContact" + (++cont) + "'>" + cpNome + " - ");
        $("#itemContact" + cont).append("" + cpFoneV[0] + "-");
        for (var i = 1; i < tel; i++) {

            $("#itemContact" + cont).append(cpFoneV[i] + "-");
        }
        $("#itemContact" + cont).append(cpEmail + " - " + cpLocal + "</li>");
    } else { //apenas 1 tel
        $("#listContact").append("<li id = 'itemContact" + (++cont) + "'>" + cpNome + " - " + cpFone + " - " + cpEmail + " - " + cpLocal + "</li>");
    }

    //adiciona botão remover
    $("#itemContact" + cont + "").append("<button class = 'btnRemover' id = " + cont + " onclick='removeContact()' style='float:right;'>Remover</button></br></br>");



    //limpeza do form
    $('#form').each(function() {
        this.reset();
    });

    //remover telefones
    if (tel > 1) {
        for (var i = 1; i < tel; i++) {
            $(".tel" + (i + 1) + "i").remove();
            $(".tel" + (i + 1) + "l").remove();
            $(".tel" + (i + 1) + "s").remove();
        }
        tel = 1;
    }
}

//remover contato
function removeContact() {
    $("#listContact").on("click", ".btnRemover", function() {
        var apagar = $(this).attr("id");
        $('#itemContact' + apagar + '').remove();
    });
}