# Object to create payload for devs to use on API
class CreatePayloadForDevs
  def initialize(tokens, email, token_set)
    @tokens = JSON.parse tokens
    @email = email
    @token_set = token_set
  end

  def call
    @tokens.each do |token|
      payload = { email: @email, token_set: @token_set, access_key: token[2] }
      payload = EncryptPayload.new(payload.to_json).call
      token << payload
    end
    @tokens
  end
end
