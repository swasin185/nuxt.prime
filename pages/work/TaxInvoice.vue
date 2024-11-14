<template>
    <Card>
        <template #title>TAX INVOICE</template>
        <template #content>
            <DataTable scrollable scroll-height="150px" selection-mode="single" show-gridlines striped-rows
                :value="invoices" dataKey="invNr" v-model:selection="invoice" v-on:row-select="">
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"
                    header-style="text-decoration: underline" :style="{
                        'margin': '0px',
                        'padding': '2px',
                        'overflow': 'hidden',
                        'padding-left': '5px',
                        'padding-right': '5px',
                        'min-width': col.width,
                        'max-width': col.width,
                        'white-space': 'nowrap',
                        'text-overflow': 'ellipsis',
                        'text-align': col.type == 'number' ? 'right' : col.type == 'code' ? 'center' : 'left'
                    }"
                />
                <template #footer>{{ invoices.length }} records </template>
            </DataTable>
            <hr />
            <DataTable scrollable scroll-height="300px" selection-mode="single" show-gridlines striped-rows
                :value="invoice ? invoice.items : []" dataKey="itemNr" v-model:selection="invitem" v-on:row-select="">
                <Column header="ที่" class="m-0 p-1 text-right" header-style="text-decoration: underline"
                    style="min-width: 30px">
                    <template #body="slotProps">
                        {{ slotProps.index + 1 }}
                    </template>
                </Column>
                <Column v-for="col of itemColumns" :key="col.field" :field="col.field" :header="col.header"
                    header-style="text-decoration: underline" :style="{
                        'margin': '0px',
                        'padding': '2px',
                        'overflow': 'hidden',
                        'padding-left': '5px',
                        'padding-right': '5px',
                        'min-width': col.width,
                        'max-width': col.width,
                        'white-space': 'nowrap',
                        'text-overflow': 'ellipsis',
                        'text-align': col.type == 'number' ? 'right' : col.type == 'code' ? 'center' : 'left'
                    }" />
            </DataTable>
        </template>
        <template #footer>ราคารวม VAT?
            <ToggleSwitch v-model="invoice.incVAT" @change="calculateInv(invoice)" />
        </template>
    </Card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Invoice, InvItem, calculateInv } from '~/shared/Invoice'

const invoices = ref([])
const invoice = ref<Invoice>(new Invoice())
const invitem = ref<InvItem>()

onMounted(async () => {
    invoices.value = await $fetch('/api/invoice')
    for (let inv of invoices.value) calculateInv(inv)
})

const columns = [
    {
        field: 'invNr',
        header: 'ID',
        width: '50px',
        readonly: true,
        maxlength: 5,
        type: 'code'
    },
    {
        field: 'invDate',
        header: 'Date',
        width: '100px',
        readonly: false,
        maxlength: 0,
        type: 'text',
        dataType: 'date'
    },
    {
        field: 'customer',
        header: 'Customer',
        width: '150px',
        readonly: false,
        maxlength: 40,
        type: 'text'
    },
    {
        field: 'incVAT',
        header: 'IncVAT',
        width: '75px',
        readonly: false,
        maxlength: 5,
        type: 'checkbox',
        dataType : 'boolean'
    },
    {
        field: 'couponAmt',
        header: 'Coupon',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    },
    {
        field: 'itemAmt',
        header: 'Item',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    },
    {
        field: 'vatAmt',
        header: 'Vat',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    },
    {
        field: 'totalAmt',
        header: 'Total',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    }
]
const itemColumns = [
    {
        field: 'name',
        header: 'Name',
        width: '150px',
        readonly: false,
        maxlength: 40,
        type: 'text'
    },
    {
        field: 'price',
        header: 'Price',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    },
    {
        field: 'qty',
        header: 'QTY',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    },
    {
        field: 'discount',
        header: 'Discount',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    },
    {
        field: 'total',
        header: 'Total',
        width: '75px',
        readonly: false,
        maxlength: 10,
        type: 'number'
    }
]
</script>
