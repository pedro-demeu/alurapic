<template>
  <div>
    <h1 v-meu-transform="15" class="titulo centralizado">{{ titulo }}</h1>
    <input v-on:input="filtro = $event.target.value" type="text" class="filtro" placeholder="filtre pelo titulo" />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro" v-bind:key="foto">
        <meu-painel :titulo="foto.titulo">
          <minha-img v-meu-transform.animate.reverse="15" :url="foto.url" :titulo="foto.titulo"></minha-img>
          <meu-botao 
          @botaoAtivado="remover(foto)" 
          tipo="button" 
          rotulo="Remover" 
          estilo="perigo"
          ></meu-botao>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import ImagemResponsive from '../imagem-responsiva/ImagemResponsive.vue';
import Botao from '../shared/botao/Botao.vue';
import Painel from "../shared/painel/Painel.vue";
export default {
  data() {
    return {
      titulo: "AluraPic",
      fotos: [],
      filtro: ''
    };
  },
  components: {
    "meu-painel": Painel,
    "minha-img": ImagemResponsive,
    "meu-botao": Botao,
  },

    created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(
        (fotos) => (this.fotos = fotos),
        (err) => console.log(err)
      );
  },

  computed:{
    fotosComFiltro(){
      if(this.filtro != ''){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto=>exp.test(foto.titulo));
      }
      else{
        return this.fotos
      }
    }
  },

  methods: {

    remover(foto){
      alert("remover foto " + foto.titulo)
    }

  }

};
</script>


<style scoped>
h1.centralizado {
  text-align: center;
}


ul.lista-fotos {
  list-style: none;
}

ul.lista-fotos li.lista-fotos-item {
  display: inline-block;
}

input.filtro {
  display: block;
  width: 100%;
}
</style>
