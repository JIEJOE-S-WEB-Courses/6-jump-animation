<template>
    <div id="app">
        <Loading ref="loading" />
        <router-view></router-view>
    </div>
</template>

<script>
import Loading from "./components/loading.vue";

export default {
    // JIEJOE produce
    // b站主页：https://space.bilibili.com/3546390319860710
    name: "App",
    components: {
        Loading,
    },
    methods: {
        check_loading() {
            let timer = setInterval(() => {
                if (document.readyState === "complete") {
                    clearInterval(timer);
                    this.$refs.loading.out();
                }
            }, 300);
        },
    },
    mounted() {
        this.check_loading();
        this.$router.beforeEach((to, from, next) => {
            this.$refs.loading.in(next);
        });
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    font-size: 2vmin;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
</style>
