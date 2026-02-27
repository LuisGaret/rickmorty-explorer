import { router } from "./routes/index";

window.addEventListener('hashchange', async () => {
    await router();
});

window.addEventListener('DOMContentLoaded', async () => {
    await router();
});
