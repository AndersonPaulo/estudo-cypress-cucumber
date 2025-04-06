Feature:Login

Scenario: Valid Login
Given I'm on the login page
When I type a registered my user and password
Then I have a successful login

Scenario: Invalid Login with user wrong
Given I'm on the login page
When I type a registered wrong user and done password
Then show it a message as this 'Epic sadface: Username and password do not match any user in this service'

Scenario: Invalid Login with password wrong
Given I'm on the login page
When I type a registered done user and wrong password
Then show it a message as this  'Epic sadface: Username and password do not match any user in this service'

Scenario: Invalid Login with user and password Empty
Given I'm on the login page
When I type a registered user and password Emptys
Then show it a message as this 'Epic sadface: Username is required'

Scenario: Invalid Login with  user done and password Empty
Given I'm on the login page
When I type a registered user done and password Empty
Then show it a message as this 'Epic sadface: Password is required'

Scenario: Invalid Login with user Empty and password done
Given I'm on the login page
When I type a registered user Empty and password done
Then show it a message as this 'Epic sadface: Username is required'