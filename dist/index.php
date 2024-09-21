<?php
// Define a duração do cookie da sessão para 1 ano (365 dias em segundos)
session_set_cookie_params([
    'lifetime' => 60 * 60 * 24 * 365,  // 1 ano em segundos
    'path' => '/',                      // Caminho do cookie
    'domain' => '',                     // Domínio do cookie (vazio significa padrão)
    'secure' => isset($_SERVER['HTTPS']), // Definir true para HTTPS
    'httponly' => true,                 // Só acessível via HTTP, mais seguro
    'samesite' => 'Lax'                 // Controla o comportamento de cookies cross-site
]);


// Define um valor único para a sessão
$_SESSION['usuario'] = session_id();

// Configurar o tempo de vida da sessão no servidor (em segundos)
ini_set('session.gc_maxlifetime', 60 * 60 * 24 * 365);  // 1 ano em segundos

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
date_default_timezone_set('America/Sao_Paulo'); // No PHP

// Inicia a sessão
session_start();

// Captura os dados
$session_id = session_id();
$ip = $_SERVER['REMOTE_ADDR'];
$dispositivo = $_SERVER['HTTP_USER_AGENT'];
$data = date('Y-m-d H:i:s');

// Prepara e executa a inserção
$sql = "INSERT INTO historico_acessos (session_id, ip, dispositivo, data_criacao) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $session_id, $ip, $dispositivo, $data);

if ($stmt->execute()) {
    echo "Novo registro inserido com sucesso.";
} else {
    echo "Erro: " . $stmt->error;
}

// Fecha a conexão
$stmt->close();
$conn->close();


// Diretório onde as sessões são armazenadas
$sessionDir = session_save_path();

// Verifica se o diretório existe
if (is_dir($sessionDir)) {
    // Abre o diretório
    $sessions = scandir($sessionDir);
    $activeSessions = [];

    foreach ($sessions as $sessionFile) {
        // Ignora arquivos '.' e '..'
        if ($sessionFile != '.' && $sessionFile != '..') {
            // Lê o conteúdo do arquivo de sessão
            $sessionData = file_get_contents($sessionDir . '/' . $sessionFile);
            
            // Verifica se há dados na sessão
            if (!empty($sessionData)) {
                // Adiciona a sessão ativa a um array
                $activeSessions[] = [
                    'session_id' => $sessionFile,
                    'data' => $sessionData
                ];
            }
        }
    }

    // Exibe as sessões ativas
    echo "<h2>Sessões Ativas:</h2>";
    echo "<table border='1'>
            <tr>
                <th>Session ID</th>
                <th>Dados da Sessão</th>
            </tr>";

    foreach ($activeSessions as $session) {
        echo "<tr>
                <td>" . htmlspecialchars($session['session_id']) . "</td>
                <td>" . htmlspecialchars($session['data']) . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "Diretório de sessões não encontrado.";
}




require_once('app.html');

