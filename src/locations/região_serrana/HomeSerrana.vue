<template>
<v-app>
    <CardCompObitos/>
    <CardRecentes/>
</v-app>
</template>

<script>
import CardCompObitos from '../../charts_models/charts/CardCompObitos'
import CardRecentes from '../../charts_models/Bases/ChartComponent'
export default {
    components: {
        CardCompObitos,
        CardRecentes
    }
}
</script>