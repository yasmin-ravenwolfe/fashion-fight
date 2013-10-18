(function () {

  window.CommentView = Backbone.View.extend({
    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
    },
    events: {
      'click .delete': 'deleteComment'
    },
    className: 'row comment',
    template: _.getTemplate('comment'),
    render: function () {
      var newCommentHtml = this.template( this.model.toJSON() );
      $(this.el).html(newCommentHtml);
      var doesUserOwnComment = g.user.id === this.model.get('user_id');
      $(this.el).find('.delete').toggle(doesUserOwnComment);
      
    },
    deleteComment: function(e){
      e.preventDefault();
      this.model.destroy();
    }
  });

})();
