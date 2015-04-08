require 'bundler'
Bundler.require

get '/' do
  erb :index
end

get '/quad' do
  erb :quadcalc
end

get '/pythagorean' do
  erb :pythagoreancalc
end
get '/factorial' do
  erb :factorialcalc
end