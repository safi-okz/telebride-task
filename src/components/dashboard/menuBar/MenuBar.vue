<template>
    <section class="bg-white shadow-lg py-2.5 flex">
        <DashboardDropdown />
        <LayoutDropdown />
        <AppsDropdown />
        <PagesDropdown />
        <ComponentsDropdown />
        <FormsDropdown />
        <TablesDropdown />
        <CahrtsDropdown />
        <MiscDropdown />
    </section>
</template>

<script setup>
import DashboardDropdown from './DashboardDropdown.vue';
import LayoutDropdown from './LayoutDropdown.vue';
import AppsDropdown from './AppsDropdown.vue';
import PagesDropdown from './PagesDropdown.vue';
import ComponentsDropdown from './ComponentsDropdown.vue'
import FormsDropdown from './FormsDropdown.vue';
import TablesDropdown from './TablesDropdown.vue';
import CahrtsDropdown from './ChartsDropdown.vue';
import MiscDropdown from './MiscDropdown.vue'
</script>