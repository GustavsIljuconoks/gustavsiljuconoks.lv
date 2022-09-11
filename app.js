const targetEl = document.getElementById('targetEl');

const triggerEl = document.getElementById('triggerEl');

const options = {
    triggerEl: triggerEl,
    onCollapse: () => {
        console.log("element has been collapsed")
    },

    onExpand: () => {
        console.log("element has been expanded")
    },

    onToogle: () => {
        console.log("element has been toogled")
    }
};

const collapse = new collapse(targetEl, options);

collapse.expand();
collapse.collapse();
collapse.toogle();