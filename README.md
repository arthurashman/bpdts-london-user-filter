# BPDTS London User Filter

This project builds an API to fetch and filter users from an external API based on their proximity to London.  


[See here]( https://bpdts-test-app.herokuapp.com/) fthe external API documentation


### Getting started
```
Fork or clone this repo:      
`git clone git@github.com:arthurashman/bpdts-london-user-filter.git`    
`npm install`     
```
### Usage

Start server with:  
`
npm run app
`


### Testing

`npm test`

## Task
 Build an API which calls the API at https://bpdts-test-app.herokuapp.com/, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London.


## Assumptions
  All assumptions have been made in lieu of discussing with the product owner and/or other stakeholders.

  1. "London" will be defined as London, UK
  2. The coordinates of London based on UK distance signage measurements from Charing Cross are: `latitude: 51.50853, longitude: -0.12574`
  3. Those listed as living in London (as returned from /city/London/users) are to be disregarded as their coordinates do not fall within a 50 mile radius of London, UK
  4. The earth's radius is 3956.5 miles