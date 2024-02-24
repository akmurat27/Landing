<template>
    <v-app>
        <div style="background-color:rgb(233, 233, 233); padding: 90px; border-radius: 15px;">
            <div class="main-page">
                <div class="first-page">
                    <div>
                        <h1>Registrtation</h1>
                    </div>   
                    <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center; height: 100px; margin-left: 11rem;">
                        <div style="
                            display: flex;
                            align-items: center;
                            border-bottom: 1px solid black;
                        ">
                            <svg-icon type="mdi" :path="icon" style="margin-right: 5px;" size="50" height="30"></svg-icon>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                style="width: 300%; 
                                border: none !important;
                                outline: none;
                                height: 30px;"
                            >
                            <svg-icon type="mdi" :path="icon5" size="50" height="30"></svg-icon> 
                        </div>
                        <br>
                        <div style="
                            display: flex;
                            align-items: center;
                            border-bottom: 1px solid black;
                        ">
                            <svg-icon type="mdi" :path="icon4" style="margin-right: 5px;" size="50" height="30"></svg-icon>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                style="width: 300%; 
                                border: none !important;
                                outline: none;
                                height: 30px;"
                            >
                            <svg-icon type="mdi" :path="icon5" size="50" height="30"></svg-icon> 
                        </div>
                        <br>
                        <div style="
                            display: flex;
                            align-items: center;
                            border-bottom: 1px solid black;
                        ">
                            <svg-icon type="mdi" :path="icon4" style="margin-right: 5px;" size="50" height="30"></svg-icon>
                            <input 
                                type="text" 
                                placeholder="Confirm Password" 
                                style="width: 300%; 
                                border: none !important;
                                outline: none;
                                height: 30px;"
                            >
                            <svg-icon type="mdi" :path="icon5" size="50" height="30"></svg-icon>
                        </div>    
                    </div>
                    <div style="display: flex; font-size: larger; align-items: center; margin-left: 1rem;">
                        <input type="checkbox" />
                        <h6 style="margin-left: 1rem;">Remember me</h6>
                    </div>
                    <div style=" display: flex; align-items: center; justify-content: center ;flex-direction: column; margin-right: 3.3rem;" >
                        <router-link to="/home"><button class="btn" type="submit">Registrtation</button></router-link>
                    </div>
                </div>
                <div class="second-page">
                    <img src="@/assets/undraw_happy_news_hxmt.png">
                    <div style="margin-top: 2rem;">
                        <router-link to="/login" style="text-decoration: none; color: black;">Create an account</router-link>
                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount  } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
import { mdiTwitter } from '@mdi/js';
import { mdiGoogle } from '@mdi/js';
import { mdiLock } from '@mdi/js';
import { mdiRefresh } from '@mdi/js';
export default {
    data: () => ({
        icon: mdiAccount,
        icon1: mdiFacebook,
        icon2: mdiTwitter, 
        icon3: mdiGoogle,
        icon4: mdiLock,
        icon5: mdiRefresh, 
    }),
    methods: {
        goToHome() {
            this.$router.push('/home')
        }
    },
    components: {
        SvgIcon
    }
}
</script>

<style scoped> 
    .main-page{
        display: flex;
        width: 100%;
        height: 750px;
        background-color: white;
    }
    .first-page{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
        color: black;
    }
    .second-page{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
    }
    .btn{
        color:white;
        background-color:rgb(92, 138, 199);
        border: none;
        cursor: pointer;
        width: 250%;
        height: 250%;
        border-radius: 5px;
    }
</style>