require 'virtus'
require 'active_model'

DATA_OPTIONS = %w(
  activity users assignments discussion_topics student_summaries
  enrollments quizzes
)

# Value object that checks what is in the data field.
class CheckData
  include Virtus.model
  include ActiveModel::Validations

  attribute :data, String
  validates_inclusion_of :data, in: DATA_OPTIONS
end
