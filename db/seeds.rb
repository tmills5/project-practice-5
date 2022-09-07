User.destroy_all


puts "Seeding..."
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

  puts ".....Done"