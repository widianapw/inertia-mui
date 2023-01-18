// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
    login: '/login',
};

export const PATH_DASHBOARD = {
    root: "/",
    one: "/",
    two: "/page-two",
    three: "/page-three",
    user: {
        root: path(ROOTS_DASHBOARD, '/user'),
        four: path(ROOTS_DASHBOARD, '/user/four'),
        five: path(ROOTS_DASHBOARD, '/user/five'),
        six: path(ROOTS_DASHBOARD, '/user/six'),
    },
};
