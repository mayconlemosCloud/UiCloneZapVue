<template>
  <div>
     
      <div class="menssageLine" style=" justify-content: 'flex-start'">
          
          <div class="menssageItem">
            <div class="menssageText">
             {{Contato.body}}
            </div>
            <div class="menssageDate">
             23:00
            </div>
          </div> 
      </div>

       <div class="menssageLine" style=" justify-content: 'flex-end'">
          
          <div class="menssageItem">
            <div class="menssageText">
             {{Contato.body}}
            </div>
            <div class="menssageDate">
             23:00
            </div>
          </div> 
      </div>


  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {

   computed:{
    ...mapState({
       Contato : state => state.ChatsVuex.contatoOne
     
    })  
   }

}
</script>

<style>
.menssageLine{
  margin-bottom: 10px;
  display: flex;

}
.menssageItem{
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 90%;
}
.menssageText{
  font-size:14px;
  margin: 5px 40px 5px 5px;
}
.menssageDate{
   font-size:11px;
   color: #999;
   margin-right: 5px;
   text-align: right;
   height: 15px;
   margin-top: -15px;



}

</style>