<template>
  <div>
    <button class="button" >
      {{text}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'CustomButton',
  data(){
     return {
       currentPath : window.location.pathname
     }
  },
  props: {
    text: String,
    display:true
  },
  methods:{
    handleClick(e){
      console.log(e.target)
      console.log(this.currentPath)
      switch(this.currentPath){
        case 'HomePage':
          this.$router.push('QuestionPage')
          break;

      } 
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
}
</style>
