require 'securerandom'

secret = SecureRandom.base64(64)
File.open(".env", "w") do |file|
  file.puts "APP_SECRET=#{secret}"
end

ENV["APP_SECRET"] = secret
require './app'

User.create email: "admin@example.com", password: "password"

Article.create title: "Domestic liability dollarization",
               body: "Domestic liability dollarization (DLD) refers to the denomination of banking system deposits and lending in a currency other than that of the country in which they are held. DLD does not refer exclusively to denomination in US dollars, as DLD encompasses accounts denominated in internationally traded \"hard\" currencies such as the British pound sterling, the Swiss franc, the Japanese yen, and the Euro (and some of its predecessors, particularly the Deutschmark).",
               tags: ["finance", "liability"]

Article.create title: "Lorem ipsum",
               body: "In publishing and graphic design, lorem ipsum is a filler text commonly used to demonstrate the graphic elements of a document or visual presentation. Replacing meaningful content that could be distracting with placeholder text may allow viewers to focus on graphic aspects such as font, typography, and page layout.\n\nThe lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed such that it is nonsensical, improper Latin.",
               tags: ["text", "default"],
               published: true

