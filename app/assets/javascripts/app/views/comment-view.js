(function () {

  window.CommentView = Backbone.View.extend({
    events: {
      'click delete': 'deleteComment'
    },
    className: 'row comment',
    template: _.getTemplate('comment'),
    render: function () {
      var newCommentHtml = this.template( this.model.toJSON() );
      $(this.el).html(newCommentHtml);
      this.listenTo()
    },
    deleteComment: function(){
      this.model.destroy();
    }
  });

})();
