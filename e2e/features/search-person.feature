Feature: Search for a Star Wars character
    
    Scenario: By full name for specific user
        Given I navigate to "localhost"
        When I search for person named 'Luke Skywalker'
        Then I see result card for person named 'Luke Skywalker'
        Then I see person gender is 'male'
        Then I see person birth year is '19BBY'
        Then I see person has eye color 'blue'
        Then I see person has skin color 'fair'       
        
    Scenario: By part of the name for more results
        Given I navigate to "localhost"
        When I search for person named 'le'
        


    Scenario: Person not found
        Given I navigate to "localhost"
        When I search for person named 'test'
        Then Person is not found
