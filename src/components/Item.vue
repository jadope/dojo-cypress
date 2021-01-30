<template>
<b-row class="mt-4" >
    <b-col cols="12" md="4">
      <div>
        <router-link :to="{ name: 'ItemDetail', params: { Id: itemId }}">
          <b-card   
          img-top
          :img-src= "imgUrl"
          text-variant="black"
          :title = "title"
          >
            <b-card-text>
                <p>Precio: ${{price}} <br> La ID del vendedor es: {{sellerId}} </p>
            </b-card-text>
            
          </b-card>
          </router-link>
          <router-view/>
        
      </div>
    </b-col>
</b-row>
</template>

<script>
export default {
  name: "Items",
  props: {
    title: String,
    price: Number,
    imgUrl: String,
    sellerId: Number,
    itemId: String
  },
};
</script>

<style>
</style>