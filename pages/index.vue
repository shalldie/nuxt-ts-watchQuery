<template>
    <section class="container">
        <div>
            <div>{{ label }}</div>
        </div>
        <div>
            <button @click="changeLabel">Change query.</button>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {

    watchQuery: string[] = ['label'];

    label: string = 'hello';

    asyncData({ query }) {
        // only the first time,this method works
        // when query.label changed, it does nothing.
        console.log('function invoked');
        console.log(query.label);
        return new Promise(res => {
            setTimeout(() => {
                res({
                    label: query.label
                });
            }, 1000);
        })
    }

    changeLabel() {
        this.$router.push({
            path: '/',
            query: {
                label: Math.random().toString(16)
            }
        });
    }
}
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
