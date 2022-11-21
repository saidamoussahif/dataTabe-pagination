import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "@/assets/index.css";
import Button from 'primevue/button';

import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

import { createApp } from "vue";
import DataTableTest from "@/components/DataTableTest.vue"
import { router } from "./router";


const app = createApp(DataTableTest);
app.use(router);



app.component('Button', Button);
app.component('Column', Column);
app.component('DataTable', DataTable);



app.mount("#app");
