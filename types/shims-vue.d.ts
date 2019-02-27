import Vue from 'vue';
import 'vue-router'; // 因为 vue-router 没有显示引入，所以里面的 .d.ts 没有生效。这里显示引入一下

declare module '*.vue' {
    // import Vue from 'vue';
    export default Vue;
}
