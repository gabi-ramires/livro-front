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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Converter a resposta em JSON
            })
            .then(data => {
                console.log(data);
                this.capitulos = data.capitulos; // Acesse o array de capítulos
            })
            .catch(error => alert('Erro ao buscar os capítulos:', error));
      },
      selecionaCapitulo(capitulo) {
        this.capitulo_selecionado = capitulo;
      },
      mokaa() {
        let moka = {
          "capitulos": [
              {
                  "id": 1,
                  "capitulo": "1",
                  "titulo": "Um novo ciclo",
                  "descricao": "Quando o despertador tocou, não tive tempo para enrolar na cama. A ansiedade falou mais alto. Na noite anterior, deixei tudo pronto para hoje; afinal, o primeiro dia na escola nova é sempre uma incógnita. Acontece que não era apenas a escola que estava me deixando nervosa; a nova cidade me deu medo. Nunca pensei que finalmente estaria morando em uma cidade grande.<br><br>Em um piscar de olhos, já tinha tomado um banho daqueles que lavam até a alma. O cabelo estava finalizado, solto e úmido, e o cheiro do creme de pentear podia ser sentido há metros de distância. Coloquei meu moletom canguru vermelho bordô preferido, minha calça jeans azul e um tênis da Vans que preciso trocar o quanto antes. Será que ele aguenta mais uns dias?<br><br>Quando pisei o pé na rua, percebi que estava um deserto coberto por uma neblina grossa, quase não conseguindo ver ao redor. A escola não era longe; dava para ir andando em uns 20 minutos, tempo suficiente para ouvir umas 4 músicas. Enquanto eu andava, tentava me atentar ao que estava ao meu redor, afinal, dizem que cidade grande é bem mais perigosa do que o interior. Minha antiga cidade sobrevivia com uma pequena igreja (onde todos entre 20 e 30 anos se casavam e viviam o resto da vida na mesma cidade em que nasceram), havia o único hospital da cidade, onde quase todos os nascimentos aconteciam, inclusive o meu. Meus pais contam que meu nascimento foi bem complicado; foi uma gravidez de risco, mas, no final, nasci super bem e com saúde. O que poucos sabem é que passei por uma “simpatia” para nascer. Não é, no mínimo, questionável o fato de ter sido algo forçado? Eu acredito que sim.<br><br>",
                  "status": "ativo",
                  "data": "2024-09-21 18:58:24"
              },
              {
                  "id": 2,
                  "capitulo": "2",
                  "titulo": "capitulo 2",
                  "descricao": "<p> ola </p>",
                  "status": "ativo",
                  "data": "2024-09-21 19:58:24"
              }
          ]
        };

        this.capitulos = moka.capitulos;
        console.log(this.capitulos)
      }
    },
    mounted() {
      this.buscaCapitulos()
      //this.mokaa()
    }
  }
  