Feature: Menu

  Scenario Outline: Validate a search for a product
    Given I'm at home
    When Search for a product "<nameProduct>"
    Then Presents the researched product "<nameProduct>"

    Examples:
      | nameProduct                   | 
      | HP USB 3 Button Optical Mouse | 
