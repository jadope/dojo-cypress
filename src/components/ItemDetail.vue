<template>
    <div>
        <b-navbar toggleable="lg" type="dark" id="navbarr">
            <b-navbar-brand href="/">
                <img src="https://http2.mlstatic.com/storage/developers-site-cms-admin/322394706358-logo--small-v2.png" width="60px" alt=""/>
                Jerónimo's  Shopping
            </b-navbar-brand>
        </b-navbar>
        
        <h1 id="titulo">{{item.title}} </h1>
        <div id="infoProduct">
            <img  :src="photos[0].url"> 
            <h3>Precio: ${{item.price}}</h3>
            <h3>Estado: {{item.condition}}</h3>
            <h3>{{item.warranty}}</h3>
            <h3>Productos disponibles: {{item.available_quantity}}</h3>
            <hr>
            <h2 >Información del vendedor:</h2>
            <h3>Ubicación: {{seller.address.city}}, {{seller.address.state}}</h3>
            <h3>Cantidad de ventas concretadas: {{seller.seller_reputation.transactions.completed}}</h3>
            <h3>Cantidad de ventas canceladas: {{seller.seller_reputation.transactions.canceled}}</h3>
    </div>


    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            urlItem: this.$route.params.Id,
            item: null || '',
            photos: [],
            sellerId: null,
            seller: null
        }
    },


     mounted() {
        console.log(this.$route.params.itemId)
        Axios.get("https://api.mercadolibre.com/items/"+this.urlItem)
            .then((response)=>{
                        
                this.item = response.data;
                this.photos=response.data.pictures;
                this.sellerId = this.item.seller_id;
                this.getSellerInfo();
            })
          
    },
        methods:{
        getSellerInfo(){
           Axios.get("https://api.mercadolibre.com/users/"+this.sellerId)
           .then((response)=>{
                  this.seller=response.data;
           })
        }
    }

}

</script>

<style >
    #navbarr{
        background-color: #FFE600;
    }
    #infoProduct{
        color: #333333;
    }
    #titulo{
        color: #2D3277
    }
</style>