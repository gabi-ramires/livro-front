<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *"); // Permite todas as origens
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Métodos permitidos
header("Content-Type: application/json"); // Define o tipo de conteúdo como JSON

// Conexão com o banco de dados
$servername = "sql210.infinityfree.com";
$username = "if0_37272125";
$password = "AMOzNxOhA7c";
$dbname = "if0_37272125_livro";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

date_default_timezone_set('America/Sao_Paulo');

// Define a codificação correta para o banco de dados
$conn->set_charset("utf8");

// Verifica se o método da requisição é POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os dados enviados pelo cliente em JSON
    $data = json_decode(file_get_contents('php://input'), true);

    // Verifica se os campos obrigatórios foram enviados
    if (isset($data['mensagem'], $data['capitulo'])) {
        // Define o nome como "Anônimo" se não for enviado
        $nome = !empty($data['nome']) ? $data['nome'] : 'Anônimo';
        $comentario = $data['mensagem'];
        $capitulo = $data['capitulo'];
        $date = date('Y-m-d H:i:s');

        // Prepara o SQL para inserir o comentário na tabela
        $sql = "INSERT INTO comentarios (nome, comentario, capitulo, data) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssis", $nome, $comentario, $capitulo, $date);

        // Executa a consulta e verifica se deu certo
        if ($stmt->execute()) {
            // Retorna uma resposta de sucesso em JSON
            echo json_encode(['success' => true, 'message' => 'Comentário salvo com sucesso']);
        } else {
            // Se houve erro na execução da query
            echo json_encode(['success' => false, 'message' => 'Erro ao salvar o comentário: ' . $conn->error]);
        }

        // Fecha a declaração preparada
        $stmt->close();
    } else {
        // Retorna um erro se os dados estiverem incompletos
        echo json_encode(['success' => false, 'message' => 'Campos obrigatórios não enviados']);
    }
}

// Fecha a conexão
$conn->close();

?>
