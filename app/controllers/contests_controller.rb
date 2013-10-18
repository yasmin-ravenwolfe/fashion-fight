class ContestsController < ApplicationController
  before_filter :authenticate_user!, :only => [:comment, :destroy_comment]
  def index
    @contests = Contest.all
  end

  def show
    @contest = Contest.find(params[:id])
  end

  def comment
    @contest = Contest.find(params[:id])
    new_comment = @contest.comments.create(comment_params)
    new_comment.user_id = current_user.id
    new_comment.save!

    render :json => new_comment.to_json, :status => 200
  end

  def destroy_comment
    @comment = Comment.where(
      :id => params[:comment_id],
      :contest_id => params[:contest_id]
    ).first

    @comment.destroy if @comment.user_id == current_user

    render :nothing => true, :status => 200
  end

private
# destroy?
  def comment_params
    params.permit(:side, :username, :comment, :destroy)
  end

end
