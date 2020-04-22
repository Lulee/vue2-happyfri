<template>
  <div class="question">
     
        <h2>{{question.name}}</h2>
        <ul>
            <li v-for="(choice,i) in question.choices" :key="choice">
                <input type="radio"  > {{i}}
                <label for="choice.value"></label>
            </li>
        </ul>
    
  </div>
</template>

<script>
class Choice {
   constructor(key,value){
       this.key = key
       this.value = value

   }

}
export default {
  name: 'QuestionComp', 
  props: ['question'],
  data(){
        return{
            question:{
                id: Number,
                name: String | '',
                choices: [Choice]
            }
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
