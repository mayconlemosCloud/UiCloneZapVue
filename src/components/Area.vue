<template>
  <div class="contentarea">
   
     <div  class="chatwindow"  > <ChatWindow/> </div>
     
     <!-- <div class="chatintro" v-else > <ChatIntroducao/> </div> -->
  
  </div>
</template>

<script>
import {mapState} from 'vuex'
//import ChatIntroducao from "./Chats/ChatIntroducao";
import ChatWindow from "./Chats/ChatWindow";
export default {
  data() {
    return {
      ChatAtivo : ''
    };
  },
  components: {
    //ChatIntroducao,
    ChatWindow
    
  },
  computed:{
    ...mapState({
       Contato : state => state.ChatsVuex.contatoOne
     
    })   

    
  }
};
</script>

<style>

.contentarea {
  flex: 1;
}
</style>