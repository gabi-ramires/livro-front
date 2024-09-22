<?php
// Inicia a sessão
session_start();

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
date_default_timezone_set('America/Sao_Paulo');


// Captura os dados
$session_id = session_id();
$ip = $_SERVER['REMOTE_ADDR'];
$dispositivo = $_SERVER['HTTP_USER_AGENT'];
$data = date('Y-m-d H:i:s');


// Prepara e executa a inserção
$sql = "INSERT INTO historico_acessos (session_id, ip, dispositivo, data_inicio) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $session_id, $ip, $dispositivo, $data);
$stmt->execute();


// Busca quantas pessoas estão online
$sql = "SELECT * FROM historico_acessos WHERE data_fim IS NULL";
$result = $conn->query($sql);
$pessoas_online = 0;

if ($result) {
    $pessoas_online = $result->num_rows;
    echo "Online: " . $pessoas_online;
}

// Fecha a conexão
$stmt->close();
$conn->close();

require_once('app.html');

?>

<script>
window.addEventListener('beforeunload', function() {
    navigator.sendBeacon('sair.php?data_inicio=<?= $data; ?>');
});
</script>


