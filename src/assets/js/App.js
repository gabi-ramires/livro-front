export default {
  name: 'App',
  data() {
    return {
      title: 'Minha Aplicação Vueee',
      dados: ''
    };
  },
  methods: {
    alert() {
      alert('oi')
    },
    server(){
      fetch('https://gabrielaramires.com.br/api.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        this.dados = data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
  },
  mounted() {
    this.server()
  }
}
