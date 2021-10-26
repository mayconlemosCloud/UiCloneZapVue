<template>
  <div >
    <div class="chatwindow--header">

      <div class="chatwindow--headerinfo">
        <img class="chatwindow--avatar" :src="Contato.img" alt="">
        <div class="chatwindow--name">{{Contato.nome}}</div>
      </div>

      <div class="chatwindow--headerbuttons">
        <div class="chatwindow--headerbtn">
           <md-icon style="color:#919191">search</md-icon>         
        </div>
        <div class="chatwindow--headerbtn">
           <md-icon style="color:#919191">attach_file</md-icon>         
        </div>
        <div class="chatwindow--headerbtn">
           <md-icon style="color:#919191">more_vert</md-icon>         
        </div>
      </div>

    </div>
    <div class="chatwindow--body">
         <Menssagens/>

    </div>
<!--  Campo de emoji :style="{height: emojiOpen ? '200px' : '100px'}"  -->
    <div class="chatwindow-emojiarea" :style="{height: emojiOpen ? '300px' : '0px'}"> 
      <VEmojiPicker  @select="selectEmoji" />
    </div>



    <div class="chatwindow--footer">



      <div class="chatwindow--pre">

        <div ref="setemojiOpen" class="chatwindow--headerbtn" @click="setemojiOpen()">
             <md-icon ref="icon" :style="{color:emojiOpen ? '#009688' :'#919191' }">insert_emoticon</md-icon>   
               
        </div>


     
      </div>

<!-- Campo de Texto -->
      <div class="chatwindow--inputarea">
        <input 
        v-model="Mensagem" 
         type="text" 
        class="chatwindow--input"
        placeholder="Digite uma mensagem">
        
      </div>

<!-- 
      Envio de msg -->
      <div class="chatwindow--pos">
         <div class="chatwindow--headerbtn">
           <md-icon style="color:#919191">send</md-icon>         
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Menssagens from './Menssagens'
import {mapState} from 'vuex'
import { VEmojiPicker } from 'v-emoji-picker';
export default {
    data(){
      return{
        emojiOpen: false,
        feedback: '',
        Mensagem : ''
      }
    },
    components: {
       VEmojiPicker,
       Menssagens
    
  },
  methods: {
    selectEmoji(emoji) {
      this.Mensagem += emoji.data
      console.log(emoji)
    },
    setemojiOpen(){
      if(this.emojiOpen){
        this.emojiOpen = false  
        this.$refs.icon.$el.style = 'transform: rotate(0deg)'
     
      }else{
        this.emojiOpen = true   
       this.$refs.icon.$el.style = 'transform: rotate(-33deg)' 
      
     
      }
      
    },
   
  },
   computed:{
    ...mapState({
       Contato : state => state.ChatsVuex.contatoOne
    })   
  }
  


}
</script>

<style>
.chatwindow{
 
  height: 100%;
  
}
.chatwindow > div{
  display: flex;
  
  height: 100%;
   flex-direction: column;
 
}
.chatwindow--header{
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.chatwindow--headerinfo{
  display: flex;
  align-items: center;
  cursor: pointer;

}
.chatwindow--avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 15px 0 15px;
  }
.chatwindow--name{
  font-size: 17px;
  color: #000;

}
.chatwindow--headerbuttons{
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.chatwindow--headerbtn{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

}

.chatwindow--body{
  flex: 1;
  overflow: auto;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  background-image: url('https://web.whatsapp.com/img/bg-chat-tile-light_04fcacde539c58cca6745483d4858c52.png');
  padding: 20px 30px;
}

.chatwindow--footer{
  height: 62px;
  display: flex;
  align-items: center;
}
.chatwindow--pre{
  display: flex;
  margin: 0 15px;
}
.chatwindow--inputarea{
  flex: 1;
}
.chatwindow--input{
  width: 100%;
  height: 40px;
  border: 0;
  outline:0;
  background-color: #fff;
  border-radius: 20px;
  font-size: 15px;
  color: #4a4a4a;
  padding-left: 15px;
}
.chatwindow--pos{
  display: flex;
  margin: 0 15px;
}
.chatwindow-emojiarea{
  height: 300px;
  overflow:auto ;
  transition: all ease 1.5s;

}
.emoji-picker{
  width: auto;
  background: none;
}


</style>