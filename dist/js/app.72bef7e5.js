(function(){var a={7317:function(a,e,o){"use strict";var s=o(5130),n=o(6768),i=o(4232);const r={id:"app"},t={class:"nav"},u={id:"online"};function d(a,e,o,s,d,c){const m=(0,n.g2)("router-link"),l=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("header",null,[(0,n.Lk)("nav",null,[(0,n.Lk)("div",t,[(0,n.bF)(m,{to:"/"},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.eW)("Inicio")]))),_:1}),(0,n.bF)(m,{to:"/capitulos"},{default:(0,n.k6)((()=>e[1]||(e[1]=[(0,n.eW)("Capítulos")]))),_:1})])])]),(0,n.Lk)("span",u,"Online: "+(0,i.v_)(a.pessoas_online),1),(0,n.Lk)("main",null,[(0,n.bF)(l)]),e[2]||(e[2]=(0,n.Lk)("footer",{class:"footer"},[(0,n.Lk)("p",null,"© 2024 Gabriela Ramires. Todos os direitos reservados.")],-1))])}var c={name:"App",data(){return{title:"Minha Aplicação Vueee",pessoas_online:0}},methods:{alert(){alert("oi")},buscaPessoasOnline(){fetch("https://livro.free.nf/pessoas_online.php").then((a=>a.json())).then((a=>{console.log(a),this.pessoas_online=a.online})).catch((a=>console.error("Erro ao buscar o número de pessoas online:",a)))}},mounted(){this.buscaPessoasOnline()}},m=o(1241);const l=(0,m.A)(c,[["render",d]]);var p=l,v=o(1387);const h={id:"home"},f={class:"botoes"},q={class:"cards"},g=["src","alt"],b={class:"overlay"};function k(a,e,s,r,t,u){const d=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",h,[e[2]||(e[2]=(0,n.Lk)("div",{class:"chamativo"},[(0,n.Lk)("h3",null,"Sobre a história"),(0,n.Lk)("p",{class:"frase-marketing"}," Renata, uma jovem introspectiva, muda-se para Aracaju e enfrenta a ansiedade do colégio novo. Lá, ela conhece Luíza, uma colega que desperta nela uma conexão inesperada. A história explora os desafios da adaptação, amizade e autodescoberta.")],-1)),(0,n.Lk)("div",f,[(0,n.bF)(d,{to:"/capitulos",class:"btn-escuro"},{default:(0,n.k6)((()=>e[0]||(e[0]=[(0,n.eW)("Começar leitura")]))),_:1})]),(0,n.Lk)("div",q,[e[1]||(e[1]=(0,n.Lk)("h3",null,"Últimos capítulos",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.capitulos,(a=>((0,n.uX)(),(0,n.CE)("div",{class:"card",key:a.id},[(0,n.bF)(d,{to:"/capitulos"},{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:o(2001)(`./capitulo${a.capitulo}.jpg`),alt:a.titulo},null,8,g),(0,n.Lk)("div",b,[(0,n.Lk)("h5",null,"Capítulo "+(0,i.v_)(a.id),1),(0,n.Lk)("h4",null,(0,i.v_)(a.titulo),1)])])),_:2},1024)])))),128))])])}var j={name:"HomePage",data(){return{capitulo_selecionado:0,capitulos:""}},methods:{buscaCapitulos(){fetch("https://livro.free.nf/capitulos.php").then((a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()})).then((a=>{console.log(a),this.capitulos=a.capitulos})).catch((a=>console.error("Erro ao buscar os capítulos:",a)))},mokaa(){let a={capitulos:[{id:1,capitulo:"1",titulo:"Um novo ciclo",descricao:"Quando o despertador tocou, não tive tempo para enrolar na cama. A ansiedade falou mais alto. Na noite anterior, deixei tudo pronto para hoje; afinal, o primeiro dia na escola nova é sempre uma incógnita. Acontece que não era apenas a escola que estava me deixando nervosa; a nova cidade me deu medo. Nunca pensei que finalmente estaria morando em uma cidade grande.<br><br>Em um piscar de olhos, já tinha tomado um banho daqueles que lavam até a alma. O cabelo estava finalizado, solto e úmido, e o cheiro do creme de pentear podia ser sentido há metros de distância. Coloquei meu moletom canguru vermelho bordô preferido, minha calça jeans azul e um tênis da Vans que preciso trocar o quanto antes. Será que ele aguenta mais uns dias?<br><br>Quando pisei o pé na rua, percebi que estava um deserto coberto por uma neblina grossa, quase não conseguindo ver ao redor. A escola não era longe; dava para ir andando em uns 20 minutos, tempo suficiente para ouvir umas 4 músicas. Enquanto eu andava, tentava me atentar ao que estava ao meu redor, afinal, dizem que cidade grande é bem mais perigosa do que o interior. Minha antiga cidade sobrevivia com uma pequena igreja (onde todos entre 20 e 30 anos se casavam e viviam o resto da vida na mesma cidade em que nasceram), havia o único hospital da cidade, onde quase todos os nascimentos aconteciam, inclusive o meu. Meus pais contam que meu nascimento foi bem complicado; foi uma gravidez de risco, mas, no final, nasci super bem e com saúde. O que poucos sabem é que passei por uma “simpatia” para nascer. Não é, no mínimo, questionável o fato de ter sido algo forçado? Eu acredito que sim.<br><br>",status:"ativo",data:"2024-09-21 18:58:24"},{id:2,capitulo:"2",titulo:"A aproximação acontee",descricao:"<p> ola </p>",status:"ativo",data:"2024-09-21 19:58:24"}]};this.capitulos=a.capitulos,console.log(this.capitulos)}},mounted(){this.buscaCapitulos()}};const E=(0,m.A)(j,[["render",k]]);var z=E;const C={key:0,class:"capitulos"},O=["onClick"];function A(a,e,o,s,r,t){return(0,n.uX)(),(0,n.CE)(n.FK,null,[0==r.capitulo_selecionado?((0,n.uX)(),(0,n.CE)("div",C,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.capitulos,(a=>((0,n.uX)(),(0,n.CE)("div",{key:a.id,class:"capitulo"},[(0,n.Lk)("div",{class:"botao-capitulo",onClick:e=>t.selecionaCapitulo(a.capitulo)},"Capítulo "+(0,i.v_)(a.capitulo),9,O)])))),128))])):(0,n.Q3)("",!0),e[0]||(e[0]=(0,n.Fv)('<div class="capitulo"><div class="container"><div class="header"><h2>Capítulo 1</h2><h1>Um novo ciclo</h1></div><main class="content"><p>Quando o despertador tocou, não tive tempo para enrolar na cama. A ansiedade falou mais alto. Na noite anterior, deixei tudo pronto para hoje; afinal, o primeiro dia na escola nova é sempre uma incógnita. Acontece que não era apenas a escola que estava me deixando nervosa; a nova cidade me deu medo. Nunca pensei que finalmente estaria morando em uma cidade grande.</p><p>Em um piscar de olhos, já tinha tomado um banho daqueles que lavam até a alma. O cabelo estava finalizado, solto e úmido, e o cheiro do creme de pentear podia ser sentido há metros de distância. Coloquei meu moletom canguru vermelho bordô preferido, minha calça jeans azul e um tênis da Vans que preciso trocar o quanto antes. Será que ele aguenta mais uns dias?</p><p>Quando pisei o pé na rua, percebi que estava um deserto coberto por uma neblina grossa, quase não conseguindo ver ao redor. A escola não era longe; dava para ir andando em uns 20 minutos, tempo suficiente para ouvir umas 4 músicas. Enquanto eu andava, tentava me atentar ao que estava ao meu redor, afinal, dizem que cidade grande é bem mais perigosa do que o interior. Minha antiga cidade sobrevivia com uma pequena igreja (onde todos entre 20 e 30 anos se casavam e viviam o resto da vida na mesma cidade em que nasceram), havia o único hospital da cidade, onde quase todos os nascimentos aconteciam, inclusive o meu. Meus pais contam que meu nascimento foi bem complicado; foi uma gravidez de risco, mas, no final, nasci super bem e com saúde. O que poucos sabem é que passei por uma “simpatia” para nascer. Não é, no mínimo, questionável o fato de ter sido algo forçado? Eu acredito que sim.</p><p>Estava nos últimos segundos de &quot;While Your Lips Are Still Red&quot; quando finalmente cheguei à escola, faltando 5 minutos para o sinal de entrada soar. A escola era grande e tinha um aspecto de ser bem antiga também. A pintura das paredes estava descascando entre o rodapé e os primeiros centímetros de parede. O teto tinha marcas de mofo em alguns cantos, principalmente perto das janelas, cujos vidros tinham pequenas marcas de arranhão, algumas lascas e trincas. Todas as janelas tinham grades com uma pintura verde musgo, algumas já com sinais de corrosão aparente. A entrada principal dava em um saguão com pé direito duplo, o que fazia com que, às vezes, houvesse ecos quando não havia ninguém lá. Tinha um piano enorme no canto direito, enquanto que no canto esquerdo da entrada havia uma estante de vidro com vários tipos de troféus, medalhas e prêmios que a escola colecionava ao longo de algumas décadas. Minha curiosidade me fez ir direto para essa estante ver os detalhes dos prêmios e sobre o que se tratavam. Fiquei alguns segundos olhando e notei que haviam vários prêmios de esportes como vôlei e futebol, prêmios de olimpíadas de matemática, xadrez, música e um que me chamou a atenção, chamado “Feira de Ciências de 2010”. Na minha antiga escola, não havia eventos assim; no máximo, eram eventos no centro da cidade que envolviam política.</p><p>Ao meu redor, os alunos da escola pareciam estar acostumados com a rotina. Parecia que todos tinham em mente o que fazer naqueles instantes antes de entrar para a sala de aula. Era como se todos aproveitassem o tempo antes de ficarem “presos” por horas em aulas monótonas e entediantes. Mesmo na minha antiga escola, eu não sabia muito bem o que era para fazer em momentos assim. Era para aproveitar o que exatamente? Sempre notei que as pessoas gostavam de ficar em grupos parecidos, conversando sobre assuntos que eu nunca achei minimamente interessantes. Quando eu passava por perto de alguns desses grupos, dava para ouvir conversas como “Você viu o novo clipe da Beyoncé?” ou “Está sabendo quem terminou o namoro?”. Era extremamente vergonhoso quando alguém começava a me fazer perguntas do tipo “Por que você não chega aqui? Não fica aí se isolando”. Eu acabava indo para não chamar atenção, mas achava tão chato ter que ficar ouvindo a conversa deles e fingir que estava gostando de fazer parte. Por que as pessoas achavam que eu era triste por estar sozinha? Eu me sentia desconfortável quando me obrigavam a me enturmar. Será que todos se sentem assim também e acabam fingindo que gostam de estar em grupos? Algumas pessoas até eram legais, mas ainda assim, eu sentia que estava perdendo tempo. Nesses momentos, eu pensava que gostaria de estar em casa tentando juntar 5 mil kamas para comprar o conjunto do Mulobo, afinal, minha Iop já estava quase chegando ao nível 150.</p><p>Entrando na sala, procurei um lugar que não chamasse atenção e que me permitisse assistir às aulas de forma tranquila, sem ser incomodada. Meus colegas já se conheciam; alguns pareciam melhores amigos, viviam grudados na aula, no intervalo e iam embora juntos. Outros eram mais quietos e reservados. Notei que havia um menino da minha antiga cidade, mas não conseguia me lembrar do nome nem de nada sobre ele; só sei que ele provavelmente não sabia que eu era da mesma cidade também.</p><p>Quando chegou o intervalo, fui direto à lanchonete para comer algo e tomar um café preto. A fila naquele dia estava enorme. Será que todos os dias vão ser assim?</p><p>Ainda restavam 15 minutos de intervalo e eu já não tinha mais o que fazer. Já tinha percorrido a escola inteira, conhecido a biblioteca, as quadras de esporte e todos os banheiros. Fiquei sentada numa base de concreto pintada de branco que as pessoas usavam como banco. Comecei a observar o que as pessoas estavam fazendo e, principalmente, tentando entender como eram. O que as pessoas de cidade grande fazem fora da escola? Será que vão a festas ou algo assim? Por um instante, reparei em uma menina que passou o intervalo todo sozinha lendo um livro, do qual não consegui ver o título. Ela tinha um cabelo ondulado e liso que batia nos ombros, parecia ser um pouco mais alta do que eu, mas não tive certeza, pois não passei perto dela. Usava sapatos de cor bordô, um jeans escuro e um casaco azul-marinho discreto. Por algum motivo, ela me chamou a atenção e, quando levantou o rosto para olhar ao redor, percebi o quão linda ela era. Me peguei pensando por que ela tinha aquela personalidade. Facilmente poderia estar em um daqueles grupos de meninas bonitas e falantes ou até mesmo com amigos, já que não parecia ser o primeiro dia dela ali. Fiquei curiosa para saber mais sobre ela. Qual será o nome? Como será que descubro?</p><p>O sinal tocou e todos começaram a se dirigir para suas respectivas salas de aula, mas a menina leitora demorou um pouco para sair dali. Em alguns instantes, ela se levantou e começou a andar na minha direção. Eu fiquei fingindo não ter notado a presença dela quando ela passou por mim. Naquele curto espaço de tempo, consegui perceber que ela tinha uns dez centímetros a mais que eu e seus passos eram leves e curtos, como se não quisesse ser notada ao andar. Ela entrou na sala 14 e logo se misturou na multidão que entrava, fazendo com que eu a perdesse de vista.</p></main><footer class="footer"><p>© 2024 Gabriela Ramires. Todos os direitos reservados.</p></footer></div></div>',1))],64)}var L={name:"CapitulosPage",data(){return{capitulo_selecionado:0,capitulos:""}},methods:{alert(){alert("oi")},buscaCapitulos(){fetch("https://livro.free.nf/capitulos.php").then((a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()})).then((a=>{console.log(a),this.capitulos=a.capitulos})).catch((a=>console.error("Erro ao buscar os capítulos:",a)))},selecionaCapitulo(a){this.capitulo_selecionado=a},mokaa(){let a={capitulos:[{id:1,capitulo:"1",titulo:"Um novo ciclo",descricao:"Quando o despertador tocou, não tive tempo para enrolar na cama. A ansiedade falou mais alto. Na noite anterior, deixei tudo pronto para hoje; afinal, o primeiro dia na escola nova é sempre uma incógnita. Acontece que não era apenas a escola que estava me deixando nervosa; a nova cidade me deu medo. Nunca pensei que finalmente estaria morando em uma cidade grande.<br><br>Em um piscar de olhos, já tinha tomado um banho daqueles que lavam até a alma. O cabelo estava finalizado, solto e úmido, e o cheiro do creme de pentear podia ser sentido há metros de distância. Coloquei meu moletom canguru vermelho bordô preferido, minha calça jeans azul e um tênis da Vans que preciso trocar o quanto antes. Será que ele aguenta mais uns dias?<br><br>Quando pisei o pé na rua, percebi que estava um deserto coberto por uma neblina grossa, quase não conseguindo ver ao redor. A escola não era longe; dava para ir andando em uns 20 minutos, tempo suficiente para ouvir umas 4 músicas. Enquanto eu andava, tentava me atentar ao que estava ao meu redor, afinal, dizem que cidade grande é bem mais perigosa do que o interior. Minha antiga cidade sobrevivia com uma pequena igreja (onde todos entre 20 e 30 anos se casavam e viviam o resto da vida na mesma cidade em que nasceram), havia o único hospital da cidade, onde quase todos os nascimentos aconteciam, inclusive o meu. Meus pais contam que meu nascimento foi bem complicado; foi uma gravidez de risco, mas, no final, nasci super bem e com saúde. O que poucos sabem é que passei por uma “simpatia” para nascer. Não é, no mínimo, questionável o fato de ter sido algo forçado? Eu acredito que sim.<br><br>",status:"ativo",data:"2024-09-21 18:58:24"},{id:2,capitulo:"2",titulo:"capitulo 2",descricao:"<p> ola </p>",status:"ativo",data:"2024-09-21 19:58:24"}]};this.capitulos=a.capitulos,console.log(this.capitulos)}},mounted(){}};const _=(0,m.A)(L,[["render",A]]);var x=_;const w=[{path:"/",name:"HomePage",component:z},{path:"/capitulos",name:"CapitulosPage",component:x}],N=(0,v.aE)({history:(0,v.LA)(),routes:w});var y=N;(0,s.Ef)(p).use(y).mount("#app")},2001:function(a,e,o){var s={"./capitulo1.jpg":155,"./capitulo2.jpg":3708};function n(a){var e=i(a);return o(e)}function i(a){if(!o.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return s[a]}n.keys=function(){return Object.keys(s)},n.resolve=i,a.exports=n,n.id=2001},155:function(a,e,o){"use strict";a.exports=o.p+"img/capitulo1.25a765cf.jpg"},3708:function(a,e,o){"use strict";a.exports=o.p+"img/capitulo2.a48fdf15.jpg"}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return a[s].call(i.exports,i,i.exports,o),i.exports}o.m=a,function(){var a=[];o.O=function(e,s,n,i){if(!s){var r=1/0;for(c=0;c<a.length;c++){s=a[c][0],n=a[c][1],i=a[c][2];for(var t=!0,u=0;u<s.length;u++)(!1&i||r>=i)&&Object.keys(o.O).every((function(a){return o.O[a](s[u])}))?s.splice(u--,1):(t=!1,i<r&&(r=i));if(t){a.splice(c--,1);var d=n();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=a.length;c>0&&a[c-1][2]>i;c--)a[c]=a[c-1];a[c]=[s,n,i]}}(),function(){o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,{a:e}),e}}(),function(){o.d=function(a,e){for(var s in e)o.o(e,s)&&!o.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){o.p="/"}(),function(){var a={524:0};o.O.j=function(e){return 0===a[e]};var e=function(e,s){var n,i,r=s[0],t=s[1],u=s[2],d=0;if(r.some((function(e){return 0!==a[e]}))){for(n in t)o.o(t,n)&&(o.m[n]=t[n]);if(u)var c=u(o)}for(e&&e(s);d<r.length;d++)i=r[d],o.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return o.O(c)},s=self["webpackChunklivro_front"]=self["webpackChunklivro_front"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(7317)}));s=o.O(s)})();
//# sourceMappingURL=app.72bef7e5.js.map