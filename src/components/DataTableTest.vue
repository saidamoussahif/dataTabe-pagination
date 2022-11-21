<template>
  <div>
    <DataTable
      :value="customers"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 20, 50,100,150]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
           <Column field="first" header="First"></Column>
            <Column field="last" header="Last"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="address" header="Address"></Column>
            <Column field="balance" header="balance"></Column>
            <Column field="created" header="Created"></Column>
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
      </template>
      <template #paginatorend>
        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
      </template>
    </DataTable>
  </div>
</template>

<script>
  import { ref, onMounted } from "vue";
  import dataService from "./service/dataService";

  export default {
    setup() {
       
      onMounted(() => {
          dataService()
          .then((data) => {
            customers.value = data
          })
          
      });
        // ref is
        const customers = ref([]); 
      
      

      return { customers };
    },
  };
</script>
