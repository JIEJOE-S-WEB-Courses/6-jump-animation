<template>
    <div id="page1">
        <p @click="$router.push('page2')" class="page1_title">PAGE <span>1</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "page1",
};
</script>

<style>
#page1 {
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #171717;
}

.page1_title {
    font-family: sans-serif;
    font-size: 10rem;
    color: #17f700;
    font-weight: 900;
    cursor: pointer;
}

.page1_title span {
    font-size: 10rem;
    color: #f7f7f7;
}
</style>
