
puts "seeding"

user1 = User.create(name:Faker::Name.name,contact:Faker::PhoneNumber.cell_phone,username:"james",password:"james0001",password_confirmation:"james0001")
user2 = User.create(name:Faker::Name.name,contact:Faker::PhoneNumber.cell_phone,username:"peter",password:"peter0001",password_confirmation:"peter0001")
user3 = User.create(name:Faker::Name.name,contact:Faker::PhoneNumber.cell_phone,username:"john",password:"john0001",password_confirmation:"john0001")


puts "seeding properties"

Property.create(name: "Johnsons Properties",description: "Modern 6 bedroom apartment fully detached duplex ikota lekki 190m",price: 450000, image_url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",location:"Ruaka",no_of_bedrooms: 5, no_of_bathrooms: 5,user_id: user1.id)
Property.create(name: "Duanes Properties",description: "Beautiful full furnished two bedroom for sale At orchid lekki without furniture 40m with the furnitures 45m call or WhatsApp ",price: 560000, image_url: "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",location:"Runda",no_of_bedrooms: 6, no_of_bathrooms: 5,user_id: user3.id)
Property.create(name: "Ochiengs Properties",description: "5 bedrooms fully detached luxury home with BQ and swimming pool... ",price: 200000, image_url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",location:"Kilimani",no_of_bedrooms: 7, no_of_bathrooms: 7, user_id: user2.id)
Property.create(name: "ForestGreen Properties",description: "Beautiful built terraces in well secured environment with one room bq in a seeviced estate",price: 730000, image_url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fEhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",location:"BurBuru",no_of_bedrooms: 4, no_of_bathrooms: 3,user_id: user1.id)
Property.create(name: "Lizzas Properties",description: "Exclusively built 4bedroom terrace duplex with BQ and Gym",price: 620000, image_url: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",location:"Thika Road, Muthaiga",no_of_bedrooms: 6, no_of_bathrooms: 5,user_id: user2.id)
Property.create(name: "Marks Apartments",description: "A clean and beautifully finished and fully furnished 4- bedroom semi detached house with BQ and Gate house, in a very decent neighbourhood, near Chevron-Parking space for 4 cars",price: 900000, image_url: "https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",location:"Kamulu",no_of_bedrooms: 8, no_of_bathrooms: 7,user_id: user3.id)

puts "done seeding"