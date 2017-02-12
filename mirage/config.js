export default function () {

// These comments are here to help you get started. Feel free to delete them.
  /*
   Config (with defaults).
   Note: these only affect routes defined *after* them!
   */
// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
// this.namespace = '';    // make this `/api`, for example, if your API is namespaced
// this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
   Shorthand cheatsheet:
   this.get('/posts');
   this.post('/posts');
   this.get('/posts/:id');
   this.put('/posts/:id'); // or this.patch
   this.del('/posts/:id');
   http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
   */

  this.namespace = '/api';

  this.get('/messages', () => {
    return [
      { id: 1, author: 'Bruce Wayne', content: 'Message #1' },
      { id: 2, author: 'Clark Kent', content: 'Message #2' },
      { id: 3, author: 'Diana Prince', content: 'Message #3' }
    ];
  });

  this.post('/messages', () => {
    return;
  });
/*
  this.post('/messages', () => {
    return {
      id: 4,
      author: 'Bruce Wayne',
      content: 'Message #4'
    }
  });
*/

}

