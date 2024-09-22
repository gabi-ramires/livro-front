export default {
    name: 'Capitulos',
    data() {
      return {
        capitulo_selecionado: 0,
        capitulos: ''
      };
    },
    methods: {
      alert() {
        alert('oi')
      },
      buscaCapitulos() {
        fetch('https://livro.free.nf/capitulos.php')
        .then(response => response.json())
        .then(data => {
            //document.getElementById('online_count').innerText = data.online;
            console.log(data)
            this.capitulos = data.capitulos
        })
        .catch(error => console.error('Erro ao buscar o número de pessoas online:', error));
      }
    },
    mounted() {
      this.buscaCapitulos()
    }
  }
  