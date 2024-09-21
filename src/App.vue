<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav">
          <router-link to="/">Inicio</router-link>
          <router-link to="/about">Capítulos</router-link>          
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