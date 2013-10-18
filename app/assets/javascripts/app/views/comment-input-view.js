(function () {

  window.CommentInputView = Backbone.View.extend({
    // this works because in show the commentForm's el is 'form.newc-omment' which we hide is contests scss.
    initialize: function(options){
      if (g.user) {
        $(this.el).show();
      }
    },
    events: {
      'submit': 'createComment'
    },
    createComment: function (e) {
      e.preventDefault();
      // This converts the form's input values into a nice javascript object
      var newCommentData = _.formToJSON(this.el);
      console.log('New comment data:', newCommentData);

      // Adds our new comment to the collection
      this.collection.create(newCommentData);

      // Clears input values
      $(this.el).find('input[type="text"], textarea').val('');
    }
  });

})();
