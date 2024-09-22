<template>
  <div id='home'>
    <div class="chamativo">
      <h3>Sobre a história</h3>
      <p class="frase-marketing">
        Renata, uma jovem introspectiva, muda-se para Aracaju e enfrenta a ansiedade do colégio novo. Lá, ela conhece
        Luíza, uma colega que desperta nela uma conexão inesperada. A história explora os desafios da adaptação, amizade
        e autodescoberta.</p>
    </div>

    <div class='botoes'>
      <router-link to="/capitulos" class='btn-escuro'>Começar leitura</router-link>
    </div>


    <div class="cards">
      <h3>Últimos capítulos</h3>

      <!-- card -->
      <div class='card' v-for="capitulo in capitulos" :key="capitulo.id">
        <router-link to="/capitulos">
          <img :src="require(`@/assets/img/capas/capitulo${capitulo.capitulo}.jpg`)" :alt="capitulo.titulo">
          <div class="overlay">
            <h5>Capítulo {{ capitulo.id }}</h5>
            <h4>{{ capitulo.titulo }}</h4>
          </div>
        </router-link>
      </div>



    </div>

  </div>
</template>


<script src="../assets/js/Home.js"></script>
<style src="../assets/css/Home.css"></style>
