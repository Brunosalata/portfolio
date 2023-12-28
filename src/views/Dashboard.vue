<template>
    <h1 class="mb-2 text-md-h3">Dashboard</h1>
    <v-container>
        <v-row>
            <v-col>
                <DatePicker />
            </v-col>

            <v-col>
                <TodoList />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import TodoList from '@/components/dashboard/TodoList.vue';
    import DatePicker from '@/components/dashboard/DatePicker.vue';
</script>