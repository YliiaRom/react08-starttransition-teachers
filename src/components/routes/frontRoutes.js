export default {
  pages: {
    practice: "/",
    teachersMain: {
      index: "/teachers-every",
      teachers: {
        index: "teachers",
        add: "new",
        edit: ":id/edit",
        detail: ":id/detail",
      },
      meeting: "meeting",
      aboutApp: "about-app",
      aboutDev: "about-dev",
    },
  },
  navigate: {
    practice: "/",
    teachersMain: {
      index: "/teachers-every",
      teachers: {
        index: "/teachers-every/teachers",
        add: "/teachers-every/teachers/new",
        edit: (id) => `/teachers-every/teachers/new/${id}/edit`,
        detail: (id) => `/teachers-every/teachers/new/${id}/detail`,
      },
      meeting: "/teachers-every/meeting",
      aboutApp: "/teachers-every/about-app",
      aboutDev: "/teachers-every/about-dev",
    },
  },
};
