<template>
  <div class="sidebar">
      <header>
            <img class="header-avatar" src="https://p.kindpng.com/picc/s/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" alt="" >
            <div class="header-buttons">
                <div class="header-btn">
                    <md-icon style="color: #919191">donut_large</md-icon>
                </div>
                <div class="header-btn">
                    <md-icon style="color: #919191">chat</md-icon>
                </div>
                <div class="header-btn">
                    <md-icon style="color: #919191" >more_vert</md-icon>
                </div>
             </div> 
      </header>

      <div class="search">
        <div class="search--input">
           <md-icon style="color: #919191">search</md-icon>
           <input type="search" placeholder="Procurar ou iniciar uma nova conversa"> 
        </div>
      </div>

        <div class="chatList">
            <Chats :contatos="Conversas"  />
  
        </div>

      
       
  </div>
</template>

<script>
import Chats from './Chats/Chats'

export default {
    data(){
        return{
        
        }
    },
    props:{
        Conversas : Array
    },
    
    components:{
        Chats
        
    },
    
    

}
</script>

<style >
    .sidebar{
        width: 35%;
        max-width: 415px;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #ddd ;
    }
    header{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
    }
    .header-avatar{
        border-radius: 50%;
        display: flex;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    .header-buttons{
        display: flex;
    }
    .header-btn{
        border-radius: 50%;
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        cursor: pointer;
    }
    .search{
        background-color : #f6f6f6;
        border-bottom: 1px solid #EEE ;
        padding: 5px 15px;
    }
    .search--input{
        background-color : #FFF;        
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0 10px;

    }

    .search--input input{
        flex: 1;
        border: 0;
        outline: 0;
        background-color: transparent;
        margin-left: 10px;
    }

</style>