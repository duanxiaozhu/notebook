import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/Login";
import Notebooks from "@/components/NotebookList.vue";
import NoteDetail from "@/components/NoteDetail.vue";
import TrashDetail from "@/components/TrashDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: "/login",
      component: Login
    },
    {
      path: "/notebooks",
      component: Notebooks
    },
    {
      path: "/note/:noteId",
      component: NoteDetail
    },
    {
      path: "/trash/:noteId",
      component: TrashDetail
    }
  ]
});
