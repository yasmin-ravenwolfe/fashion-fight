class Comment < ActiveRecord::Base
  belongs_to :contest
  belongs_to :user

  def as_json(options={})
    {
      id: self.id,
      user_id: self.user_id,
      contest_id: self.contest_id,
      side: self.side,
      username: self.username,
      comment: self.comment
    }
  end
end
