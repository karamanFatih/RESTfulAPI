# RESTfulAPI
API Required Information

MongoDB URI:

mongodb+srv://dbUser:dbPassword@cluster0-6ehlt.mongodb.net/?ssl=true&authSource=admin

List Request Payload:

The request paload will include a JSON with 2 fields. “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You should filter the data using “last_scraped”

Sample:

{
“startDate” : ”2019-01-01”,
“endDate” : ”2019-02-01”
}

Content Request Payload:

The request payload will include a JSON with “_id” field. You should filter the data using “_id”

Sample:

{
“_id” : ”10108388”
}

Response Payload:

Response payload should have 3 main fields for successful result.

•	“code” is for status of the request. 0 means success. Other values may be used for error that you define.

•	“message” is for description of the code. You can set it to “success” for successful request. For unsuccessful requests, you should use explanatory message.

List Response:

•	“records” will include all the filtered items according to the request. This array should include items of “_id”, “name”.

Sample:

{
“code” : 0,
“message” : ”Success”,
“records”: [
{
“_id”: “10038496”,
“name”: “Copacabana Apartment Posto 6”
}
...
]
}
 

Content Response:

•	“records” will include all the filtered items according to the request. This array should include items of “_id”, “name”, “accommodates”, ”bedrooms”, ”beds”, ”bathrooms”, “amenities”, “images”, “address”,“summary”, “price”, “monthly_price”, “weekly_price”, “security_deposit”, “cleaning_fee”, “review_score”, “reviews”, “space”, ”neighborhood_overview”, ”notes”, ”transit”, ”access”, ”interaction”

Sample:

{
“code” : 0,
“message” : ”Success”,
“records”: [
{
“_id”: “10038496”,
“name”: “Copacabana Apartment Posto 6”,
“host”: {
host_name: “Ana Valéria”,
host_location: “Rio de Janeiro, State of Rio de Janeiro, Brazil”,
host_picture_url:”https://a0.muscache.com/im/pictures/8c7bb5fe-7b6d-4d03-a465-aae8971a87a0.jpg?aki_policy=profile_x_medium”
}
“accommodates”: 4,
”bedrooms”: 1,
”beds”: 3,
”bathrooms”: 2,
“amenities”: [“TV”,”Cable TV”,”Internet”,…],
“images”: {
“picture_url”: “https://a0.muscache.com/im/pictures/159d489e-62ad-44c4-80a0-fab2a8f3b455.jpg?aki_policy=large”
},
“address”: {
“street”: “Rio de Janeiro, Rio de Janeiro, Brazil”,
“suburb”: “Copacabana”,
“government_area”: “Copacabana”,
“market”: “Rio De Janeiro”,
“country”: “Brazil”,
“country_code”: “BR”
},
“summary”: “…”,
“price”: 119,
“monthly_price”: null,
“weekly_price”: null,
“security_deposit”: 600,
“cleaning_fee”: 150,
“review_score”: {
“review_scores_rating”: 98,
“review_scores_location”: 10,
“review_scores_cleanline”: 10
},
“reviews”:[
 
{

“date”: “2017-03-24 04:00:00.000”,
“reviewer_name”: “Hernan”,
“comments”: “…”
},
…
] ,
“space”: “…”,
”neighborhood_overview”: “…”,
”notes”: “…”,
”transit”: “…”,
”access”: “…”,
”interaction”: “…”
},
...
]
}

