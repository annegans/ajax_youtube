require 'sinatra'
require 'pry'
require 'sinatra/contrib/all'
require 'pg'



get '/' do 
  erb :index
end


get '/videos' do
  sql = "select * from videos"
  @video = run_sql(sql)
  
  if request.xhr?
    json @video.to_a
  else
    erb :index
  end
end

post '/videos' do
  title = params[:title]
  description = params[:description]
  url = params[:url]
  genre = params[:genre]
  sql = "insert into videos (title, description, url, genre) values ('#{params[:title]}', '#{params[:description]}', '#{params[:url]}','#{params[:genre]}')"
  @video = run_sql(sql)
  if request.xhr?
    json @video.to_a
  else
    erb :index
  end
end


get '/videos/:id' do
  sql = "select * from videos  WHERE id='#{params[:id]}"
  @video = run_sql(sql)
  
  if request.xhr?
    json @video.to_a
  else
    erb :index
  end
end







private 

def run_sql(sql)
  conn = PG.connect(dbname: 'tube', host: 'localhost')
  begin
    result = conn.exec(sql)
  ensure 
    conn.close
  end
  result
end