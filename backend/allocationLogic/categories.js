export const categories = {
    GEN: {
        priority: 1,
        subCategories: ['GNGN', 'GNPWD', 'GNCDP', 'GNCPF', 'GNSPT']
    },
    EWS: {
        priority: 2,
        subCategories: ['EWS', 'EWSSPT', 'EWSPWD', 'EWSCDP', 'EWSCPF']
    },
    SC: {
        priority: 3,
        subCategories: ['SC', 'SCSPT', 'SCPWD', 'SCCDP', 'SCCPF']
    },
    ST1: {
        priority: 4,
        subCategories: ['ST1', 'ST1SPT', 'ST1PWD', 'ST1CDP', 'ST1CPF']
    },
    // ST2: {
    //     main: 'ST2',
    //     sub: ['ST2SPT', 'ST2PWD', 'ST2CDP', 'ST2CPF']
    // },    
    RBA: {
        priority: 5,
        subCategories: ['RBA', 'RBASPT', 'RBAPWD', 'RBACDP', 'RBACPF']
    },
    OBC: {
        priority: 6,
        subCategories: ['OBC', 'OBCPWD', 'OBCCDP', 'OBCCPF', 'OBCSPT'],
        useMainCategory: true  // New flag
    }
};
