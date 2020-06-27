import Vue from "vue";
import DigiBanner from "./Banner.vue";

const Components ={
    DigiBanner
}
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;