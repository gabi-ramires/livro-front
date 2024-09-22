export default {
    name: 'Capitulos',
    data() {
      return {
        title: 'Minha Aplicação Vueee',
        pessoas_online: 0
      };
    },
    methods: {
      alert() {
        alert('oi')
      },
      buscaPessoasOnline() {
        fetch('https://livro.free.nf/pessoas_online.php')
        .then(response => response.json())
        .then(data => {
            //document.getElementById('online_count').innerText = data.online;
            console.log(data)
            this.pessoas_online = data.online
        })
        .catch(error => console.error('Erro ao buscar o número de pessoas online:', error));
      }
    },
    mounted() {
      //this.alert()
    }
  }
  