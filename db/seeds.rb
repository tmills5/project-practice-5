require 'rest-client'
require 'json'

User.destroy_all
Comment.destroy_all
Brewery.destroy_all
Post.destroy_all



puts "Seeding Users.."

User.create(
  email: "ty@gmail.com",
  password: "123",
  username: "tyty",
  is_admin: "true"
)

5.times do
    User.create(
      email: Faker::Internet.email,
      password: "123",
      username: Faker::Internet.username
    )
  end

  puts "Seeding Comments..."

  20.times do
    Comment.create(
      user_id: rand(1..6),
      post_id: rand(1..10),
      comment_body: "Well, hello there..."
    )
  end

puts "Seeding Breweries.."

def brewery_dataset
  response = RestClient.get('https://api.openbrewerydb.org/breweries', headers: {'Content-Type': 'application/json'})
  json = JSON.parse(response)

  json.each do |brewery|
    Brewery.create!(
      name: brewery["name"],
      brewery_type: brewery["brewery_type"],
      street: brewery["street"],
      city: brewery["city"],
      state: brewery["state"],
      postal_code: brewery["postal_code"],
      country: brewery["country"],
      phone: brewery["phone"],
      website_url: brewery["website_url"]
      )
    end
end

brewery_dataset()




puts "Seeding Posts...."

10.times do
  Post.create(
    user_id: rand(1..6),
    post_title: Faker::Lorem.words(number: 3).upcase,
    post_content: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false) 
  )
end

puts ".....Done"