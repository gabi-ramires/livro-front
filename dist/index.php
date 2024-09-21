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

// Iniciar a sessão
session_start();

// Define um valor único para a sessão
$_SESSION['usuario'] = session_id();

// Exibir o ID da sessão e a variável de sessão
echo "O ID da sessão é: " . session_id();
echo "<br>Valor da sessão: " . $_SESSION['usuario'];

// Configurar o tempo de vida da sessão no servidor (em segundos)
ini_set('session.gc_maxlifetime', 60 * 60 * 24 * 365);  // 1 ano em segundos


require_once('app.html');