<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav">
          <h3>Rifa</h3>
          <router-link to="/">Inicio</router-link>
          <router-link to="/about">Funcionalidades</router-link>          
        </div>

        <div class="nav">
          <router-link to="/login">Fazer login</router-link>
          <router-link to="/signup" class="btn-verde">Comece já</router-link>
        </div>
      </nav>
    </header>
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script src="./assets/js/App.js"></script>
<style src="./assets/css/App.css"></style>