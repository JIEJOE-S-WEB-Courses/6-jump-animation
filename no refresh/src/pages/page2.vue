<template>
    <div id="page2">
        <p @click="$router.push('page1')" class="page2_title">PAGE <span>2</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "page2",
};
</script>

<style>
#page2 {
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #17f700;
}

.page2_title {
    font-family: sans-serif;
    font-size: 10rem;
    color: #171717;
    font-weight: 900;
    cursor: pointer;
}

.page2_title span {
    font-size: 10rem;
    color: #f7f7f7;
}
</style>
