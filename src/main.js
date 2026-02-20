import { router } from "./routes/index";
import NProgress from "nprogress";
import "nprogress/nprogress.css";


window.addEventListener('hashchange', () => {
    NProgress.start();
    router();
    NProgress.done();
    } 
);

window.addEventListener('DOMContentLoaded', () => {
    NProgress.start()
    router()
    NProgress.done()
});
