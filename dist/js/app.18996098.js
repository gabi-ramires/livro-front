(function(){var o={769:function(o,e,a){"use strict";var n=a(5130),t=a(6768),i=a(4232);const s={id:"app"},r={class:"nav"},u={id:"online"};function c(o,e,a,n,c,l){const d=(0,t.g2)("router-link"),m=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",s,[(0,t.Lk)("header",null,[(0,t.Lk)("nav",null,[(0,t.Lk)("div",r,[(0,t.bF)(d,{to:"/"},{default:(0,t.k6)((()=>e[0]||(e[0]=[(0,t.eW)("Inicio")]))),_:1}),(0,t.bF)(d,{to:"/capitulos"},{default:(0,t.k6)((()=>e[1]||(e[1]=[(0,t.eW)("Capítulos")]))),_:1})])])]),(0,t.Lk)("span",u,"Online: "+(0,i.v_)(o.pessoas_online),1),(0,t.Lk)("main",null,[(0,t.bF)(m)]),e[2]||(e[2]=(0,t.Lk)("footer",{class:"footer"},[(0,t.Lk)("p",null,"© 2024 Gabriela Ramires. Todos os direitos reservados.")],-1))])}var l={name:"App",data(){return{title:"Minha Aplicação Vueee",pessoas_online:0}},methods:{alert(){alert("oi")},buscaPessoasOnline(){fetch("https://livro.free.nf/pessoas_online.php").then((o=>o.json())).then((o=>{console.log(o),this.pessoas_online=o.online})).catch((o=>console.error("Erro ao buscar o número de pessoas online:",o)))}},mounted(){this.buscaPessoasOnline()}},d=a(1241);const m=(0,d.A)(l,[["render",c]]);var p=m,v=a(1387);const h={id:"home"},f={class:"botoes"},b={class:"cards"},g=["src","alt"],k={class:"overlay"};function q(o,e,n,s,r,u){const c=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",h,[e[2]||(e[2]=(0,t.Lk)("div",{class:"chamativo"},[(0,t.Lk)("h3",null,"Sobre a história"),(0,t.Lk)("p",{class:"frase-marketing"}," Renata, uma jovem introspectiva, muda-se para Aracaju e enfrenta a ansiedade do colégio novo. Lá, ela conhece Luíza, uma colega que desperta nela uma conexão inesperada. A história explora os desafios da adaptação, amizade e autodescoberta.")],-1)),(0,t.Lk)("div",f,[(0,t.bF)(c,{to:"/capitulos",class:"btn-escuro"},{default:(0,t.k6)((()=>e[0]||(e[0]=[(0,t.eW)("Começar leitura")]))),_:1})]),(0,t.Lk)("div",b,[e[1]||(e[1]=(0,t.Lk)("h3",null,"Últimos capítulos",-1)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.capitulos,(o=>((0,t.uX)(),(0,t.CE)("div",{class:"card",key:o.id},[(0,t.bF)(c,{to:"/capitulos"},{default:(0,t.k6)((()=>[(0,t.Lk)("img",{src:a(2001)(`./capitulo${o.capitulo}.jpg`),loading:"lazy",alt:o.titulo},null,8,g),(0,t.Lk)("div",k,[(0,t.Lk)("h5",null,"Capítulo "+(0,i.v_)(o.id),1),(0,t.Lk)("h4",null,(0,i.v_)(o.titulo),1)])])),_:2},1024)])))),128))])])}var C={name:"HomePage",data(){return{capitulo_selecionado:0,capitulos:""}},methods:{buscaCapitulos(){fetch("https://livro.free.nf/capitulos.php").then((o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((o=>{console.log(o),this.capitulos=o.capitulos.reverse()})).catch((o=>console.error("Erro ao buscar os capítulos:",o)))},mokaa(){let o={capitulos:[{id:1,capitulo:"1",titulo:"Um novo ciclo",descricao:"Quando o despertador tocou, não tive tempo para enrolar na cama. A ansiedade falou mais alto. Na noite anterior, deixei tudo pronto para hoje; afinal, o primeiro dia na escola nova é sempre uma incógnita. Acontece que não era apenas a escola que estava me deixando nervosa; a nova cidade me deu medo. Nunca pensei que finalmente estaria morando em uma cidade grande.<br><br>Em um piscar de olhos, já tinha tomado um banho daqueles que lavam até a alma. O cabelo estava finalizado, solto e úmido, e o cheiro do creme de pentear podia ser sentido há metros de distância. Coloquei meu moletom canguru vermelho bordô preferido, minha calça jeans azul e um tênis da Vans que preciso trocar o quanto antes. Será que ele aguenta mais uns dias?<br><br>Quando pisei o pé na rua, percebi que estava um deserto coberto por uma neblina grossa, quase não conseguindo ver ao redor. A escola não era longe; dava para ir andando em uns 20 minutos, tempo suficiente para ouvir umas 4 músicas. Enquanto eu andava, tentava me atentar ao que estava ao meu redor, afinal, dizem que cidade grande é bem mais perigosa do que o interior. Minha antiga cidade sobrevivia com uma pequena igreja (onde todos entre 20 e 30 anos se casavam e viviam o resto da vida na mesma cidade em que nasceram), havia o único hospital da cidade, onde quase todos os nascimentos aconteciam, inclusive o meu. Meus pais contam que meu nascimento foi bem complicado; foi uma gravidez de risco, mas, no final, nasci super bem e com saúde. O que poucos sabem é que passei por uma “simpatia” para nascer. Não é, no mínimo, questionável o fato de ter sido algo forçado? Eu acredito que sim.<br><br>",status:"ativo",data:"2024-09-21 18:58:24"},{id:2,capitulo:"2",titulo:"A aproximação acontee",descricao:"<p> ola </p>",status:"ativo",data:"2024-09-21 19:58:24"}]};this.capitulos=o.capitulos,console.log(this.capitulos)}},mounted(){this.buscaCapitulos()}};const L=(0,d.A)(C,[["render",q]]);var E=L;const j={key:0,class:"capitulos"},_=["onClick"],y={key:0,class:"container"},O={class:"header"},x={class:"content"},w=["innerHTML"],A={class:"content"},T={class:"form"},X={class:"comentarios"},z={key:0,class:"comentario"},F={class:"nome"},N={class:"mensagem"};function M(o,e,a,s,r,u){return(0,t.uX)(),(0,t.CE)(t.FK,null,[0==r.capitulo_selecionado?((0,t.uX)(),(0,t.CE)("div",j,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.capitulos,(o=>((0,t.uX)(),(0,t.CE)("div",{key:o.id,class:"capitulo"},[(0,t.Lk)("div",{class:"botao-capitulo",onClick:e=>u.selecionaCapitulo(o.capitulo)},"Capítulo "+(0,i.v_)(o.capitulo),9,_)])))),128))])):(0,t.Q3)("",!0),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.capitulos,(o=>((0,t.uX)(),(0,t.CE)("div",{key:o.id,class:"capitulo"},[r.capitulo_selecionado==o.capitulo?((0,t.uX)(),(0,t.CE)("div",y,[(0,t.Lk)("div",O,[(0,t.Lk)("h2",null,"Capítulo "+(0,i.v_)(o.capitulo),1),(0,t.Lk)("h1",null,(0,i.v_)(o.titulo),1)]),(0,t.Lk)("main",x,[(0,t.Lk)("p",{innerHTML:o.descricao},null,8,w)]),(0,t.Lk)("main",A,[(0,t.Lk)("div",T,[e[3]||(e[3]=(0,t.Lk)("h2",null,"Comentários",-1)),(0,t.Lk)("div",X,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.comentariosGET,(o=>((0,t.uX)(),(0,t.CE)("div",{key:o.id},[r.capitulo_selecionado==o.capitulo?((0,t.uX)(),(0,t.CE)("div",z,[(0,t.Lk)("span",F,(0,i.v_)(o.nome),1),(0,t.Lk)("p",N,(0,i.v_)(o.comentario),1)])):(0,t.Q3)("",!0)])))),128))]),e[4]||(e[4]=(0,t.Lk)("hr",null,null,-1)),e[5]||(e[5]=(0,t.Lk)("label",null,"Nome (opcional):",-1)),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>r.comentario.nome=o)},null,512),[[n.Jo,r.comentario.nome]]),e[6]||(e[6]=(0,t.Lk)("label",null,"Comentário:",-1)),(0,t.bo)((0,t.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.comentario.mensagem=o),required:""},null,512),[[n.Jo,r.comentario.mensagem]]),(0,t.Lk)("button",{onClick:e[2]||(e[2]=o=>u.enviarComentario())},"Enviar")])]),e[7]||(e[7]=(0,t.Lk)("footer",{class:"footer"},[(0,t.Lk)("p",null,"© 2024 Gabriela Ramires. Todos os direitos reservados.")],-1))])):(0,t.Q3)("",!0)])))),128))],64)}var P={name:"CapitulosPage",data(){return{capitulo_selecionado:0,capitulos:"",comentario:{nome:"",mensagem:""},comentariosGET:[{id:"3",nome:"laura ",comentario:"o capítulo ficou incrível, meu amor.\na história reflete a coragem de seguir nossos sonhos sem hesitar. \n\nps: estou orgulhosa de ti e te amo.\n\n",capitulo:"3",data:"2024-10-06 21:26:04.000000"},{id:"2",nome:"Alexandre ",comentario:"Muito bom ",capitulo:"2",data:"2024-09-29 21:03:52.000000"},{id:"1",nome:"Kelly Martins ",comentario:"Cada vez mais ansiosa pelos próximos capítulos.\n- talentosa demais! ",capitulo:"2",data:"2024-09-29 20:13:45.000000"}]}},methods:{alert(){alert("oi")},buscaCapitulos(){fetch("https://livro.free.nf/capitulos.php").then((o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})).then((o=>{console.log(o),this.capitulos=o.capitulos})).catch((o=>console.error("Erro ao buscar os capítulos:",o)))},selecionaCapitulo(o){this.capitulo_selecionado=o},mokaa(){let o={capitulos:[{id:1,capitulo:"1",titulo:"Um novo ciclo",descricao:"Quando o despertador tocou, não tive tempo para enrolar na cama. A ansiedade falou mais alto. Na noite anterior, deixei tudo pronto para hoje; afinal, o primeiro dia na escola nova é sempre uma incógnita. Acontece que não era apenas a escola que estava me deixando nervosa; a nova cidade me deu medo. Nunca pensei que finalmente estaria morando em uma cidade grande.<br><br>Em um piscar de olhos, já tinha tomado um banho daqueles que lavam até a alma. O cabelo estava finalizado, solto e úmido, e o cheiro do creme de pentear podia ser sentido há metros de distância. Coloquei meu moletom canguru vermelho bordô preferido, minha calça jeans azul e um tênis da Vans que preciso trocar o quanto antes. Será que ele aguenta mais uns dias?<br><br>Quando pisei o pé na rua, percebi que estava um deserto coberto por uma neblina grossa, quase não conseguindo ver ao redor. A escola não era longe; dava para ir andando em uns 20 minutos, tempo suficiente para ouvir umas 4 músicas. Enquanto eu andava, tentava me atentar ao que estava ao meu redor, afinal, dizem que cidade grande é bem mais perigosa do que o interior. Minha antiga cidade sobrevivia com uma pequena igreja (onde todos entre 20 e 30 anos se casavam e viviam o resto da vida na mesma cidade em que nasceram), havia o único hospital da cidade, onde quase todos os nascimentos aconteciam, inclusive o meu. Meus pais contam que meu nascimento foi bem complicado; foi uma gravidez de risco, mas, no final, nasci super bem e com saúde. O que poucos sabem é que passei por uma “simpatia” para nascer. Não é, no mínimo, questionável o fato de ter sido algo forçado? Eu acredito que sim.<br><br>",status:"ativo",data:"2024-09-21 18:58:24"},{id:2,capitulo:"2",titulo:"capitulo 2",descricao:"<p> ola </p>",status:"ativo",data:"2024-09-21 19:58:24"}]};this.capitulos=o.capitulos,console.log(this.capitulos)},enviarComentario(){if(!this.comentario.mensagem)return void alert("O campo de comentário é obrigatório.");const o={nome:this.comentario.nome||"Anônimo",mensagem:this.comentario.mensagem,capitulo:this.capitulo_selecionado};fetch("https://livro.free.nf/comentarios.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((o=>o.json())).then((o=>{o.success?(alert("Comentário enviado com sucesso!"),this.comentario.nome="",this.comentario.mensagem=""):alert("Erro ao enviar o comentário. Tente novamente.")})).catch((o=>{console.error("Erro ao enviar o comentário:",o),alert("Ocorreu um erro. Por favor, tente novamente mais tarde.")}))},buscarComentarios(){fetch("https://livro.free.nf/comentarios.php",{method:"GET",headers:{"Content-Type":"application/json"}}).then((o=>o.json())).then((o=>{o.success?(this.comentariosGET=o.comentarios,console.log(this.comentariosGET)):console.log("erro ao buscar comentarios")})).catch((o=>{console.error("Erro buscar comentários:",o)}))}},mounted(){this.buscaCapitulos(),this.buscarComentarios()}};const G=(0,d.A)(P,[["render",M]]);var Q=G;const K=[{path:"/",name:"HomePage",component:E},{path:"/capitulos",name:"CapitulosPage",component:Q}],U=(0,v.aE)({history:(0,v.LA)(),routes:K});var I=U;(0,n.Ef)(p).use(I).mount("#app")},2001:function(o,e,a){var n={"./capitulo1.jpg":155,"./capitulo2.jpg":3708,"./capitulo3.jpg":1753,"./capitulo4.jpg":1066};function t(o){var e=i(o);return a(e)}function i(o){if(!a.o(n,o)){var e=new Error("Cannot find module '"+o+"'");throw e.code="MODULE_NOT_FOUND",e}return n[o]}t.keys=function(){return Object.keys(n)},t.resolve=i,o.exports=t,t.id=2001},155:function(o,e,a){"use strict";o.exports=a.p+"img/capitulo1.d5415be8.jpg"},3708:function(o,e,a){"use strict";o.exports=a.p+"img/capitulo2.7d5ad49e.jpg"},1753:function(o,e,a){"use strict";o.exports=a.p+"img/capitulo3.aded7978.jpg"},1066:function(o,e,a){"use strict";o.exports=a.p+"img/capitulo4.64f96fe1.jpg"}},e={};function a(n){var t=e[n];if(void 0!==t)return t.exports;var i=e[n]={exports:{}};return o[n].call(i.exports,i,i.exports,a),i.exports}a.m=o,function(){var o=[];a.O=function(e,n,t,i){if(!n){var s=1/0;for(l=0;l<o.length;l++){n=o[l][0],t=o[l][1],i=o[l][2];for(var r=!0,u=0;u<n.length;u++)(!1&i||s>=i)&&Object.keys(a.O).every((function(o){return a.O[o](n[u])}))?n.splice(u--,1):(r=!1,i<s&&(s=i));if(r){o.splice(l--,1);var c=t();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=o.length;l>0&&o[l-1][2]>i;l--)o[l]=o[l-1];o[l]=[n,t,i]}}(),function(){a.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return a.d(e,{a:e}),e}}(),function(){a.d=function(o,e){for(var n in e)a.o(e,n)&&!a.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){a.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){a.p="/"}(),function(){var o={524:0};a.O.j=function(e){return 0===o[e]};var e=function(e,n){var t,i,s=n[0],r=n[1],u=n[2],c=0;if(s.some((function(e){return 0!==o[e]}))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(u)var l=u(a)}for(e&&e(n);c<s.length;c++)i=s[c],a.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return a.O(l)},n=self["webpackChunklivro_front"]=self["webpackChunklivro_front"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(769)}));n=a.O(n)})();
//# sourceMappingURL=app.18996098.js.map