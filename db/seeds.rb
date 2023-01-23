puts "Clearing db..."
Wishlist.destroy_all
Gift.destroy_all
User.destroy_all

puts "🏕 Seeding users..."
user1 = User.create(first_name: 'Anna', last_name: 'Harder', username: 'annaqhh', password: '123', avatar_url: 'https://t3.ftcdn.net/jpg/02/73/71/46/360_F_273714684_GXTZHmfFM3yvZwP7KaGc1h2Md00F83UF.jpg')

puts "🏕 Seeding gifts..."
gift1 = Gift.create!(item: 'Ray-Ban Flat Lens Hexagonal Sunglasses', quantity: 1, price: 112.70, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637475517.png?width=800', link_url: 'https://www.amazon.com/gp/product/B01MZ79U8E?ie=UTF8&tag=giftful04-20&camp=1789&creative=9325&creativeASIN=B01MZ79U8E')
gift2 = Gift.create!(item: 'lululemon Everywhere Belt Bag', quantity: 1, price: 38.00, image_url: 'https://images.lululemon.com/is/image/lululemon/LU9AZ5S_055043_1?size=800,800', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fshop.lululemon.com%2Fp%2Fbags%2FEverywhere-Belt-Bag%2F_%2Fprod8900747%3Fcolor%3D47798%26sz%3DONESIZE&xs=1&xtz=240&xuuid=53d2c1ed532cb8b1022b3eb380cae413&xjsf=other_click__contextmenu%20%5B2%5D')
gift3 = Gift.create!(item: 'OUAI Dean Street Eau de Parfum', quantity: 1, price: 56.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637519526.png?width=800', link_url: 'https://www.ulta.com/p/dean-street-eau-de-parfum-pimprod2025730?AID=165150&PID=10078&CID=af_165150_10078_&clickId=XBwXgB0-mxyNUGr1692t21xJUkDQ0KUY00000w0&SubID=giftful.com&utm_medium=affiliate&utm_source=10078&utm_campaign=Content&utm_content=core&irgwc=1')
gift4 = Gift.create!(item: 'The Lip Trio in Cranberry',quantity: 1, price: 50.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637517839.png?width=550', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fwww.glossier.com%2Fproducts%2Fthe-lip-trio-in-cranberry&xs=1&xtz=240&xuuid=aa0bc7d5e1b0f17800d9bf4b981352c4&xjsf=other_click__auxclick%20%5B1%5D')
gift5 = Gift.create!(item: 'Quilted Jersey Robe', quantity: 1, price: 148.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637473981.jpg?width=800', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fhuckberry.com%2Fstore%2Fwellen%2Fcategory%2Fp%2F71976-quilted-jersey-robe&xs=1&xtz=240&xuuid=aa0bc7d5e1b0f17800d9bf4b981352c4&xjsf=other_click__auxclick%20%5B1%5D')

puts "✅ Done seeding!"
