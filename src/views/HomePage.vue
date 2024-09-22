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
      <router-link to="/capitulos">
        <div class="card">
            <img src="../assets/img/capas/capitulo1.jpg" alt="Capítulo 1">
          <div class="overlay">
            <h5>Capítulo 1</h5>
            <h4>Um novo ciclo</h4>
          </div>
      </div>
      </router-link>


      <div class="botoes">
        <router-link to="/capitulos" class='btn-branco'>Acessar</router-link>
      </div>



    </div>
  
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style src="../assets/css/Home.css"></style>
