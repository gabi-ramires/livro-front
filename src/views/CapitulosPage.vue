<template>
    <!-- Exibir botões de capítulos -->
    <div class="capitulos">
        <div v-for="capitulo in capitulos" :key="capitulo.id" class="capitulo">
            <div class='botao-capitulo' @click="selecionaCapitulo(capitulo.capitulo)">Capítulo {{ capitulo.capitulo }}</div>
        </div>
    </div>

    <!-- Renderizar o conteúdo do capítulo selecionado -->
    <div v-for="capitulo in capitulos" :key="capitulo.id" class="capitulo">
        <div v-if="capitulo_selecionado == capitulo.capitulo" class="container">
            <div class="header">
                <h2>Capítulo {{ capitulo.capitulo}}</h2>
                <h1>{{ capitulo.titulo}}</h1>
            </div>

            <main class="content">
                <p v-html="capitulo.descricao"></p>
            </main>

            <footer class="footer">
                <p>&copy; 2024 Gabriela Ramires. Todos os direitos reservados.</p>
            </footer>
        </div>
    </div>

</template>

<script src="../assets/js/Capitulos.js"></script>
<style src="../assets/css/Capitulos.css"></style>
