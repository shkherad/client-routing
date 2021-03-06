'use strict';

const router = require('./index');

const routes = router.rootNode.children.map((route) => {
  return route.name;
});

const addHandlers = () => {
  routes.forEach((route) => {
    $(`a[href="#${route}"]`).on('click', (event)=>{
      event.preventDefault();
      router.navigate(route)
    });
  });
}

module.exports = {
  addHandlers
};
