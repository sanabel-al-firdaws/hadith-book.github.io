importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");self.addEventListener("widgetinstall",t=>{t.waitUntil(e(t))});self.addEventListener("widgetresume",t=>{t.waitUntil(e(t))});self.addEventListener("widgetclick",t=>{t.action=="updateName"&&t.waitUntil(s(t))});self.addEventListener("widgetuninstall",t=>{});const e=async t=>{const a=t.widget.definition,i={template:JSON.stringify(await(await fetch(a.msAcTemplate)).json()),data:JSON.stringify(await(await fetch(a.data)).json())};await self.widgets.updateByInstanceId(t.instanceId,i)},s=async t=>{const a=t.data.json().name,i=t.widget.definition,n={template:JSON.stringify(await(await fetch(i.msAcTemplate)).json()),data:JSON.stringify({name:a})};await self.widgets.updateByInstanceId(t.instanceId,n)};workbox.precaching.precacheAndRoute([{"revision":null,"url":"code/app-about-d538be84.js"},{"revision":null,"url":"code/bab-al-wodo-1-74f0b1be.js"},{"revision":null,"url":"code/bab-al-wodo-8e7542e2.js"},{"revision":null,"url":"code/bab-salat-al-fajr-1-4ee24272.js"},{"revision":null,"url":"code/bab-salat-al-fajr-1331b91e.js"},{"revision":null,"url":"code/chunk.KRP3ULQL-75875260.js"},{"revision":null,"url":"code/index-37062998.js"},{"revision":null,"url":"code/index-d961e0b8.js"},{"revision":null,"url":"code/index-f4b85155.css"},{"revision":null,"url":"code/kitab-al-akhlaq-ccd107ab.js"},{"revision":null,"url":"code/kitab-al-salah-2355d019.js"},{"revision":null,"url":"code/kitab-al-sawm-f86acdf5.js"},{"revision":null,"url":"code/kitab-al-tahara-255c14bc.js"},{"revision":"c4e65b40ab7c515271739f7a52ea302a","url":"index.html"},{"revision":"0fe8353a5f90936cbdcce361bc88af0f","url":"manifest.json"},{"revision":"0ad293556599e0acb1dad2c26a786622","url":"staticwebapp.config.json"},{"revision":"74171a6083089ceb0ce6f79b58424106","url":"widget/ac.json"},{"revision":"8a8dbb0e25f5f023196d021c299a936f","url":"widget/data.json"}]||[]);
//# sourceMappingURL=sw.js.map
