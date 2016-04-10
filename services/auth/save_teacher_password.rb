# Object to save teacher password
class SaveTeacherPassword
  def initialize(api, email, password)
    @api = api
    @email = email
    @password = password
  end

  def call
    payload = EncryptPayload.new({ email: @email }.to_json).call
    HTTParty.delete("#{@api}/tokens",
                    headers: { 'AUTHORIZATION' => "Bearer #{payload}" })
    teacher = Teacher.find_by_email(@email)
    teacher.password = @password
    if teacher.save
      SavePasswordToSessionVar.new(@password, teacher.token_salt).call
    else
      fail('This is a weird one.')
    end
  end
end
