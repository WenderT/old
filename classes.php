<?php

require 'functions/phpmailer/PHPMailerAutoload.php';

class Site
{
    private $smtp;
    private $usuario;
    private $enviarPara;
    private $nome;
    private $senha;
    private $porta;
    private $mail;

    public function __construct()
    {
        $this->mail = new PHPMailer;
        
        $this->smtp = 'smtp.gmail.com';
        $this->usuario = 'thalissonmr.lima@gmail.com';
        $this->enviarPara = 'thalissonmr.lima@gmail.com'; //as mensagem recebida do site
        $this->senha = 'g9a4b7u5';
        $this->porta = '587';
        $this->nome = 'Trans Limar';
    }

    public function enviarEmail($data)
    {
        $this->mail->isSMTP();
        $this->mail->Host = $this->smtp;
        $this->mail->SMTPAuth = true;
        $this->mail->Username = $this->usuario;
        $this->mail->Password = $this->senha;
        $this->mail->SMTPSecure = 'tls';
        $this->mail->Port = $this->porta;

        $this->mail->setFrom($this->usuario, $this->nome);
        
        $this->mail->addAddress($this->enviarPara, $this->nome);

        $this->mail->addReplyTo($data['email'], $data['nome']);

        $this->mail->isHTML(true);


        $this->mail->Subject = $data['assunto'];


        $mensagem = "<b>Nome:</b> {$data['nome']} <br> <b> Empresa:</b> {$data['empresa']} <br>  <b>Telefone:</b> {$data['telefone']}<br> <br> {$data['mensagem']}";

        $this->mail->Body = $mensagem;

        if (!$this->mail->send()) {
            return $this->mail->ErrorInfo;
        } else {
            return true;
        }
    }
}
