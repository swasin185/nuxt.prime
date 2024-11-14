<template>
  <div>
    <Menubar :model="menu" />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import type { MenuItemCommandEvent } from "primevue/menuitem";
const menu = [
  {
    label: "Home",
    icon: "pi pi-home",
    items: [
      { label: "Welcome", to: "/" },
      { label: "Login/out", to: "/login" },
      { label: "Reload", command: () => location.reload() },
      { label: "Exit", to: "/" }
    ]
  },
  {
    label: 'Setting',
    icon: 'pi pi-cog',
    items: [
      { label: 'สถานะเซิฟเวอร์', icon: 'pi pi-server', to: '/setting/ServerStatus' },
      { label: 'ผู้ใช้', icon: 'pi pi-user-edit' },
      { label: 'สิทธิการใช้งาน', icon: 'pi pi-lock-open' }
    ]
  },
  {
    label: 'Game',
    icon: 'pi pi-prime',
    items: [
      { label: 'Mandelbrot', icon: 'pi pi-chart-scatter', to: '/game/Mandelbrot' },
      { label: 'Maze', icon: 'pi pi-compass', to: '/game/Maze' },
      { label: 'Montyhall', icon: 'pi pi-sitemap', to: '/game/Monty' },
      { label: 'Pascal Triangle', icon: 'pi pi-sort-up-fill', to: '/game/Pascal' },
      { label: 'Sorting', icon: 'pi pi-sort', to: '/game/Sort' }
    ]
  },
  {
    label: 'Work',
    icon: 'pi pi-id-card',
    items: [
      { label: 'Invoice', icon: 'pi pi-receipt', to: '/work/TaxInvoice' }
    ]
  },
  {
    label: "Tutorial",
    icon: 'pi pi-book',
    items: [
      { label: "Installation", icon: 'pi pi-file', to: "/tutorial/install" },
      { label: "PrimeVue", icon: 'pi pi-file', to: "/tutorial/primevue" },
      { label: "Prime Flex/Icon", icon: 'pi pi-file', to: "/tutorial/flexicon" },
      { label: "UserSession", icon: 'pi pi-file', to: "/tutorial/usersession" },
      { label: "Middleware", icon: 'pi pi-file', to: "/tutorial/middleware" },
      { label: "Content", icon: 'pi pi-file', to: "/tutorial/content" },
    ]
  }
];

for (const head of menu)
  head.items.forEach((item: any) => {
    if (!item.command)
      item.command = (event: MenuItemCommandEvent) => navigateTo(event.item.to);
  });
</script>
