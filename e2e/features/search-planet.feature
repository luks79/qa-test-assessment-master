Feature: Search for a planet 
    
    Scenario: By full name for specific planet
        Given I navigate to "localhost"
        When I search for planet named 'Alderaan'
        Then I see result card for planet named 'Alderaan'
        Then I see planet population is '2000000000'
        Then I see planet climate is 'temperate'
        Then I see planet gravity is '1 standard'
     
        
    Scenario: By part of the name for more results
        Given I navigate to "localhost"
        When I search for planet named 'a'
   


    Scenario: Planet not found
        Given I navigate to "localhost"
        When I search for planet named 'test'
        Then Planet is not found
