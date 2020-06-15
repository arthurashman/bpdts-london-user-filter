# BPDTS London User Filter

This project builds an API to fetch and filter users from an external API based on their proximity to London.  

[See here]( https://bpdts-test-app.herokuapp.com/) for the external API documentation

## Task
 Build an API which calls the API at https://bpdts-test-app.herokuapp.com/, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London.

### Getting started
Fork or clone this repo:      

`git clone git@github.com:arthurashman/bpdts-london-user-filter.git` 

`npm install`     

### Usage

Start server with:  
`npm run app`

### Testing

`npm test`

## Assumptions
  All assumptions have been made in lieu of discussing with the product owner and/or other stakeholders.

  1. "London" will be defined as London, UK
  2. The coordinates of London based on UK distance signage measurements from Charing Cross are: `latitude: 51.50853, longitude: -0.12574`
  3. 'Within 50 miles' defined as a radius of 50 miles centred on the above coordinates. Users must be less than 50 miles away to be considered 'within'.
  4. Those listed as living in London (as returned from the /city/London/users API) are to be disregarded as their coordinates do not fall within a 50 mile radius of London, UK
  5. The earth's radius will be defined at 3956.5 miles

## Improvements/Limitations

I would have ideally have provided tests for the routes, asserting against happy and sad paths - I was unable to find a test framework that would shut down the server upon completion of the tests however, so have not implemented these. 

Given more resources, I would certainly have pursued a solution to have these set up to provide a more robustly tested API. 