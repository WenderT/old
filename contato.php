<?php


require 'classes.php';

$site = new Site();

$acao = ($_GET['acao'] === 'enviar') ? true : false ;

if (!empty($acao)) {
    $nome = (!empty($_POST['f-nome'])) ? $_POST['f-nome'] : false;
    $empresa = (!empty($_POST['f-empresa'])) ? $_POST['f-empresa'] : false;
    $email = (!empty($_POST['f-email'])) ? $_POST['f-email'] : false;
    $telefone = (!empty($_POST['f-telefone'])) ? $_POST['f-telefone'] : false;
    $assunto = (!empty($_POST['f-assunto'])) ? $_POST['f-assunto'] : false;
    $mensagem = (!empty($_POST['f-mensagem'])) ? $_POST['f-mensagem'] : false;


    if (!empty($nome) && !empty($empresa) && !empty($email) && !empty($telefone) && !empty($assunto) && !empty($mensagem)) {
        $enviar = $site->enviarEmail([
            'nome' => $nome,
            'empresa' => $empresa,
            'email' => $email,
            'telefone' => $telefone,
            'assunto' => $assunto,
            'mensagem' => $mensagem,
        ]);

        if (!empty($enviar)) {
            header('location: /');
        } else {
            //echo 'Falha ao tentar enviar contato, tente novamente mais tarde...';
            header('location: /');
        }
    } else {
        //echo 'Você deve preencher todos os campos.';
        header('location: /');
    }
}
