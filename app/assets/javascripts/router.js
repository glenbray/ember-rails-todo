// For more information see: http://emberjs.com/guides/routing/

TodoEmber.Router.map(function() {
  this.resource('todos', { path: '/' });
});

TodoEmber.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});