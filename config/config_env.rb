# Copy this file to [app]/config/config_env.rb
# Replace :[ENV_NAME] with environment name
# Replace [*] with key
# Run `rake keys_for_config` to get a DB_KEY & MSG_KEY
# Copy the UI_PRIVATE_KEY & API_PUBLIC_KEY from the API application

config_env :development do
  set 'DB_KEY', 'Q2C-0B3ZuHfHJwvH-Zp7is8oSAenJnAWIyVJzY2SFIw='
  set 'MSG_KEY', 'Q2C-0B3ZuHfHJwvH-Zp7is8oSAenJnAWIyVJzY2SFIw='
  set 'CLIENT_ID', '652595562664-8bi0v0015l5pi2g1hvf2qsjjq6a5g0nm.apps.googleusercontent.com'
  set 'CLIENT_SECRET', 'xM8A13cTt5vxPt0r9_OAMalr'
  set 'UI_PRIVATE_KEY', 'PmnPu3xp7N3w6h0hboo-Rte62KJOmPAKtIYi19CXRZg='
  set 'API_PUBLIC_KEY', 'fjmOHx2zBqoNuAzPQaDzWm6Nb5CToUM2JnC2Cwu2-mE='
end
